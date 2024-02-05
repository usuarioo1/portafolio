import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import '../css/navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <Link to={'/home'}>
                <Typography className="nav-item">Inicio</Typography>
                </Link>
                <Link to={'/proyectos'}>
                <Typography className="nav-item">Mis Proyectos</Typography>
                </Link>
                <Link to={'/contacto'}>
                <Typography className="nav-item">Contacto</Typography>
                </Link>
            </ul>
        </nav>
    )
}
