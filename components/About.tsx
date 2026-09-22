export default function About() {
  return (
    <section id="sobre" className="section">
      <h2 className="section-title">Sobre</h2>

      <div className="about-grid">
        <div className="about-text panel">
          <p>
            Sou João Victor Azevedo de Sena, estudante do 6º período de Sistemas de Informação na UNINASSAU. Gosto
            da parte do software que ninguém vê: a API que responde rápido, o banco que não perde dado e o deploy que
            não quebra na sexta à tarde.
          </p>
          <p>
            No dia a dia trabalho com Java e Spring Boot, além de Python com FastAPI e Node.js com TypeScript.
            Empacoto com Docker, automatizo com GitHub Actions e publico em Kubernetes com Helm.
          </p>
          <p>
            Hoje faço a Residência em Tecnologia do Instituto ECOA | PUC-Rio e, nas horas livres, mantenho um homelab
            e estudo como modelos de IA funcionam por dentro.
          </p>
        </div>

        <figure className="about-photo">
          <div className="about-photo-frame">
            {/* Coloque sua foto em /public/eu.jpg */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/eu.jpg" alt="Foto de João Victor" />
          </div>
        </figure>
      </div>
    </section>
  );
}
