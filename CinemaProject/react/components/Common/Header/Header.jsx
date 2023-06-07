import { NavLink as Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react';
import routes from 'utils/routes';
import Register from '../../../modals/RegisterModal/Register';


export default function Header() {

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
                        </div>
                    </nav>


                    <div className="d-flex flex-grow-1 align-items-center justify-content-end">
                        <div className="user-info" >
                            <p className="mb-0">
                                <button className='btn btn-success mr-2' >Login</button>
                            </p>
                        </div>
                        <h5 className='mr-1' >Hello </h5>
                        <Dropdown >
                            <Dropdown.Toggle variant="success">

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >Edit</Dropdown.Item>
                                <Dropdown.Item >Programarile mele</Dropdown.Item>
                                <Dropdown.Item >Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <button className="navbar-toggler collapsed ml-3" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </nav>
        <Register/>
        </div>
    )
}
