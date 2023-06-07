import React from 'react';

export const filterDigitsOnly = (e) => {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
}

export const maxLength = (e, phoneNumber, length) => {
    if (phoneNumber.length >= length) {
        e.preventDefault();
    }
}

export const parsedate = (dateString) => {
    const date = new Date(dateString);
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
}

export const renderDoctors = (e) => {
    return e.map((a, index) => {
        return (
            <option key={index} value={a.userId}>
                {a.doctorName}
            </option>)
    });
}

export const renderAppointmentSchedule = (e) => {
    if (e) {
        return e.map((a, index) => {
            return (
                <option key={index} value={a.id}>
                    {a.appointmentTime}
                </option>)
        });
    }
}

export const renderColumnOperation = (e) => {
    if (e) {
        return e.map((a, index) => {
            return (
                <option key={index} value={a.id}> {a.operationName}</option>
            )
        })
    }
}

