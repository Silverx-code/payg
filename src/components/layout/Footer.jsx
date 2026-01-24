const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-3 mb-6">
        <img src="1.jpg" alt="PAYG" className="h-10 w-10" />
        <span className="text-2xl font-bold text-white">PAYG</span>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        <FooterColumn title="Product" items={['Features', 'Pricing']} />
        <FooterColumn title="Company" items={['About', 'Contact']} />
        <FooterColumn title="Legal" items={['Privacy', 'Terms']} />
        <FooterColumn title="Connect" items={['Twitter', 'LinkedIn']} />
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
        © 2026 PAYG. All rights reserved.
      </div>
    </div>
  </footer>
);

const FooterColumn = ({ title, items }) => (
  <div>
    <h4 className="font-semibold text-white mb-4">{title}</h4>
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="hover:text-white cursor-pointer">
          {item}
        </div>
      ))}
    </div>
  </div>
);

export default Footer;
