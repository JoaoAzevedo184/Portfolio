"use client";

import { useState } from "react";
import { experience } from "@/data/content";

type Tab = keyof typeof experience;
const tabs = Object.keys(experience) as Tab[];

export default function Experience() {
  const [tab, setTab] = useState<Tab>("Formação");

  return (
    <section id="experiencia" className="section">
      <h2 className="section-title">Experiência</h2>

      <div className="tabs" role="tablist" aria-label="Tipo de experiência">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            id={`tab-${t}`}
            aria-selected={tab === t}
            aria-controls="exp-panel"
            className={`chip${tab === t ? " is-active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <ol id="exp-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="timeline">
        {experience[tab].map((item) => (
          <li key={item.title} className="timeline-item">
            <span className="timeline-node" aria-hidden="true" />
            <div className="panel timeline-card">
              <p className="timeline-period">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="timeline-place">{item.place}</p>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
