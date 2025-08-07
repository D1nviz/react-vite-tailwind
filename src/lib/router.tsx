import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App';

import { lazy, Suspense } from 'react';
const Home = lazy(() => import('@/pages/home/page'));
const About = lazy(() => import('@/pages/about/page'));
const NotFound = lazy(() => import('@/pages/not-found/page'));
const DashboardOverview = lazy(() => import('@/pages/dashboard/overview/page'));

import PrivateRoute from '@/layouts/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      // Protected routes example
      {
        path: 'dashboard',
        element: <PrivateRoute element={<DashboardOverview />} />,
        children: [
          {
            index: true,
            element: <Navigate to="overview" replace />,
          },
          {
            path: 'overview',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <DashboardOverview />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
