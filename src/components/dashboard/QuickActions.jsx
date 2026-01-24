const actions = [
  { icon: '💰', label: 'Make Payment' },
  { icon: '📋', label: 'View Coverage' },
  { icon: '📥', label: 'Download Statement' },
  { icon: '💬', label: 'Contact Support' }
];

const QuickActions = () => (
  <div>
    <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
    <div className="grid md:grid-cols-4 gap-6">
      {actions.map((a, i) => (
        <button
          key={i}
          className="bg-white rounded-2xl shadow-md p-8 border hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <div className="text-5xl mb-4">{a.icon}</div>
          <div className="font-bold">{a.label}</div>
        </button>
      ))}
    </div>
  </div>
);

export default QuickActions;
