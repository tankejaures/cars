import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <nav className="navbar pb-0 navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">React</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Docs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tutorial">Tutoriel</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/community">Communauté</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu