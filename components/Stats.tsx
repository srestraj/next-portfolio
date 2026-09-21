const yearsOfExperience = new Date().getFullYear() - 2019;

export default function Stats() {
  const stats = [
    [`${yearsOfExperience}+`, "Years frontend experience"],
    ["React · Vue", "Modern frontend ecosystems"],
    ["SaaS", "Product & enterprise applications"],
    ["TS", "Scalable, maintainable code"],
  ];
  return (
    <section className="stats container">
      {stats.map(([value, label]) => (
        <div className="stat" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}
