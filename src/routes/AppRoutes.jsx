import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layouts/Layout';
import { Proyectos } from '../components/Proyectos';
import { Contacto } from '../components/Contacto';
import { Home } from '../components/Home';

export const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Layout />}>
                <Route path='/' element={<Home />} />



                <Route path='/proyectos' element={<Proyectos />} />
                <Route path='/contacto' element={<Contacto />} />


            </Route>

        </Routes>
    );
};
