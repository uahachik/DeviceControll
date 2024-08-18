import { Outlet, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import usePrefetchedData from './hooks/usePrefetchedData';
import mockedUserReply from './assets/fake-reply/user';
import Login from './pages/user/login/Login';
import Home from './pages/home/Home';
import Device from './pages/device/Device';
import Profile from './pages/profile/Profile';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import useQueriedData from './hooks/useQueriedData';
import { useEffect, useState } from 'react';
import { ReplyError } from './pages/user/types';
import useEntityMutation from './hooks/useEntityMutation';

function handleResponse(response: Response) {
  const contentType = response.headers.get('content-type');
  if (contentType!.includes('application/json')) {
    return response.json();
  } else if (contentType!.includes('text/html')) {
    console.error('Type of content-type is: "text/html"');
    return response.text();
  } else if (contentType!.includes('image/')) {
    console.error('Type of content-type is: "blob"');
    return response.blob();
  } else {
    console.error('Type of content-type is:', contentType);
  }
}
function isShapedServerError(obj: any): obj is ReplyError {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.message === 'string' &&
    typeof obj.cause === 'string'
  );
}

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
  const { id } = usePrefetchedData('user', mockedUserReply).data.user;
  const auth = !!id;
  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
