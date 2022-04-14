export default function Header() {
  return (
    <header id="header-wrap">
      {/* Begin Header content 
				==========================
				* Use class "show-hide-on-scroll" to hide header on scroll down and show on scroll up.
				* Use class "fixed-top" to set header to fixed position.
				* Use class "transparent" for transparent header.
				* Use class "transparent-border" to enable bottom border on transparent header (class "transparent" is still required).
				* Use class "semi-transparent" for semi-transparent header.
				* Use class "header-fluid" for full width header.
				* Use class "header-dark" for dark header.
				* Use class "header-color" for header custom background color. By default theme main color is used, but you ca use custom background color classes (class "header-color" is still required!). Look into "helper.css" file for more info.
				* Use class "header-shadow" to enable header bottom shadow.
				* Use class "header-md", "header-lg" or "header-xlg" to change header size.
				*/}
      <div
        id="header"
        className="header-md header-dark show-hide-on-scroll transparent"
      >
        <div id="scrollspy" className="container header-container">
          {/* Begin logo  */}
          <div className="logo font-alter-1">
            <a href="/">
              <h1>AMV</h1>
            </a>
          </div>
          {/* End logo */}
          {/* Begin navbar 
						================== */}
          <nav className="navbar pull-right">
            {/* Begin toggle button (get grouped for better mobile display) */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#nav-main"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            {/* End toggle button*/}
            {/* Begin nav main
							====================
							* Use class "nav-separator" to enable nav links separators.
							* Use class "nav-uppercase" to enable nav uppercase letters.
							* Use class "mob-navbar-collapse-dark" to enable dark mobile menu.
							* Use class "mob-navbar-align-center" to enable dark mobile menu.
							* Note-1: class "mlc" in menu links = close mobile menu when clicking menu link (for one page template version only).
							* Note-2: class "sm-scroll" in menu links = enable smooth scrolling when clicking menu link (for one page template version only).
							*/}
            <div
              id="nav-main"
              className="collapse navbar-collapse nav-uppercase mob-navbar-collapse-dark"
            >
              {/* Begin navbar-nav 
								======================
								* Use class "nav-pills" to enable nav pills.
								* Use class "pills-rounded", "pills-rounded-2x", "pills-rounded-3x" or "pills-rounded-4x" for rounded pills (class "nav-pills" is required).
								* Use class "pills-gradient" to enable gradient pills (class "nav-pills" is required).
								* Use class "nav-border-bottom" to enable menu links with bottom border (class "nav-pills" is required).
								*/}
              <ul className="nav navbar-nav navbar-right nav-pills">
                <li className="active">
                  <a className="mlc sm-scroll" href="#!">
                    Home
                  </a>
                </li>
                <li>
                  <span className="nav-link-separator">/</span>
                </li>
                {/* Begin dropdown 
									====================
									* Use class "dropdown-hover" to make navigation toggle on desktop hover.
									* Use class "dropdown-uppercase" to enable dropdown menu uppercase letters.
									* Use class "dropdown-menu-dark" to enable dark dropdown menu.
									* Use class "dropdown-menu-color" to enable custom colored dropdown menu.
									* Use class "dropdown-menu-right" to right align the dropdown menu.
									*/}
                <li className="dropdown dropdown-uppercase dropdown-menu-color dropdown-hover">
                  <a
                    href="#0"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="mlc sm-scroll" href="#!">
                        About Us
                      </a>
                    </li>
                    {/* Begin dropdown (submenu)
											==============================
											* Use class "dropdown-hover" to make navigation toggle on desktop hover.
											* Use class "dropdown-uppercase" to enable dropdown menu uppercase letters.
											* Use class "dropdown-menu-dark" to enable dark dropdown menu.
											* Use class "dropdown-menu-color" to enable custom colored dropdown menu.
											* Use class "dropdown-submenu" for dropdown submenu.
											*/}
                    {/* End dropdown */}
                  </ul>{" "}
                  {/* /.dropdown-menu */}
                </li>
                {/* End dropdown */}
                <li>
                  <span className="nav-link-separator">/</span>
                </li>
              </ul>
              {/* End navbar-nav */}
            </div>
            {/* End nav main */}
          </nav>
          {/* End navbar */}
        </div>{" "}
        {/* /.container */}
      </div>
      {/* End header content */}
    </header>
  );
}
