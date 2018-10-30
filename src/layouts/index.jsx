import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/layout-override.css';

const Layout = ({ children, data, location }) => (
  <div>
    <div id="wrapper">
      <Header />
      <div style={{
        margin: '0 auto',
        maxWidth: 1200,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}>
        {children}
      </div>
      <Footer />

    </div>
  </div>

);

export default Layout;