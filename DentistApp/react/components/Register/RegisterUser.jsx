import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popUpAlert } from '../../actions/alert';
import { saveUserDetails, setUserDetails } from '../../actions/user';
import { filterDigitsOnly, parsedate, maxLength } from '../Common/Functions';

export default function Register() {
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.user.userDetails);
    const [isEnabled, setIsEnabled] = useState(false);

    const changeHandler = (e) => {
        let fieldName = e.target.name;
        let value = e.target.value;
        if (fieldName == 'birthday') {
            value = parsedate(value);
        }

        dispatch(setUserDetails({
            ...userDetails,
            [fieldName]: value
        }));
    };

    useEffect(() => {
        setIsEnabled(userDetails.firstName != '' && userDetails.lastName != '' && userDetails.birthday != '' && userDetails.email != '' && userDetails.phoneNumber != '' && userDetails.password != '' && userDetails.confirmPassword != '');
    }, [userDetails])

    const saveUser = () => {
        if (isEnabled) {
            if (userDetails.password != userDetails.confirmPassword) {
                dispatch(popUpAlert("error", "Parolele nu coincid", 4000));
            } else if (userDetails.password.length < 6) {
                dispatch(popUpAlert("warning", "parola trebuie sa fie de cel putin 6 caractere", 3000));
            }
            else {
                dispatch(saveUserDetails(userDetails));
                dispatch(setUserDetails({
                    ...userDetails,
                    firstName: '',
                    lastName: '',
                    birthday: '',
                    email: '',
                    phoneNumber: '',
                    password: '',
                    confirmPassword: ''
                }));
            }
        }
    }

    return (<>
        <div className="home container-fluid mt-4" style={{ width: '85%' }} >
            <div className="component" style={{ height: '100%' }}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <b>FirstName</b>
                        <input type="text" className="form-control" maxLength={20} value={userDetails.firstName || ''} name="firstName" onChange={changeHandler} />
                    </div>
                    <div className="form-group col-md-6">
                        <b>LastName</b>
                        <b className='b-mandatory'> *</b>
                        <input type="text" className="form-control" maxLength={200} value={userDetails.lastName || ''} name="lastName" onChange={changeHandler} />
                    </div>

                    <div className="form-group col-md-6">
                        <b>Birthday</b>
                        <b className='b-mandatory'> *</b>
                        <input type="date" className="form-control" maxLength={200} value={userDetails.birthday || ''} name="birthday" onChange={changeHandler} />
                    </div>

                    <div className="form-group col-md-6">
                        <b>Email</b>
                        <b className='b-mandatory'> *</b>
                        <input type="email" className="form-control" maxLength={200} value={userDetails.email || ''} name="email" onChange={changeHandler} />
                    </div>

                    <div className="form-group col-md-6">
                        <b>Phone Number</b>
                        <b className='b-mandatory'> *</b>
                        <input type="text" className="form-control" value={userDetails.phoneNumber || ''} name="phoneNumber" onChange={changeHandler} onKeyPress={(e) => { maxLength(e, userDetails.phoneNumber, 13), filterDigitsOnly(e) }} />
                    </div>

                    <div className="form-group col-md-6">
                        <b>Password</b>
                        <b className='b-mandatory'> *</b>
                        <input type="password" className="form-control" maxLength={200} value={userDetails.password || ''} name="password" onChange={changeHandler} />
                    </div>

                    <div className="form-group col-md-6">
                        <b>Confirm Password</b>
                        <b className='b-mandatory'> *</b>
                        <input type="password" className="form-control" maxLength={200} value={userDetails.confirmPassword || ''} name="confirmPassword" onChange={changeHandler} />
                    </div>

                    <div className="form-group col-md-6">
                        <p style={{ fontSize: '12px' }}>
                            <b className='b-mandatory'> *</b>
                            Camp obligatoriu
                        </p>
                        <button className="btn btn-outline-primary" onClick={saveUser} disabled={!isEnabled}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}