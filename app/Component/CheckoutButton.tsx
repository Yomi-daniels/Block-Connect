'use client';

import React from 'react';
import { openPay } from '@reown/appkit-pay';
import { baseETH } from '@reown/appkit-pay';

export default function CheckoutButton() {
  const handleCheckout = async () => {
    try {
      await openPay({
        recipient: '0xC143aC359E459B0992Ccf244517045d138c5C2bc', // Replace this
        amount: 0.0000,                         // Specify the payment amount
        paymentAsset: baseETH,               // Choose a supported payment asset
      });
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Pay with One Click
    </button>
  );
}

