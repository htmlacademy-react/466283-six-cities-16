import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
  isReverse?: boolean | undefined;
};

function PrivateRoute({ children, isReverse }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const authStatus = isReverse
    ? AuthorizationStatus.NoAuth
    : AuthorizationStatus.Auth;
  return authorizationStatus === authStatus ? (
    children
  ) : (
    <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login} replace />
  );
}

export default PrivateRoute;
