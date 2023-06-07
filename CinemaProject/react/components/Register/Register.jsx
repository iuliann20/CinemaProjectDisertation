import React  from "react"
import RegisterUser from './RegisterUser';
export default function Register() {
    return (
        <>
            
            <div className="d-flex flex-row px-4">
                <div className="container-fluid mt-4" >
                    <div className="component">
                        <RegisterUser />
                    </div>
                </div>
            </div>
        </>
    )
}