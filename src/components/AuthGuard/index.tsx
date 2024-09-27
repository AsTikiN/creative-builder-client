import { Navigate, Outlet } from 'react-router-dom';
import { routes } from '@config/routes';
import { selectIsAuthenticated } from '@store/features/auth';
import { useAppSelector } from '@store/index';

export const AuthGuard = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  if (!isAuthenticated) return <Navigate to={routes.login()} />;
  return <Outlet />;
};
