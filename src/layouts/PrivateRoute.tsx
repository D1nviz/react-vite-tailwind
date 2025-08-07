import type { JSX } from 'react';

type ProtectedRouteProps = {
  element: JSX.Element;
  unauthorizedRedirectPath?: string;
};

export default function PrivateRoute({
  element,
}: //   unauthorizedRedirectPath = "/sign-in",
ProtectedRouteProps) {
  // Write here custom logic for private route
  return element;
}
