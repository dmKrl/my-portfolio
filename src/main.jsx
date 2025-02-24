import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import './app/styles/index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter basename="/my-portfolio/">
            <App />
        </BrowserRouter>
    </Provider>
);
