import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      {/* Renders nested routes */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
