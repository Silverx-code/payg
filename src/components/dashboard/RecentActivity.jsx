const defaultActivities = [
  {
    type: 'payment',
    title: 'Payment Successful',
    description: 'Premium payment for January 2026',
    amount: '$150',
    status: 'completed'
  },
  {
    type: 'policy',
    title: 'Policy Updated',
    description: 'Coverage extended',
    status: 'active'
  }
];

const icons = {
  payment: '✅',
  policy: '📄',
  reminder: '🔔',
  claim: '🏥'
};

const statusColor = {
  completed: 'text-emerald-600',
  active: 'text-blue-600',
  pending: 'text-amber-600',
  failed: 'text-red-600'
};

const RecentActivity = ({ activities = defaultActivities }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-6">Recent Activity</h3>
    <div className="space-y-4">
      {activities.map((a, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-md border">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div className="text-3xl">{icons[a.type]}</div>
              <div>
                <div className="font-bold">{a.title}</div>
                <div className="text-gray-600">{a.description}</div>
              </div>
            </div>
            <div className={`font-bold ${statusColor[a.status]}`}>
              {a.amount || a.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RecentActivity;
