import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <section className="section">
        <h2>Products</h2>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout;
