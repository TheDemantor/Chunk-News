// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    // static propTypes = { second: third }

    render() {
        return ( 
            <>
                {/* <div>Navbar</div> */}
                <nav className="navbar navbar-expand-lg bg-white shadow p-3 mb-5 bg-white rounded">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src="/logo.png" alt="" width="50" height="50"/>
                        </Link>
                        <Link className="navbar-brand" to="/">Chunk_News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
