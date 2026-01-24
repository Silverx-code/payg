import { Users, CreditCard, Shield } from 'lucide-react';

const StatsCards = ({ stats = {
  activeMembers: '120',
  transactionsToday: '54',
  insurancePartners: '18'
}}) => (
  <div className="grid md:grid-cols-3 gap-6 mb-12">
    <StatCard
      icon={Users}
      value={stats.activeMembers}
      label="Active Members"
      color="emerald"
    />
    <StatCard
      icon={CreditCard}
      value={stats.transactionsToday}
      label="Transactions Today"
      color="blue"
    />
    <StatCard
      icon={Shield}
      value={stats.insurancePartners}
      label="Insurance Partners"
      color="emerald"
    />
  </div>
);

const StatCard = ({ icon: Icon, value, label, color }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg">
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 bg-${color}-100 rounded-xl flex items-center justify-center`}>
        <Icon className={`w-6 h-6 text-${color}-600`} />
      </div>
      <div>
        <div className={`text-3xl font-bold text-${color}-600`}>{value}</div>
        <div className="text-gray-600">{label}</div>
      </div>
    </div>
  </div>
);

export default StatsCards;
