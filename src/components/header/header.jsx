import React, { useEffect, useRef } from 'react';
import './header.scss';

const Header = () => {
  const toggleBtnRef = useRef(null);
  const navMenuRef = useRef(null);
  const closeBtnRef = useRef(null);
  const luchadoresRef = useRef(null);

  useEffect(() => {
    const toggleBtn = toggleBtnRef.current;
    const navMenu = navMenuRef.current;
    const closeBtn = closeBtnRef.current;
    const luchadores = luchadoresRef.current;
    const bloques = luchadores.querySelectorAll('.div_de_luchadores_mas_el_margin_left');

    let currentIndex = 0;

    const handleOpenClick = () => {
      navMenu.style.right = '0px';
      navMenu.style.transition = 'right 0.3s ease-in-out';
    };

    const handleCloseClick = () => {
      navMenu.style.right = '-244px';
      navMenu.style.transition = 'right 0.3s ease-in-out';
    };

    toggleBtn.addEventListener('click', handleOpenClick);
    closeBtn.addEventListener('click', handleCloseClick);

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleGesture();
    };

    const handleGesture = () => {
      const swipeDistance = touchStartX - touchEndX;

      if (swipeDistance > 50 && currentIndex < bloques.length - 1) {
        currentIndex++;
        centerBlock(currentIndex);
      }
      if (swipeDistance < -50 && currentIndex > 0) {
        currentIndex--;
        centerBlock(currentIndex);
      }
    };

    const centerBlock = (index) => {
      const bloque = bloques[index];
      const bloqueCenter = bloque.offsetLeft + bloque.offsetWidth / 2;
      const scrollTo = bloqueCenter - luchadores.offsetWidth / 2;

      luchadores.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    };

    centerBlock(0);

    luchadores.addEventListener('touchstart', handleTouchStart);
    luchadores.addEventListener('touchend', handleTouchEnd);

    return () => {
      toggleBtn.removeEventListener('click', handleOpenClick);
      closeBtn.removeEventListener('click', handleCloseClick);
      luchadores.removeEventListener('touchstart', handleTouchStart);
      luchadores.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <header className="header">
      <div className="div_de_contenido_en_el_header">
        <div className="div_de_logo_en_el_header">
          <a href="">
            <img src="/images/logo.svg" alt="Logo de la velada" />
          </a>
        </div>
        <div className="div_de_menu_en_el_header" ref={toggleBtnRef}>
          <button className="button_de_menu_en_el_header">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav className="nav_de_menu_en_el_header" ref={navMenuRef}>
        <div className="equis_de_menu_en_el_header" ref={closeBtnRef}>
          ✕
        </div>
        <ul>
          <li>
            <a href="">HAZ TU PORRA</a>
          </li>
          <li>
            <a href="">VER COMBATES</a>
          </li>
          <li>
            <div className="div_de_compra_en_el_header">
              <p>COMPRA LAS ENTRADAS</p>
              <p>NUEVAS ENTRADAS LIMITADAS</p>
            </div>
          </li>
        </ul>
      </nav>

      <div className="div_de_logo_y_titulos_en_el_header">
        <h3>
          26 DE
          <br />
          JULIO
        </h3>
        <figure>
          <img src="/images/logo_grande.webp" alt="" />
        </figure>
        <div className="div_de_titulos_en_el_header">
          <h3>
            <a href="">
              "Estadio"
              <br />
              "La cartuja"
              <br />
              "Sevilla"
            </a>
          </h3>
          <a href="">
            "Twitch.tv"
            <br />
            "Ibai"
          </a>
        </div>
      </div>

      <div className="div_de_luchadores_en_el_header_mas_las_flechas">
        <div className="wrapper_scroll">
          <div className="solo_div_de_luchadores" ref={luchadoresRef}>
            <div className="div_de_luchadores_mas_el_margin_left">
              <div className="bloque_de_dos_luchadores">
                <img src="/images/luchadores/grefg.webp" alt="" />
                <img src="/images/luchadores/westcol.webp" alt="" />
              </div>
              <figure>
                <img src="/images/luchadores/versus.webp" alt="" />
              </figure>
            </div>
            <div className="div_de_luchadores_mas_el_margin_left">
              <div className="bloque_de_dos_luchadores">
                <img src="/images/luchadores/peereira.webp" alt="" />
                <img src="/images/luchadores/rivaldios.webp" alt="" />
              </div>
              <figure>
                <img src="/images/luchadores/versus.webp" alt="" />
              </figure>
            </div>
            <div className="div_de_luchadores_mas_el_margin_left">
              <div className="bloque_de_dos_luchadores">
                <img src="/images/luchadores/perxitaa.webp" alt="" />
                <img src="/images/luchadores/gaspi.webp" alt="" />
              </div>
              <figure>
                <img src="/images/luchadores/versus.webp" alt="" />
              </figure>
            </div>
            <div className="div_de_luchadores_mas_el_margin_left">
              <div className="bloque_de_dos_luchadores">
                <img src="/images/luchadores/abby.webp" alt="" />
                <img src="/images/luchadores/roro.webp" alt="" />
              </div>
              <figure>
                <img src="/images/luchadores/versus.webp" alt="" />
              </figure>
            </div>
            <div className="div_de_luchadores_mas_el_margin_left">
              <div className="bloque_de_dos_luchadores">
                <img src="/images/luchadores/andoni.webp" alt="" />
                <img src="/images/luchadores/carlos.webp" alt="" />
              </div>
              <figure>
                <img src="/images/luchadores/versus.webp" alt="" />
              </figure>
            </div>
            <div className="div_de_luchadores_mas_el_margin_left">
              <div className="bloque_de_dos_luchadores">
                <img src="/images/luchadores/viruzz.webp" alt="" />
                <img src="/images/luchadores/tomas.webp" alt="" />
              </div>
              <figure>
                <img src="/images/luchadores/versus.webp" alt="" />
              </figure>
            </div>
            <div className="div_de_luchadores_mas_el_margin_left">
              <div className="bloque_de_dos_luchadores">
                <img src="/images/luchadores/alana.webp" alt="" />
                <img src="/images/luchadores/arigeli.webp" alt="" />
              </div>
              <figure>
                <img src="/images/luchadores/versus.webp" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div>
          <svg></svg>
        </div>
      </div>
    </header>
  );
};

export default Header;


