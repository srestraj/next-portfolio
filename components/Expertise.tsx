import { skills } from "@/data/skills";
export default function Expertise() {
  return (
    <section className="section container border-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Technical expertise</p>
          <h2>
            A toolkit for <em>real products.</em>
          </h2>
        </div>
      </div>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-group" key={s.title}>
            <h3>{s.title}</h3>
            <div>
              {s.items.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
