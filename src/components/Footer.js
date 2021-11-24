function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__heading">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__information">
        <p className="footer__copyright">© 2022</p>
        <nav>
          <ul className="footer__menu">
            <li>
              <a
                href="https://practicum.yandex.ru"
                target="_blank"
                className="footer__menu-link"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kiars1"
                target="_blank"
                className="footer__menu-link"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                className="footer__menu-link"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
