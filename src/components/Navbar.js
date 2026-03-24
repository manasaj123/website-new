import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Navbar.css";
import Logo from "./Logo";

const NAVIGATION_LINKS = [
  { to: "/", label: "Home" },
  { to: "/what-we-do", label: "What we do" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [opacity, setOpacity] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const newOpacity = Math.max(1 - scrollTop / 300, 0.6);
    setOpacity(newOpacity);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const menuIcons = useMemo(() => ({
    close: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path stroke="currentColor" strokeWidth="2" d="M6 6l12 12M6 18L18 6" />
      </svg>
    ),
    hamburger: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  }), []);

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* ✅ HEADER */}
      <header className="navbar-container" style={{ opacity }}>
        <div className="navbar-flex-container">

          {/* ✅ LOGO */}
          <div className="navbar-logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* ✅ NAV LINKS */}
          <ul className="navbar-desktop-list">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="navbar-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ✅ MOBILE BUTTON */}
          <button className="navbar-mobile-button" onClick={toggleMenu}>
            {isMenuOpen ? menuIcons.close : menuIcons.hamburger}
          </button>

          {/* ✅ MOBILE MENU */}
          {isMenuOpen && (
            <div className="navbar-mobile-overlay">
              <ul className="navbar-mobile-list">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="navbar-mobile-link"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </header>
    </>
  );
};

export default Navbar;
