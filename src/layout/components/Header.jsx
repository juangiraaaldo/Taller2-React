import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary" >
                <div className="container-fluid">

                    <NavLink className="navbar-brand" to="/" end>Carrito de compras</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active': 'nav-link'} aria-current="page" to="/" end>
                                    Inicio
                                </NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className={({ isActive}) => isActive ? 'nav-link active': 'nav-link'} aria-current="page" to="/articles">
                                    Articles
                                </NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active': 'nav-link'} aria-current="page" to="/props">Props</NavLink>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                            <button className="btn btn-outline-light" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
