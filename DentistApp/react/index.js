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
import Register from './components/Register/RegisterUser';
import Login from './modals/Login/Login';
import EditUser from './modals/EditUser/EditUser';
import Appointment from './components/Appointment';
import MyAppointments from './components/MyAppointments';
import AddOperationsModal from './modals/AppointmentDoctorModal';
import DoctorsTeam from './components/DoctorsTeam';
import OperationTable from './components/Operations/OperationsTable';
import ViewAppointmentModal from './modals/ViewAppointmentModal';
import Home from './components/Home/Home';

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
                <Login/>
                <EditUser/>
                <AddOperationsModal/>
                <ViewAppointmentModal/>
        </BrowserRouter>
    </Provider>,
);
