import React from "react";

export default function UserHeader() {
    return (
        <header className="user-header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="/img/logo_free-file.png" alt="Logo" />
                    <h3>Plan-F</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">All Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">My Course</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src="/img/user-profile.png" alt="Logo" /></a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    );
}
