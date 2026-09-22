import TechIcon from "./TechIcon";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="servicos" className="section">
      <h2 className="section-title">Serviços</h2>
      <p className="section-intro">Para freelas e projetos sob demanda. Veja o que eu entrego em cada frente.</p>

      <div className="services-grid">
        {services.map((s) => (
          <article key={s.title} className="service-card panel">
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <ul className="service-list">
              {s.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="service-foot">
              <ul className="service-techs" aria-label="Tecnologias">
                {s.techs.map((t) => (
                  <li key={t}>
                    <TechIcon tech={t} size={30} />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
