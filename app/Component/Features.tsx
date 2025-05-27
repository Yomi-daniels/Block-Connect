import { Sparkles, ShieldCheck, Wallet, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Secure Wallet Connection',
    description:
      'Safely connect and interact with decentralized apps with bank-level encryption and secure protocols.',
    icon: <ShieldCheck size={32} className="text-primary" />,
  },
  {
    title: 'Lightning Fast Performance',
    description:
      'Optimized for speed with instant wallet detection and rapid transaction execution.',
    icon: <Rocket size={32} className="text-primary" />,
  },
  {
    title: 'Seamless UX',
    description:
      'A user interface that’s clean, intuitive, and made for both beginners and experts.',
    icon: <Sparkles size={32} className="text-primary" />,
  },
  {
    title: 'Multi-Wallet Support',
    description:
      'Supports MetaMask, WalletConnect, Coinbase Wallet, and more.',
    icon: <Wallet size={32} className="text-primary" />,
  },
];

const Features = () => {
  return (
    <section className="relative w-full h-full px-6 text-white overflow-hidden py-7">
      {/* Radial gradient left */}
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-[#15bffd] opacity-30 blur-3xl rounded-full -z-10 transform -translate-y-1/2" />

      {/* Radial gradient right */}
      <div className="absolute top-1/2 right-[-10%] w-[400px] h-[400px] bg-[#15bffd] opacity-30 blur-3xl rounded-full -z-10 transform -translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Powerful <span className="text-primary">Features</span>
        </h2>

        {/* Desktop bento-style layout with Flexbox */}
        <div className="hidden md:flex flex-wrap gap-6">
          <div className="flex flex-col gap-6 w-[48%]">
            <div className="flex-1 p-6 rounded-2xl  shadow-lg border border-gray-800 hover:border-primary hover:shadow-xl transition-all">
              <div className="mb-4">{features[0].icon}</div>
              <h3 className="text-xl font-semibold mb-2">{features[0].title}</h3>
              <p className="text-sm text-gray-300">{features[0].description}</p>
            </div>
            <div className="flex-1 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-primary hover:shadow-xl transition-all">
              <div className="mb-4">{features[1].icon}</div>
              <h3 className="text-xl font-semibold mb-2">{features[1].title}</h3>
              <p className="text-sm text-gray-300">{features[1].description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[48%]">
            <div className="flex-1 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-primary hover:shadow-xl transition-all">
              <div className="mb-4">{features[2].icon}</div>
              <h3 className="text-xl font-semibold mb-2">{features[2].title}</h3>
              <p className="text-sm text-gray-300">{features[2].description}</p>
            </div>
            <div className="flex-1 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-primary hover:shadow-xl transition-all">
              <div className="mb-4">{features[3].icon}</div>
              <h3 className="text-xl font-semibold mb-2">{features[3].title}</h3>
              <p className="text-sm text-gray-300">{features[3].description}</p>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#1e293b] shadow-lg border border-gray-800 hover:border-primary hover:shadow-xl transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
