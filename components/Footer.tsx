export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Raj Kumar Shrestha</span>
        <div>
          <a
            href="https://github.com/srestraj"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/srestraj"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://codepen.io/srestraj"
            target="_blank"
            rel="noreferrer"
          >
            CodePen
          </a>
        </div>
      </div>
    </footer>
  );
}
