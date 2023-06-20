import "./navbar.scss";

function NavBar() {
  return (
    <>
      <div className="navAbove">
        <p>FREE SHIPPING ON ALL U.S ORDERS OVER $50</p>
        <div className="dropdownMenu">
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              USD
            </button>
            <ul
              class="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              style={{ zIndex: "10001" }}
            >
              <li>
                <a class="dropdown-item" href="#">
                  CAD
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  AUD
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  EUR
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  GBP
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              English
            </button>
            <ul
              class="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              style={{ zIndex: "10001" }}
            >
              <li>
                <a class="dropdown-item" href="#">
                  French
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Italian
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  German
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Spanish
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              My Account
            </button>
            <ul
              class="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              style={{ zIndex: "10001" }}
            >
              <li>
                <a class="dropdown-item" href="#" style={{ display: "flex" }}>
                  <span class="material-symbols-outlined">login</span>
                  <span style={{ marginLeft: "10px" }}>Sign in</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" style={{ display: "flex" }}>
                  <span class="material-symbols-outlined">person_add</span>
                  <span style={{ marginLeft: "10px" }}>Register</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navBottom">
        <div className="logo">
          <p>
            FASHION<span>CUBE</span>
          </p>
        </div>
        <div className="navCenter">
          <span>HOME</span>
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              SHOP
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a class="dropdown-item" href="#">
                  MEN
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  WOMEN
                </a>
              </li>
            </ul>
          </div>
          <span>CONTACT</span>
        </div>
        <div className="navRight">
          <span className="material-symbols-outlined">search</span>
          <span className="material-symbols-outlined">person</span>
          <span className="material-symbols-outlined bag">shopping_bag</span>
        </div>
      </div>
    </>
  );
}

export default NavBar;
