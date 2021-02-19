import React from 'react';

import './styles/Style.scss';

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <div className="errCode">404</div>
      <div className="description">Page Not Found</div>
    </div>
  );
};

export default ErrorPage;
