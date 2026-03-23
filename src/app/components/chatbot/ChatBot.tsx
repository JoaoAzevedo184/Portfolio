import { useState, useRef, useEffect } from "react";
import { Send, Bot, X, Minimize2, Maximize2 } from "lucide-react";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
};

const faq: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["experiência", "anos", "tempo", "trabalha", "trabalho"],
    answer: "O Alex tem mais de 5 anos de experiência em desenvolvimento de software, com foco em backend, arquitetura de APIs e sistemas distribuídos.",
  },
  {
    keywords: ["stack", "tecnologia", "linguagem", "java", "python", "spring", "react"],
    answer: "O Alex trabalha principalmente com Java + Spring Boot no backend, Python para automação/scripts, React + TypeScript no frontend, e Docker, PostgreSQL e AWS na infraestrutura.",
  },
  {
    keywords: ["contato", "email", "chamar", "falar", "conversar", "contratar"],
    answer: "Você pode entrar em contato pelo email alex.silva@dev.io ou pelo LinkedIn (linkedin.com/in/alexsilva). Ele está aberto a novas oportunidades! 🚀",
  },
  {
    keywords: ["projeto", "projetos", "portfólio", "trabalhos", "fez"],
    answer: "O Alex já construiu gateways de pagamento, microsserviços de autenticação, motores de ETL, dashboards de monitoramento e CLIs. Confira a seção Projetos para detalhes!",
  },
  {
    keywords: ["disponível", "disponibilidade", "freelance", "vaga", "emprego", "trabalhar"],
    answer: "Sim! O Alex está disponível para novos projetos, seja como freelancer, consultoria ou posição CLT/PJ. Entre em contato para conversar.",
  },
  {
    keywords: ["formação", "faculdade", "curso", "estudo", "graduação", "universidade"],
    answer: "O Alex tem formação em Ciência da Computação e busca constantemente atualização através de cursos, certificações e projetos práticos.",
  },
  {
    keywords: ["aws", "cloud", "nuvem", "infraestrutura", "docker"],
    answer: "O Alex tem experiência com AWS (EC2, S3, SQS, CloudWatch), containerização com Docker e gerenciamento de ambientes Linux.",
  },
  {
    keywords: ["salário", "valor", "preço", "custo", "quanto cobra"],
    answer: "Valores variam conforme o escopo do projeto e o tipo de contratação. O melhor é entrar em contato diretamente para uma proposta personalizada! 😊",
  },
];

const greetings = ["oi", "olá", "ola", "hey", "hello", "hi", "bom dia", "boa tarde", "boa noite", "e aí"];

function getBotReply(input: string): string {
  const lower = input.toLowerCase();

  if (greetings.some((g) => lower.includes(g))) {
    return "Olá! 👋 Sou o assistente virtual do Alex. Posso te contar sobre sua experiência, projetos, stack tecnológica, disponibilidade e muito mais. Como posso te ajudar?";
  }

  const match = faq.find((f) => f.keywords.some((k) => lower.includes(k)));
  if (match) return match.answer;

  return "Hmm, não tenho certeza sobre isso ainda. Posso te ajudar com informações sobre a experiência do Alex, projetos, tecnologias que ele usa ou como entrar em contato. O que você gostaria de saber?";
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "bot",
      text: "Olá! 👋 Sou o assistente do Alex. Pergunte qualquer coisa sobre ele — experiência, projetos, tecnologias, disponibilidade...",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(1);

  useEffect(() => {
    if (open && !minimized) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, minimized]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: idRef.current++, from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply = getBotReply(text);
      setMessages((prev) => [...prev, { id: idRef.current++, from: "bot", text: reply }]);
      setTyping(false);
    }, 700 + Math.random() * 500);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-200 hover:scale-105"
          style={{
            background: "#00ff9c",
            color: "#0a0a0a",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 0 20px #00ff9c88, 0 0 40px #00ff9c44",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.8rem",
            fontWeight: 700,
          }}
        >
          <Bot size={18} />
          Fale com meu bot
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-6 right-6 z-50 flex flex-col rounded-lg overflow-hidden transition-all duration-300"
          style={{
            width: "360px",
            height: minimized ? "52px" : "480px",
            background: "#0d0d0d",
            border: "1px solid #00ff9c33",
            boxShadow: "0 0 40px #00ff9c22, 0 8px 32px rgba(0,0,0,0.6)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ background: "#111", borderBottom: "1px solid #00ff9c22" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "#00ff9c22" }}
              >
                <Bot size={14} style={{ color: "#00ff9c" }} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.78rem",
                    color: "#00ff9c",
                    fontWeight: 600,
                  }}
                >
                  Alex.Bot
                </div>
                <div
                  className="flex items-center gap-1"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#555" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{ background: "#00ff9c", boxShadow: "0 0 4px #00ff9c" }}
                  />
                  online
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMinimized(!minimized)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#555" }}
              >
                {minimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </button>
              <button
                onClick={() => setOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#555" }}
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className="max-w-[80%] px-3 py-2 rounded"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.78rem",
                        lineHeight: 1.6,
                        ...(msg.from === "bot"
                          ? {
                              background: "#161616",
                              color: "#ccc",
                              border: "1px solid #00ff9c15",
                            }
                          : {
                              background: "#00ff9c",
                              color: "#0a0a0a",
                              fontWeight: 600,
                            }),
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div
                      className="px-3 py-2 rounded flex items-center gap-1"
                      style={{
                        background: "#161616",
                        border: "1px solid #00ff9c15",
                      }}
                    >
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full inline-block"
                          style={{
                            background: "#00ff9c",
                            animation: `bounce 1s ${i * 0.15}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div
                className="shrink-0 flex items-center gap-2 px-3 py-3"
                style={{ borderTop: "1px solid #00ff9c15" }}
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Pergunte algo sobre o Alex..."
                  className="flex-1 px-3 py-2 rounded outline-none"
                  style={{
                    background: "#111",
                    border: "1px solid #00ff9c22",
                    color: "#ccc",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                  }}
                />
                <button
                  onClick={send}
                  className="p-2 rounded transition-all duration-150 hover:scale-105"
                  style={{
                    background: "#00ff9c",
                    border: "none",
                    cursor: "pointer",
                    color: "#0a0a0a",
                    boxShadow: "0 0 10px #00ff9c44",
                  }}
                >
                  <Send size={14} />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </>
  );
}
