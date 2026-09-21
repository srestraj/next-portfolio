import { experience } from "@/data/experience";
export default function Experience() {
  return (
    <section id="experience" className="section container border-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Experience</p>
          <h2>
            Engineering with <em>purpose.</em>
          </h2>
        </div>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <div className="experience-row" key={item.period}>
            <span>{item.period}</span>
            <div>
              <h3>{item.title}</h3>
              <p className="company">{item.company}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
