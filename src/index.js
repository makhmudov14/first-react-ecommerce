import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

// domain: dev-eypbo63ismzonyld.us.auth0.com
// clientID: dqyJYjLthf2065xPt8n9kalvy6snGIvx
// http://localhost:3000

root.render(
    <Auth0Provider
    domain="dev-eypbo63ismzonyld.us.auth0.com"
    clientId="SbCqwINdJZgry4qcNxgyhoLg1lr0ds8j"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000'
    }}
  >
    <UserProvider>

    
    <ProductsProvider>
        <FilterProvider>
        <CartProvider>
           <App />
        </CartProvider>
        </FilterProvider>
    </ProductsProvider>
    </UserProvider>
    </Auth0Provider>
    


);
