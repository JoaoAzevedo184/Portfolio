"use client";

import { useState } from "react";
import { contacts } from "@/data/content";

const API = process.env.NEXT_PUBLIC_CONTACT_API_URL?.replace(/\/$/, "");

type Status =
  | { kind: "idle" }
  | { kind: "loading"; action: "improve" | "send" }
  | { kind: "error"; message: string }
  | { kind: "sent" };

// Modo demonstração: usado quando NEXT_PUBLIC_CONTACT_API_URL não está definida.
function demoImprove(name: string, draft: string) {
  const clean = draft.trim().replace(/\s+/g, " ");
  const body = clean.charAt(0).toUpperCase() + clean.slice(1);
  return `Olá, João Victor!\n\n${body}${/[.!?]$/.test(body) ? "" : "."}\n\nFico no aguardo do seu retorno.\n\nAtenciosamente,\n${name || "Seu nome"}`;
}

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(String(res.status));
  return res.status === 204 || res.status === 202 ? ({} as T) : res.json();
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [draft, setDraft] = useState("");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const busy = status.kind === "loading";
  const canImprove = draft.trim().length >= 10 && !busy;
  const canSend = name.trim() && /\S+@\S+\.\S+/.test(email) && result.trim() && !busy;

  async function improve() {
    setStatus({ kind: "loading", action: "improve" });
    try {
      if (!API) {
        await new Promise((r) => setTimeout(r, 700));
        setResult(demoImprove(name, draft));
      } else {
        const data = await post<{ text: string }>("/api/contact/improve", { name, email, draft });
        setResult(data.text);
      }
      setStatus({ kind: "idle" });
    } catch {
      setStatus({ kind: "error", message: "A IA não respondeu. Tente de novo ou envie seu rascunho sem IA." });
    }
  }

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (!canSend) return;
    setStatus({ kind: "loading", action: "send" });
    try {
      if (!API) await new Promise((r) => setTimeout(r, 700));
      else await post("/api/contact/send", { name, email, message: result });
      setStatus({ kind: "sent" });
      setDraft("");
      setResult("");
    } catch {
      setStatus({ kind: "error", message: "O e-mail não foi enviado. Confira sua conexão e tente de novo." });
    }
  }

  return (
    <section id="contato" className="section">
      <h2 className="section-title">Contato</h2>
      <p className="section-intro">Escreva do seu jeito. A IA organiza o texto, você revisa e envia.</p>

      <div className="contact-grid">
        <ul className="contact-channels">
          {contacts.map((c) => (
            <li key={c.label}>
              <a href={c.href} target="_blank" rel="noreferrer" className="channel panel">
                <span className="channel-icon">
                  <span
                    className={`mono-icon${c.monoIcon ? " mono-icon-cutout" : ""}`}
                    style={{ "--src": `url("${c.monoIcon ?? c.icon}")` } as React.CSSProperties}
                  />
                </span>
                <span className="channel-text">
                  <span className="channel-label">{c.label}</span>
                  <span className="channel-value">{c.value}</span>
                </span>
                <span className="channel-arrow" aria-hidden="true">
                  ›
                </span>
              </a>
            </li>
          ))}
        </ul>

        <form className="contact-form panel" onSubmit={send} noValidate>
          <div className="field-row">
            <label className="field">
              <span>Nome</span>
              <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
            </label>
            <label className="field">
              <span>E-mail</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label className="field">
            <span>Seu rascunho</span>
            <textarea
              rows={5}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ex.: preciso de uma api pra controlar pedidos da minha loja, integra com whatsapp, prazo de 1 mes"
            />
          </label>

          <div className="ai-actions">
            <button type="button" className="btn btn-neon btn-sm" disabled={!canImprove} onClick={improve}>
              {status.kind === "loading" && status.action === "improve" ? "Melhorando…" : "Melhorar com IA"}
            </button>
            <button
              type="button"
              className="link-btn"
              disabled={!draft.trim() || busy}
              onClick={() => setResult(draft)}
            >
              Usar meu rascunho sem IA
            </button>
          </div>

          <label className={`field field-result${result ? " has-result" : ""}`}>
            <span>Mensagem final (você pode editar)</span>
            <textarea
              rows={7}
              value={result}
              onChange={(e) => setResult(e.target.value)}
              placeholder="A versão revisada aparece aqui."
            />
          </label>

          <div className="form-foot">
            <p className="form-status" role="status" aria-live="polite">
              {status.kind === "error" && status.message}
              {status.kind === "sent" && "E-mail enviado. Respondo em até 2 dias úteis."}
              {status.kind === "idle" && !API && "Modo demonstração: configure a API para envio real."}
            </p>
            <button type="submit" className="btn btn-light" disabled={!canSend}>
              {status.kind === "loading" && status.action === "send" ? "Enviando…" : "Enviar e-mail"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
