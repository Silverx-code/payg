import { Shield, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Payments',
    desc: 'All transactions are protected with bank-level security'
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    desc: 'Immediate confirmation for insurance payments'
  },
  {
    icon: Users,
    title: 'Multiple Providers',
    desc: 'Choose from trusted insurance partners'
  }
];

const FeaturesSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Why Choose PAYG?</h2>
        <p className="text-xl text-gray-600">
          Everything you need for seamless insurance management
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <f.icon className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
