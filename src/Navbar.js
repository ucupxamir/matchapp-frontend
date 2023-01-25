const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark text-white" style={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,82,255,1) 100%)" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">MATCHAPP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>

    )
}

export default Navbar;