import { useDispatch, useSelector } from 'react-redux';
import { hideAlert } from 'actions/alert';
import React, { useEffect } from 'react';

let timeout = {};

export default function Alert() {

    const alert = useSelector((state) => state.alert)
    const dispatch = useDispatch();

    useEffect(() => {
        if (alert.show) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                dispatch(hideAlert());
            }, alert.duration);
        }
    })

    const getIcon = role => {
        switch (role) {
            case 'success':
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M12 1c6.072 0 11 4.928 11 11s-4.928 11-11 11S1 18.072 1 12 5.928 1 12 1zm0 2c-4.967 0-9 4.033-9 9s4.033 9 9 9 9-4.033 9-9-4.033-9-9-9zm-1.59 10.625l5.06-5.134a1.163 1.163 0 0 1 1.7.055c.44.441.44 1.148 0 1.59l-6.76 6.814-3.58-3.605a1.123 1.123 0 0 1-.007-1.583l.042-.043a1.162 1.162 0 0 1 1.627-.029l1.919 1.935z" id="a"></path>
                    </svg>
                );
            case 'error':
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path id="a" d="M12 20.8a8.8 8.8 0 1 0 0-17.6 8.8 8.8 0 0 0 0 17.6zm0 2.2C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm-1.65-5.52c0 .464.16.858.481 1.183.321.325.71.487 1.169.487.458 0 .848-.162 1.169-.487a1.62 1.62 0 0 0 .481-1.183c0-.464-.16-.851-.481-1.163A1.616 1.616 0 0 0 12 15.85c-.458 0-.848.156-1.169.467-.32.312-.481.7-.481 1.163zm3.19-10.54a1.54 1.54 0 0 0-3.08 0v5.72a1.54 1.54 0 0 0 3.08 0V6.94z" />
                    </svg>
                );
            default:
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11h2v6h-2v-6zm1-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                )
        }
    }

    const icon = getIcon(alert.role);
    let className = `alert ${alert.role} small`;

    if (alert.show) {
        className = `${className} show`;
    } else {
        className = `${className} fade`;
    }


    return (
        <div id="alertMessage" className={className} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="alert-header no-title">
                {icon}
                <small></small>
            </div>
            <div className="alert-body">{alert.message}</div>
        </div>
    )
}
