import TechIcon from "./TechIcon";
import { projects, techs } from "@/data/content";

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <h2 className="section-title">Projetos</h2>
      <p className="section-intro">
        Cada projeto vai ganhar um vídeo no meu canal do YouTube explicando as decisões por trás do código.
      </p>

      <div className="projects-list">
        {projects.map((p) => (
          <article key={p.name} className="project-card panel">
            <div className="project-media">
              {p.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${p.youtubeId}`}
                  title={`Vídeo sobre ${p.name}`}
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.image} alt={`Tela do projeto ${p.name}`} />
              ) : (
                <div className="project-placeholder">
                  <span className="project-placeholder-name">{p.name}</span>
                  <span className="project-placeholder-note">Vídeo em breve no YouTube</span>
                </div>
              )}
            </div>

            <div className="project-info">
              <div className="project-head">
                <h3>{p.name}</h3>
                {p.status && <span className="tag">{p.status}</span>}
              </div>
              <p>{p.description}</p>

              <div className="project-links">
                <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn-light btn-sm">
                  Ver repositório
                </a>
                {p.deploy && (
                  <a href={p.deploy} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">
                    Abrir deploy
                  </a>
                )}
              </div>

              <ul className="project-techs" aria-label="Tecnologias">
                {p.techs.map((k) => (
                  <li key={k} title={techs[k].name}>
                    <TechIcon tech={k} size={34} />
                    <span>{techs[k].name}</span>
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
