import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ConfirmationModal from 'modals/ConfirmationModal';
import Header from 'components/Common/Header/Header';
import { createBrowserHistory } from 'history';
import configureStore from 'utils/store';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import routes from 'utils/routes';
import Alert from 'modals/Alert';
import './styles/main.scss';
import React from 'react';

const history = createBrowserHistory();
const initialState = {};
const store = configureStore(history, initialState);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
                <Header />
                <Routes >
                    <Route exact path={routes.index} element={<Navigate to={routes.home} />} />
                </Routes >
                <Alert />
                <ConfirmationModal />
        </BrowserRouter>
    </Provider>,
);
