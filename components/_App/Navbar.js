import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "../../utils/ActiveLink";
import { useRouter } from "next/router";

const Navbar = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.collapsedState);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  const toggleNavbar = () => {
    dispatch({ type: "COLLAPSED_STATE" });
  };

  const closeNavbar = () => {
    if (!collapsed) dispatch({ type: "COLLAPSED_STATE" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      if (window.scrollY > 170) setIsSticky(true);
      else setIsSticky(false);
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleRoute = () => closeNavbar();
    router.events.on("routeChangeComplete", handleRoute);
    return () => router.events.off("routeChangeComplete", handleRoute);
  }, [collapsed, router]);

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <React.Fragment>
      <header
        className={`header-area fixed-top ${isSticky ? "is-sticky" : ""}`}
      >
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <nav
              className={`navbar navbar-expand-lg ${
                isSticky ? "is-sticky" : ""
              }`}
            >
              <div className="container">
                {/* LOGO */}
                <Link href="/" passHref legacyBehavior>
                  <a
                    onClick={closeNavbar}
                    className={`navbar-brand logo-border ${
                      isSticky ? "no-border" : ""
                    }`}
                  >
                    <img
                      src="/img/logo-azul.webp"
                      alt="iciamex"
                      width={180}
                      height={180}
                      loading="lazy"
                    />
                  </a>
                </Link>

                {/* BOTÓN HAMBURGUESA */}
                <button
                  onClick={toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                {/* MENU + BOTONES DERECHA */}
                <div
                  className={`${classOne} ml-auto`}
                  id="navbarSupportedContent"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {/* MENÚ PRINCIPAL */}
                  <ul
                    className="navbar-nav"
                    style={{
                      gap: "1.75rem",
                      alignItems: "center",
                    }}
                  >
                    {/* Empresa (dropdown: Misión/Visión + Políticas + FAQ) */}
                    <li className="nav-item">
                      <Link
                        href="/vision-mision"
                        activeClassName="active"
                        passHref
                        legacyBehavior
                      >
                        <a onClick={closeNavbar} className="nav-link">
                          Empresa <i className="bx bx-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/vision-mision"
                            activeClassName="active"
                            legacyBehavior
                          >
                            <a onClick={closeNavbar} className="nav-link">
                              Misión y Visión
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/politicas-calidad"
                            activeClassName="active"
                            legacyBehavior
                          >
                            <a onClick={closeNavbar} className="nav-link">
                              Políticas de calidad
                            </a>
                          </Link>
                        </li>
                        {/* NUEVO: Preguntas frecuentes */}
                        <li className="nav-item">
                          <Link
                            href="/preguntas-frecuentes"
                            activeClassName="active"
                            legacyBehavior
                          >
                            <a onClick={closeNavbar} className="nav-link">
                              Preguntas frecuentes
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Catálogo de productos (dropdown) */}
                    <li className="nav-item">
                      <Link
                        href="/categoriaBandas"
                        activeClassName="active"
                        passHref
                        legacyBehavior
                      >
                        <a onClick={closeNavbar} className="nav-link">
                          Catálogo de productos{" "}
                          <i className="bx bx-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/lisas"
                            activeClassName="active"
                            legacyBehavior
                          >
                            <a onClick={closeNavbar} className="nav-link">
                              Lisas
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/modulares"
                            activeClassName="active"
                            legacyBehavior
                          >
                            <a onClick={closeNavbar} className="nav-link">
                              Modulares
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/termosoldables"
                            activeClassName="active"
                            legacyBehavior
                          >
                            <a onClick={closeNavbar} className="nav-link">
                              Termosoldables
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Envasado */}
                    <li className="nav-item">
                      <Link
                        href="/codificadores"
                        activeClassName="active"
                        passHref
                        legacyBehavior
                      >
                        <a onClick={closeNavbar} className="nav-link">
                          Envasado
                        </a>
                      </Link>
                    </li>

                    {/* Mobiliario */}
                    <li className="nav-item">
                      <Link
                        href="/mobiliario"
                        activeClassName="active"
                        passHref
                        legacyBehavior
                      >
                        <a onClick={closeNavbar} className="nav-link">
                          Mobiliario
                        </a>
                      </Link>
                    </li>

                    {/* Maquinados */}
                    <li className="nav-item">
                      <Link
                        href="/maquinado"
                        activeClassName="active"
                        passHref
                        legacyBehavior
                      >
                        <a onClick={closeNavbar} className="nav-link">
                          Maquinados
                        </a>
                      </Link>
                    </li>
                  </ul>

                  {/* LOGIN + CONTACTO */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: "auto",
                      gap: "10px",
                    }}
                    className="ml-auto"
                  >
                    {/* Botón Login */}
                    <div
                      className={`get-quote login-button ${
                        collapsed ? "hide" : "show"
                      }`}
                    >
                      <Link href="/login" passHref legacyBehavior>
                        <a
                          onClick={closeNavbar}
                          className={`default-btn btn-login ${
                            isSticky ? "borde-blanco" : ""
                          }`}
                        >
                          Login
                        </a>
                      </Link>
                    </div>

                    {/* Botón Contacto */}
                    <div
                      className={`get-quote contact-button ${
                        collapsed ? "hide" : "show"
                      }`}
                    >
                      <Link href="/contacto" passHref legacyBehavior>
                        <a
                          onClick={closeNavbar}
                          className={`default-btn ${
                            isSticky ? "borde-blanco" : ""
                          }`}
                        >
                          Contacto
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* ← No hay segundo div con el mismo id */}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
