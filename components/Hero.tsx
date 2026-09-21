import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const yearsOfExperience = new Date().getFullYear() - 2019;

  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">Frontend engineering · Ontario, Canada</p>
        <h1>
          Senior Frontend
          <br />
          <em>Engineer.</em>
        </h1>
        <p className="hero-lede">
          I build scalable, high-performance web applications with React,
          Next.js, TypeScript, Vue and Nuxt.
        </p>
        <p className="hero-body">
          With {yearsOfExperience}+ years of frontend development experience, I
          turn complex product requirements into fast, accessible and
          maintainable interfaces for SaaS and business applications.
        </p>
        <div className="actions">
          <Link className="button button-dark" href="#work">
            View my work <span>↗</span>
          </Link>
          <a
            className="button button-light"
            download="Raj-Kumar-Shrestha-CV.docx"
            href="/Raj-Kumar-Shrestha-CV.docx"
          >
            Download resume
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <Image
            src="/images/hero-img.jpg"
            alt="Raj Kumar Shrestha"
            width={400}
            height={600}
          />
        </div>
        <div className="hero-note">
          React · Next.js · Vue · Nuxt · TypeScript
        </div>
      </div>
    </section>
  );
}
