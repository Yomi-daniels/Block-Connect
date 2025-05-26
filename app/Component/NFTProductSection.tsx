
'use client';

import React, { useState } from 'react';
import { openPay, baseETH } from '@reown/appkit-pay';

interface NFTProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  priceEth: number;
}

const nftProducts: NFTProduct[] = [
  {
    id: '1',
    name: 'CryptoArt #001',
    description: 'Unique digital art piece, limited edition.',
    image: '/2024_03_15_18_46_IMG_8142.GIF',
    priceEth: 0.05,
  },
  {
    id: '2',
    name: 'CryptoArt #002',
    description: 'Rare collectible art NFT.',
    image: '/2024_03_15_18_45_IMG_8141.GIF',
    priceEth: 0.1,
  },
    {
    id: '3',
    name: 'CryptoArt #003',
    description: 'Rare collectible art NFT.',
    image: '/8054257 1.png',
    priceEth: 0.1,
  },
    {
    id: '4',
    name: 'CryptoArt #004',
    description: 'Rare collectible art NFT.',
    image: '/bored-6945309_640 1.png',
    priceEth: 0.1,
  },
];

const NFTProductSection: React.FC = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    nftProducts.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {})
  );
  const [buyingId, setBuyingId] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleQuantityChange = (id: string, value: number) => {
    if (value < 1 || value > 10) return;
    setQuantities((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckout = async (product: NFTProduct) => {
    setBuyingId(product.id);
    setSuccessMsg(null);
    setErrorMsg(null);

    const quantity = quantities[product.id];
    const totalAmount = product.priceEth * quantity;

    try {
      await openPay({
        recipient: '0xYourRecipientAddressHere', // Replace with your wallet address
        amount: totalAmount,
        paymentAsset: baseETH,
      });

      setSuccessMsg(`Successfully purchased ${quantity}x ${product.name}!`);
    } catch (error: any) {
      setErrorMsg(error?.message || 'Payment failed. Please try again.');
    } finally {
      setBuyingId(null);
    }
  };

  return (
    <section className="py-20 px-6 bg-[#0f172a] text-white relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Exclusive <span className="text-primary">NFT Collection</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {nftProducts.map((product) => {
            const quantity = quantities[product.id];
            return (
              <div
                key={product.id}
                className=" p-6 rounded-2xl shadow-lg border border-gray-500 hover:border-primary transition flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg mb-4 object-contain h-[250px] w-full bg-black"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-300 flex-grow">{product.description}</p>

                {/* Quantity selector */}
                <div className="mt-4 flex items-center space-x-3">
                  <label htmlFor={`qty-${product.id}`} className="text-white font-semibold">
                    Quantity:
                  </label>
                  <input
                    id={`qty-${product.id}`}
                    type="number"
                    min={1}
                    max={10}
                    value={quantity}
                    onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}
                    className="w-16 text-black rounded-md px-2 py-1"
                  />
                </div>

                <p className="mt-4 font-bold text-2xl text-primary">
                  {(product.priceEth * quantity).toFixed(3)} ETH
                </p>

                <button
                  disabled={buyingId === product.id}
                  onClick={() => handleCheckout(product)}
                  className="mt-6 bg-primary hover:bg-primary-dark text-black font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {buyingId === product.id ? 'Processing...' : 'Buy Now'}
                </button>
              </div>
            );
          })}
        </div>

        {successMsg && (
          <p className="mt-8 text-green-400 text-center font-semibold">{successMsg}</p>
        )}
        {errorMsg && (
          <p className="mt-4 text-red-500 text-center font-semibold">{errorMsg}</p>
        )}
      </div>
    </section>
  );
};

export default NFTProductSection;
