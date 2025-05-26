'use client';

import { useEffect, useRef } from 'react';

const TradingViewChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up previous script
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;

    const config = {
      autosize: true,
      symbol: 'BINANCE:BTCUSDT',
      interval: '60',
      timezone: 'Etc/UTC',
      theme: 'dark',
      style: '1',
      locale: 'en',
      enable_publishing: false,
      hide_top_toolbar: false,
      save_image: false,
      container_id: 'tradingview_chart',
    };

    script.innerHTML = JSON.stringify(config);
    containerRef.current.appendChild(script);
  }, []);

  return (
    <section className="relative px-4 md:px-12 text-white overflow-hidden z-50">
      <div className="absolute left-[-200px] top-[-100px] w-[600px] h-[600px]  rounded-full blur-[120px] opacity-40 pointer-events-none z-0" />
      <div className="absolute right-[-200px] bottom-[-100px] w-[600px] h-[600px] rounded-full blur-[120px] opacity-40 pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Live <span className="text-primary">Market Chart</span>
        </h2>
        <div
          id="tradingview_chart"
          ref={containerRef}
          className="w-full h-[500px] border border-gray-800 rounded-xl overflow-hidden"
        />
      </div>
    </section>
  );
};

export default TradingViewChart;
