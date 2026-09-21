import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav">
        <Link href="/" className="brand">
          raj.
        </Link>
        <div className="nav-links">
          <Link href="/#work">work</Link>
          <Link href="/#experience">experience</Link>
          <Link href="/#about">about</Link>
          <Link href="/#contact">contact</Link>
          <a
            download="Raj-Kumar-Shrestha-CV.docx"
            href="/Raj-Kumar-Shrestha-CV.docx"
            target="_blank"
            rel="noreferrer"
          >
            resume
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
