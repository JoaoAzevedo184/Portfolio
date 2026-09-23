export default function About() {
  return (
    <section id="sobre" className="section">
      <h2 className="section-title">Sobre</h2>

      <div className="about-grid">
        <div className="about-text panel">
          <p>
            Sou João Victor Azevedo de Sena, estudante do 6º período de Sistemas de Informação na UNINASSAU.
            Gosto de construir soluções que resolvem problemas de verdade e da parte do software que quase ninguém vê:
            a API que responde rápido, o banco de dados que não perde informação e o deploy que não quebra na sexta à tarde.
          </p>

          <p>
            No dia a dia desenvolvo aplicações backend com Java e Spring Boot, Python com FastAPI e Node.js com TypeScript.
            Também cuido do caminho até produção com Docker, GitHub Actions, Kubernetes e Helm, buscando entregas confiáveis
            e fáceis de manter.
          </p>

          <p>
            Atualmente faço a Residência em Tecnologia do Instituto ECOA | PUC-Rio, onde desenvolvo projetos em equipe e
            aprofundo meus estudos em engenharia de software. Fora do trabalho e da faculdade, mantenho um homelab e exploro
            infraestrutura, automação e inteligência artificial na prática.
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
