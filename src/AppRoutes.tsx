import { useRef } from 'react';
import { Outlet, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import usePrefetchedData from './api/usePrefetchedData';
import mockedUserReply from './assets/fake-reply/user';
import Login from './pages/user/login/Login';
import Home from './pages/home/Home';
import Device from './pages/device/Device';
import Profile from './pages/profile/Profile';
import About from './pages/about/About';

const PageNotFound = () => <h1 className="bg-emerald-50">Page Not Found</h1>;

const AppRoutes = () => {
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
      path: "/about",
      element: <About />,
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
    const error = usePrefetchedData('fetchError', {}).data || {};
    const { id } = usePrefetchedData('user', mockedUserReply).data.user;
    const auth = useRef(true);

    if (error.notAuthStatus) {
      auth.current = false;
    }

    return auth.current || !!id ? <Outlet /> : <Navigate to="/login" replace />;
  };

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};



export default AppRoutes;
