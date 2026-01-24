import Navbar from '../layout/Navbar';
import StatsCards from './StatsCards';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';

const DashboardPage = ({ user, onLogout }) => (
  <div className="min-h-screen bg-gray-50">
    <Navbar user={user} onLogout={onLogout} />

    <main className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-4xl font-bold mb-8">
        Welcome back, <span className="text-emerald-600">{user.username}</span> 👋
      </h2>

      <StatsCards />
      <RecentActivity />
      <QuickActions />
    </main>
  </div>
);

export default DashboardPage;
