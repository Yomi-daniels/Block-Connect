'use client';
import {debounce } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import CoinCard from './CoinCard';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
  price_change_percentage_24h: number;
}

const currencies = ['usd', 'eur', 'gbp', 'jpy', 'inr'];

const DailyRates: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [currency, setCurrency] = useState<string>('usd');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  useEffect(() => {
    async function fetchRates() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`
        );
        const data = await res.json();
        setCoins(data);
      } catch (error) {
        console.error('Failed to fetch rates:', error);
      } finally {
        setLoading(false);
        setVisibleCount(6);
      }
    }
    fetchRates();
  }, [currency]);

  useEffect(() => {
  const timeout = setTimeout(() => {
    setSearchQuery(search);
  }, 300); // delay update by 300ms

  return () => clearTimeout(timeout);
}, [search]);


const [searchQuery, setSearchQuery] = useState('');
 const debounceSearch = useMemo(() => 
    debounce((value: string) => {
      setSearchQuery(value);
    }, 300), // 300ms debounce delay
  []);


const filteredCoins = coins.filter((coin) =>
  coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
);


  // const filteredCoins = coins.filter((coin) =>
  //   coin.name.toLowerCase().includes(search.toLowerCase()) ||
  //   coin.symbol.toLowerCase().includes(search.toLowerCase())
  // );

  const visibleCoins = filteredCoins.slice(0, visibleCount);

  const handleSeeMore = () => setVisibleCount((prev) => prev + 6);

  return (
    <section className="relative py-20 px-6 bg-[#0f172a] text-white overflow-hidden min-h-screen">
      {/* Radial Gradient Background */}
      <div className="absolute left-[-150px] top-[-100px] w-[500px] h-[500px] bg-[#15bffd33] rounded-full blur-[100px] opacity-40 z-0" />
      <div className="absolute right-[-150px] bottom-[-100px] w-[500px] h-[500px] bg-[#15bffd33] rounded-full blur-[100px] opacity-40 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-3">
            Daily <span className="text-primary">Crypto Rates</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-primary rounded-full" />
        </div>

        {/* Search & Currency Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-3xl mx-auto mb-12">
          <div className="relative w-full sm:w-2/3">
            <input
              type="text"
              value={search}
              onChange={(e) => {
      setSearch(e.target.value); // update input immediately to keep input controlled
      debounceSearch(e.target.value); // debounce updating the searchQuery for filtering
    }}
              placeholder="Search coin by name or symbol..."
              className="w-full py-3 pl-12 pr-4 rounded-lg bg-[#1e293b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition"
              aria-label="Search coins"
            />
            <svg
              className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full sm:w-1/3 py-3 px-4 rounded-lg bg-[#1e293b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition"
            aria-label="Select currency"
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Content */}
        {loading ? (
          <p className="text-gray-400 text-center text-lg">Loading rates...</p>
        ) : filteredCoins.length === 0 ? (
          <p className="text-gray-400 text-center text-lg">No coins found matching "{search}".</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
              {visibleCoins.map((coin) => (
                 <CoinCard key={coin.id} coin={coin} currency={currency} />
              ))}
            </div>

            {/* See More Button */}
            {visibleCount < filteredCoins.length && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={handleSeeMore}
                  className="px-8 py-3 bg-primary text-black font-semibold rounded-full hover:bg-primary-dark shadow-lg transition"
                  aria-label="Load more coins"
                >
                  See More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default DailyRates;
