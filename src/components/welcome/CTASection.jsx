const CTASection = ({ onNavigate }) => (
  <section className="py-20 bg-white text-center">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
      <p className="text-xl text-gray-600 mb-8">
        Join thousands of users who trust PAYG
      </p>
      <button
        onClick={() => onNavigate('signup')}
        className="px-10 py-4 bg-emerald-600 text-white rounded-full text-lg font-semibold hover:bg-emerald-700"
      >
        Create Free Account
      </button>
    </div>
  </section>
);

export default CTASection;
