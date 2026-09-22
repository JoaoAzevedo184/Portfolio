# Portfólio — João Victor (Backend)

Next.js 15 (App Router) + TypeScript, CSS puro. O visual segue o prompt **AI Runtime** do MotionSites (vídeo de fundo, fonte pontilhada BubbledotICG-FinePos, pílulas escuras). A estrutura segue os wireframes.

## Rodar

```bash
npm install
cp .env.example .env.local   # opcional: aponte para sua API Spring Boot
npm run dev                  # http://localhost:3000
```

## Onde editar

| O quê | Onde |
|---|---|
| Textos, projetos, serviços, experiência, contatos, ícones | `data/content.ts` |
| Cores (azul neon etc.) | topo de `app/globals.css` (`:root`) |
| Tom do vídeo do hero (o original é rosa) | `--hero-hue` em `app/globals.css` |
| Sua foto | `public/eu.jpg` (hoje é um placeholder) |
| Currículo | `public/curriculo.pdf` |
| Logo | troque o `<span>JV</span>` em `components/Sidebar.tsx` por `<img src="/logo.svg" alt="" />` |
| Vídeo de um projeto | preencha `youtubeId` no projeto, em `data/content.ts` |

Ainda faltam no conteúdo: e-mail, LinkedIn, WhatsApp e o período do estágio na Escola Monte Castelo.

## Contrato da API de contato (Spring Boot)

A URL base vem de `NEXT_PUBLIC_CONTACT_API_URL`. Sem essa variável, o formulário roda em **modo demonstração**.

### `POST /api/contact/improve`

```json
// request
{ "name": "Maria", "email": "maria@empresa.com", "draft": "preciso de uma api pra minha loja..." }
// response 200
{ "text": "Olá, João Victor!\n\n..." }
```

Recebe o rascunho e devolve a versão revisada pelo LLM (Spring AI). Sugestão de system prompt: reescrever em português claro e educado, manter todos os fatos do rascunho e não inventar prazos nem valores.

### `POST /api/contact/send`

```json
// request
{ "name": "Maria", "email": "maria@empresa.com", "message": "texto final" }
// response 202 (sem corpo)
```

Envia o e-mail para você (JavaMailSender, Resend ou SES), com o `Reply-To` do visitante.

Recomendações:

- Libere o CORS só para o domínio do site.
- Aplique rate limit por IP (ex.: Bucket4j).
- Limite o tamanho do rascunho (~2.000 caracteres).
- Use um honeypot ou captcha contra spam.
