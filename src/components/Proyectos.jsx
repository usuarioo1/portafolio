import React from 'react';
import '../css/proyectos.css';
import { Container, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Proyectos = () => {

    const Img = styled('img')({

        width: 350,
        height: 150,
        objectFit: 'cover',
        objectPosition: 'center'

    })
    return (
        <Container sx={{ marginTop: '40px' }}>
            <div className='card-total'>
                <div className="card">
                    {/* <div>
                    <Img src='../assets/images/gl.png' />
                </div> */}
                    <div className="content">
                        <a href="#">
                            <Typography mb={2} variant='h5' className="title">
                                GameLink
                            </Typography>
                        </a>

                        <Typography className="desc">
                            Ecommerce creado con React y Node Js, con sistema de pagos integrado y con la posibilidad de crear usuarios, ademas con sistema de soporte en linea y catalogo de juegos traidos desde un base de datos.
                        </Typography>
                        <Link to={'https://game-link.netlify.app/'}>
                            <Typography mt={2} className="action" href="#">
                                Llévame al sitio
                                <span aria-hidden="true">
                                    →
                                </span>
                            </Typography>
                        </Link>
                    </div>
                </div>

                <div className="card">
                    {/* <div className="image"></div> */}
                    <div className="content">
                        <a href="#">
                            <Typography variant='h5'
                                className="title">
                                Asia Bite
                            </Typography>
                        </a>

                        <Typography className="desc">
                            Sitio Web dedicado a la gastronomía coreana hecho con React Js y FireBase
                        </Typography>
                        <Link to={'https://flourishing-bublanina-f7bbc6.netlify.app/'}>
                        <Typography mt={2} className="action" href="#">
                            Llévame al sitio
                            <span aria-hidden="true">
                                →
                            </span>
                        </Typography>
                        </Link>
                    </div>
                </div>

                <div className="card">
                    {/* <div className="image"></div> */}
                    <div className="content">

                        <Typography variant='h5'>
                            The Weather Chile
                        </Typography>


                        <Typography className="desc">
                            App web destinada a consultar la temperatura, humedad y estado general de distinas ciudades de Chile
                        </Typography>
                        <Link to={'https://asalazar1123.github.io/dashboard/'}>
                        <Typography mt={2} className="action" href="#">
                            Llévame al sitio
                            <span aria-hidden="true">
                                →
                            </span>
                        </Typography>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    {/* <div className="image"></div> */}
                    <div className="content">

                        <Typography variant='h5'>
                            Waiter App
                        </Typography>


                        <Typography className="desc">
                            App web destinada a meseros de restaurant para anotar pedidos, esta bajo el concepto de CRUD, por lo tanto esta app nos permite, crear, leer, actualizar y borrar pedidos.
                        </Typography>

                        <Link to={'https://usuarioo1.github.io/CRUD/'}>
                        <Typography mt={2} className="action" href="#">
                            Llévame al sitio
                            <span aria-hidden="true">
                                →
                            </span>
                        </Typography>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    {/* <div className="image"></div> */}
                    <div className="content">

                        <Typography variant='h5'>
                            Waiter App
                        </Typography>


                        <Typography className="desc">
                            App web destinada a meseros de restaurant para anotar pedidos, esta bajo el concepto de CRUD, por lo tanto esta app nos permite, crear, leer, actualizar y borrar pedidos.
                        </Typography>

                        <Link to={'https://usuarioo1.github.io/CRUD/'}>
                        <Typography mt={2} className="action" href="#">
                            Llévame al sitio
                            <span aria-hidden="true">
                                →
                            </span>
                        </Typography>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};
