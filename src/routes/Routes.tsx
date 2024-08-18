import { Outlet, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import useReplyData from '../hooks/useReplyData';
import mockedUserReply from '../assets/fake-reply/user';
import Login from '../pages/user/login/Login';
import Home from '../pages/home/Home';
import Device from '../pages/device/Device';
import Profile from '../pages/profile/Profile';

const PageNotFound = () => <h1 className="bg-emerald-50">Page Not Found</h1>;

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <GuardedRoutes />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/device",
        element: <Device />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />
  },
];

function GuardedRoutes() {
  const { id } = useReplyData('user', mockedUserReply).data.user;
  const auth = !!id;
  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
