import { useState, useRef, useEffect } from "react";
import { Send, Bot, X, Minimize2, Maximize2 } from "lucide-react";
import { theme } from "../config/theme";
import {
  chatBotGreeting,
  chatBotGreetingReply,
  chatBotFallback,
  chatBotFaq,
  identity,
} from "../config/data";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
};

const GREETINGS = ["oi", "olá", "ola", "hey", "hello", "hi", "bom dia", "boa tarde", "boa noite", "e aí"];

function getBotReply(input: string): string {
  const lower = input.toLowerCase();

  if (GREETINGS.some((g) => lower.includes(g))) {
    return chatBotGreetingReply;
  }

  const match = chatBotFaq.find((f) => f.keywords.some((k) => lower.includes(k)));
  return match?.answer ?? chatBotFallback;
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: "bot", text: chatBotGreeting },
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
    setMessages((prev) => [...prev, { id: idRef.current++, from: "user", text }]);
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

  const accent = theme.colors.accent.primary;

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-200 hover:scale-105"
          style={{
            background: accent,
            color: theme.colors.bg.primary,
            border: "none",
            cursor: "pointer",
            boxShadow: theme.colors.glow.strong,
            fontFamily: theme.fonts.mono,
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
            background: theme.colors.bg.card,
            border: `1px solid ${accent}33`,
            boxShadow: `0 0 40px ${accent}22, 0 8px 32px rgba(0,0,0,0.6)`,
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ background: theme.colors.bg.input, borderBottom: `1px solid ${accent}22` }}
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: `${accent}22` }}>
                <Bot size={14} style={{ color: accent }} />
              </div>
              <div>
                <div style={{ fontFamily: theme.fonts.mono, fontSize: "0.78rem", color: accent, fontWeight: 600 }}>
                  {identity.shortName}.Bot
                </div>
                <div className="flex items-center gap-1" style={{ fontFamily: theme.fonts.mono, fontSize: "0.65rem", color: theme.colors.text.dimmed }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: accent, boxShadow: `0 0 4px ${accent}` }} />
                  online
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setMinimized(!minimized)} style={{ background: "none", border: "none", cursor: "pointer", color: theme.colors.text.dimmed }}>
                {minimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </button>
              <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: theme.colors.text.dimmed }}>
                <X size={14} />
              </button>
            </div>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className="max-w-[80%] px-3 py-2 rounded"
                      style={{
                        fontFamily: theme.fonts.mono,
                        fontSize: "0.78rem",
                        lineHeight: 1.6,
                        ...(msg.from === "bot"
                          ? { background: "#161616", color: "#ccc", border: `1px solid ${accent}15` }
                          : { background: accent, color: theme.colors.bg.primary, fontWeight: 600 }),
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="px-3 py-2 rounded flex items-center gap-1" style={{ background: "#161616", border: `1px solid ${accent}15` }}>
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full inline-block"
                          style={{ background: accent, animation: `bounce 1s ${i * 0.15}s infinite` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div className="shrink-0 flex items-center gap-2 px-3 py-3" style={{ borderTop: `1px solid ${accent}15` }}>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder={`Pergunte algo sobre o ${identity.name}...`}
                  className="flex-1 px-3 py-2 rounded outline-none"
                  style={{
                    background: theme.colors.bg.input,
                    border: `1px solid ${accent}22`,
                    color: "#ccc",
                    fontFamily: theme.fonts.mono,
                    fontSize: "0.75rem",
                  }}
                />
                <button
                  onClick={send}
                  className="p-2 rounded transition-all duration-150 hover:scale-105"
                  style={{ background: accent, border: "none", cursor: "pointer", color: theme.colors.bg.primary, boxShadow: `0 0 10px ${accent}44` }}
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
