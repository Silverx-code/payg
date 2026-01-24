import { useState, useEffect } from 'react';
import WelcomePage from './components/welcome/WelcomePage';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import DashboardPage from './components/dashboard/DashboardPage';

const App = () => {
  const [page, setPage] = useState('welcome');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      setUser({ token, username });
      setPage('dashboard');
    }
  }, []);

  const handleLogin = (data) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.username);
    setUser(data);
    setPage('dashboard');
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setPage('welcome');
  };

  if (page === 'login') return <LoginPage onNavigate={setPage} onLogin={handleLogin} />;
  if (page === 'signup') return <SignupPage onNavigate={setPage} onLogin={handleLogin} />;
  if (page === 'dashboard') return <DashboardPage user={user} onLogout={handleLogout} />;

  return <WelcomePage onNavigate={setPage} />;
};

export default App;
