import React from 'react';
import '../css/contacto.css'

export const Contacto = () => {
    return (
        <div className="login-box">
            <form>
                <div className="user-box">
                    <input type="mail" name="" required />
                    <label>Correo</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" required />
                    <label>Dejame tu mensaje</label>
                </div>
                <center>
                    <a href="#">
                        Enviar
                        <span></span>
                    </a>
                </center>
            </form>
        </div>
    );
};
