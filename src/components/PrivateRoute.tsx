import React from 'react';
import { Redirect, RouteProps } from 'react-router';
import { Route } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  component: React.FC<any>;
}

function PrivateRoute({ component: Component, ...theRest }: PrivateRouteProps) {
  return (
    <Route
      {...theRest}
      render={(props: any) => {
        const token = localStorage.getItem('token');
        if (token) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
}

export default PrivateRoute;
