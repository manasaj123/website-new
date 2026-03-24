import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Header.css";

// Lazy load GSAP
const loadGSAP = () => import("gsap").then((m) => m.gsap);

const NAVIGATION_LINKS = [
  { to: "/", label: "Home" },
  { to: "/what-we-do", label: "What we do" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Scroll fade effect
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const newOpacity = Math.max(1 - scrollTop / 300, 0.6);
    setOpacity(newOpacity);
  }, []);

  // GSAP animation
  const initGSAP = useCallback(async () => {
    try {
      const gsap = await loadGSAP();
      gsap.to(".header-inner", {
        y: 5,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    } catch (e) {
      console.warn("GSAP not loaded");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    const t = setTimeout(initGSAP, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t);
    };
  }, [handleScroll, initGSAP]);

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
      <header className="header" style={{ opacity }}>
        <div className="header-inner">

          {/* ✅ LOGO */}
          <Link to="/" className="logo">
            DB4Cloud Technology
          </Link>

          {/* ✅ NAVBAR */}
          <nav className="nav">

            {/* Desktop */}
            <ul className="nav-list">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile button */}
            <button className="menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? menuIcons.close : menuIcons.hamburger}
            </button>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="mobile-menu">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="mobile-link"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
