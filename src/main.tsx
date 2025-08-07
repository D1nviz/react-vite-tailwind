import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './lib/router';
import { QueryProvider } from './providers/query-provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryProvider>
  </StrictMode>
);
