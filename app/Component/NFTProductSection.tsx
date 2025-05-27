
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
    image: '/desktop-wallpaper-hapebeast-prime-nft-monkey-thumbnail 2.png',
    priceEth: 0.05,
  },
  {
    id: '2',
    name: 'CryptoArt #002',
    description: 'Rare collectible art NFT.',
    image: '/desktop-wallpaper-salvataggi-rapidi-nft-monkey 1.png',
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
    <section className="py-20 px-6 bg-[#0f172a] text-white relative">
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Exclusive <span className="text-primary">NFT Collection</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-sm:gap-1">
          {nftProducts.map((product) => {
            const quantity = quantities[product.id];
            return (
              <div key={product.id} className="relative w-full h-[500px] rounded-[20px] ">
  {/* Background image frame */}
  <img
    src="/Subtract.png" // path to your uploaded image
    alt="NFT Card Frame"
    className="relative w-full h-full max-sm:h-[650px] object-contain z-0 pointer-events-none  max-sm:py-6"
  />

  {/* Card content */}
  <div className="absolute top-0 left-0 z-10 p-6 h-full flex flex-col text-white items-start gap-5 max-sm:mt-[5.5rem]">
    <img
      src={product.image}
      alt={product.name}
      className="rounded-md mb-4 max-sm:mb-2 object-contain bg-black h-[120px] max-sm:h-[80px] w-full "
    />
    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
    <p className="text-gray-300">{product.description}</p>

    <div className="mt-4 max-sm:mt-0 flex items-center space-x-3">
  <label htmlFor={`qty-${product.id}`} className="text-white font-semibold">
    Quantity:
  </label>

  <div className="flex items-center space-x-2">
    <button
      onClick={() =>
        handleQuantityChange(product.id, quantities[product.id] - 1)
      }
      className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded hover:bg-gray-600"
      disabled={quantities[product.id] <= 1}
    >
      −
    </button>

    <input
      id={`qty-${product.id}`}
    
      min={1}
      max={10}
      value={quantities[product.id]}
      onChange={(e) =>
        handleQuantityChange(product.id, Number(e.target.value))
      }
      className="w-16 text-white rounded-md px-2 py-1 text-center bg-black"
    />

    <button
      onClick={() =>
        handleQuantityChange(product.id, quantities[product.id] + 1)
      }
      className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded hover:bg-gray-600"
      disabled={quantities[product.id] >= 10}
    >
      +
    </button>
  </div>
</div>


    <p className="mt-4 font-bold text-2xl text-primary">
      {(product.priceEth * quantities[product.id]).toFixed(3)} ETH
    </p>
<button
  disabled={buyingId === product.id}
  onClick={() => handleCheckout(product)}
  className={`
    mt-4 max-sm:mt-2 w-[140px] max-sm:w-[90px] py-2 font-semibold rounded-lg transition
    disabled:opacity-50 disabled:cursor-not-allowed
    border border-transparent bg-transparent relative z-10
    before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-br
    before:from-purple-500 before:to-cyan-400 before:z-[-1]
    before:content-[''] before:pointer-events-none
    text-white hover:text-cyan-400
  `}
>
  {buyingId === product.id ? 'Processing...' : 'Buy Now'}
</button>

  </div>
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
