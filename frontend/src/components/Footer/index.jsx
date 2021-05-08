const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{' '}
          <a
            href="https://github.com/ppscarvalho"
            target="_blank"
            rel="noreferrer"
          >
            Pedro Carvalho
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{' '}
            <a
              href="https://instagram.com/ppscarvalho"
              target="_blank"
              rel="noreferrer"
            >
              @ppscarvalho
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
