import Image from 'next/image';
import React from 'react';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
  price_change_percentage_24h: number;
}

interface CoinCardProps {
  coin: Coin;
  currency: string;
}

const CoinCard: React.FC<CoinCardProps> = React.memo(({ coin, currency }) => {
  return (
    <div className='relative'>
      <div className='absolute left-[-1%] top-[-3%] w-[50px] h-[205px] object-cover'>
        <Image src="/Vector 34.png" alt='image' fill  />
      </div>
      <div
        className=" bg-background relative p-6 rounded-2xl shadow-lg border border-gray-800 transition flex flex-col "
        role="article"
        aria-label={`${coin.name} crypto information`}
      >
        <div className="flex items-center gap-4 mb-6">
          <img src={coin.image} alt={coin.name} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="text-xl font-semibold">{coin.name}</h3>
            <p className="text-sm uppercase text-gray-400 tracking-wide">{coin.symbol}</p>
          </div>
        </div>
        <p className="text-3xl font-extrabold tracking-tight mb-2">
          {currency.toUpperCase()} {coin.current_price.toLocaleString()}
        </p>
        <p
          className={`text-lg font-semibold ${
            coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
       <div className='absolute right-[-1%] top-[-3%] w-[50px] h-[205px] object-cover'>
        <Image src="/Vector 35.png" alt='image' fill  />
      </div>
    </div>
  );
});

export default CoinCard;
