import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalContextProvider } from './components/GlobalContext';

ReactDOM.render(
	<GlobalContextProvider>
		<Router>
			<App />
		</Router>
	</GlobalContextProvider>,
	document.getElementById('root')
);