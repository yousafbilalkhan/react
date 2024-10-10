import React, { useRef } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const LoadingBarWrapper = () => {
  const ref = useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    ref.current.continuousStart();
    const timer = setTimeout(() => {
      ref.current.complete();
    }, 800); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      <LoadingBar color="#FF0000" ref={ref} />
      <Outlet />
    </div>
  );
};

export default LoadingBarWrapper;
