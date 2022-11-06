import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import App from './ErrorApp';
import { AuthProvider } from './context/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    <HelmetProvider>
		<AuthProvider>
			<App />
		</AuthProvider>
    </HelmetProvider>
	</React.StrictMode>
);
