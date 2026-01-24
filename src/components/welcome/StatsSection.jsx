const stats = [
  { number: '10K+', label: 'Active Users' },
  { number: '50+', label: 'Insurance Partners' },
  { number: '99.9%', label: 'Uptime' }
];

const StatsSection = () => (
  <section className="py-20 bg-emerald-600">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center text-white">
      {stats.map((s, i) => (
        <div key={i}>
          <div className="text-5xl font-bold">{s.number}</div>
          <div className="text-emerald-100 mt-2">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
