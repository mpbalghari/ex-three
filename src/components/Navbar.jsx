import React from 'react'

function Navbar() {
    return (
        <div className='bg-light'>
            <nav className="container navbar navbar-expand-lg navbar-light p-2">
                <a className="navbar-brand" href="#">React <span className='text-primary'>exThree</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                        <a className="nav-item nav-link disabled" href="#">Disabled</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar