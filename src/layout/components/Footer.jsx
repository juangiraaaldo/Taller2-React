import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <footer className='py-3 my-4'>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/articles" className="nav-link px-2 text-body-secondary">Articles</Link>
          </li>
          <li className="nav-item">
            <Link to="/props" className="nav-link px-2 text-body-secondary">Props</Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          © 2026 Juan José Giraldo All Right Reserved :|
        </p>
      </footer>
    </>
  )
}