import { useDispatch, useSelector } from 'react-redux';
import { NavLink as Link, RouterProvider, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react';
import routes from 'utils/routes';
import { toggleEditUserModal, toogleLoginModal } from '../../../actions/modal';
import { getUserAccessLevel, isSignedIn, logout } from '../../../actions/user';
import { getAppointmentStaticData } from '../../../actions/appointment';

export default function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showLoginModal = useSelector((state) => state.modal.showLoginModal);
    const isSignedInUser = useSelector((state) => state.user.isSignedInState);
    const [isSignedInHidden, setIsSignedInHidden] = useState(false);
    const toogleLoginModalButton = () => {
        dispatch(toogleLoginModal(!showLoginModal));
    }

    const logoutUser = () => {
        dispatch(logout()).then(() => {
            dispatch(isSignedIn());
            navigate("/home");
        });
    }

    const editUser = () => {
        dispatch(toggleEditUserModal());

    }

    useEffect(() => {
        dispatch(isSignedIn());
    }, []);

    useEffect(() => {
        if (isSignedInUser.isSignedIn) {
            dispatch(getAppointmentStaticData());
            setIsSignedInHidden(true);
            dispatch(getUserAccessLevel());
        }
        else {
            setIsSignedInHidden(false);
        }
    }, [isSignedInUser])
    return (
        <div>
            <nav className="header navbar navbar-expand-md navbar-light shadow pb-2 pt-2 t-0 l-0">
                <div className="d-flex w-100" style={{ alignItems: "center" }}>
                    <Link to={routes.index} className="navbar-brand"><b>Dentist App</b></Link>

                    <nav className="navbar navbar-expand-md navbar-light pb-2 pt-2 t-0 l-0">
                        <div className="navbar-collapse collapse  mb-md-0" id="navbarsExampleDefault">
                            <div className="navbar-nav mr-auto">
                                <Link
                                    to={routes.home}
                                    className={'nav-link'}>
                                    Home
                                </Link>
                            </div>
                            {isSignedInUser.isSignedIn &&
                                <div className="navbar-nav mr-auto">
                                    <Link
                                        to={routes.appointment}
                                        className={'nav-link'}>
                                        Programeaza Online
                                    </Link>
                                </div>
                            }
                            <div className="navbar-nav mr-auto">
                                <Link
                                    to={routes.servicesandrates}
                                    className={'nav-link'}>
                                    Servicii si Tarife
                                </Link>
                            </div>
                            <div className="navbar-nav mr-auto">
                                <Link
                                    to={routes.team}
                                    className={'nav-link'}>
                                    Echipa
                                </Link>
                            </div>
                            <div className="navbar-nav mr-auto">
                                <Link
                                    to={routes.user}
                                    className={'nav-link'}>
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </nav>


                    <div className="d-flex flex-grow-1 align-items-center justify-content-end">
                        <div className="user-info" hidden={isSignedInHidden}>
                            <p className="mb-0">
                                <button className='btn btn-success mr-2' onClick={toogleLoginModalButton}>Login</button>
                            </p>
                        </div>
                        <h5 className='mr-1' hidden={!isSignedInHidden}>Hello {isSignedInUser.name}</h5>
                        <Dropdown hidden={!isSignedInHidden}>
                            <Dropdown.Toggle variant="success">

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={editUser}>Edit</Dropdown.Item>
                                <Dropdown.Item href="/myappointment">Programarile mele</Dropdown.Item>
                                <Dropdown.Item onClick={logoutUser}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <button className="navbar-toggler collapsed ml-3" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </nav>



        </div>
    )
}
