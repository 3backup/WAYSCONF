export function Footer() {
  return (
    <footer className="home24-footer voting-footer">
      <div className="voting-footer-inner">
        <p className="voting-footer-text">
          Questions?{" "}
          <a href="mailto:awards@waysconf.com" className="voting-footer-link">
            awards@waysconf.com
          </a>
        </p>
        <p className="voting-footer-text" style={{ marginTop: "0.5rem" }}>
          <a
            href="https://waysconf.com"
            target="_blank"
            rel="noreferrer"
            className="voting-footer-link"
          >
            waysconf.com
          </a>
        </p>
      </div>
    </footer>
  );
}
