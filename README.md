# 🚀 Portfólio Pessoal

Um portfólio web moderno e responsivo desenvolvido com React, TypeScript e Vite. Apresenta uma experiência visual atrativa com animações suaves e componentes interativos.

## ✨ Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Tema Escuro**: Interface dark mode com paleta elegante
- **Animações Suaves**: Transições e efeitos visuais polidos
- **ChatBot Interativo**: Assistente integrado para contato e dúvidas
- **Performance Otimizada**: Build rápido com Vite
- **Acessibilidade**: Componentes Radix UI com suporte ARIA
- **Componentes Modernos**: UI components de alta qualidade com shadcn/ui

## 🛠️ Stack Tecnológico

### Frontend
- **React 18+** - Library UI
- **TypeScript** - Type safety
- **Vite** - Build tool (dev server ultra-rápido)
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Componentes acessíveis
- **Motion** - Animações avançadas
- **Lucide React** - Ícones SVG

### Ferramentas
- **PostCSS** - Processamento de CSS
- **ESLint** - Linting de código

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── App.tsx                 # Componente raiz principal
│   └── components/
│       ├── About.tsx           # Seção sobre mim
│       ├── ChatBot.tsx         # Assistente de chat
│       ├── Contact.tsx         # Formulário de contato
│       ├── Hero.tsx            # Banner principal/landing
│       ├── LoadingScreen.tsx   # Tela de carregamento
│       ├── Navbar.tsx          # Navegação
│       ├── Projects.tsx        # Portfólio de projetos
│       ├── Stack.tsx           # Tecnologias/habilidades
│       ├── figma/
│       │   └── ImageWithFallback.tsx  # Componente de imagem com fallback
│       └── ui/                 # Componentes shadcn/ui
│           ├── accordion.tsx
│           ├── button.tsx
│           ├── card.tsx
│           ├── dialog.tsx
│           ├── form.tsx
│           ├── input.tsx
│           └── ... (mais componentes)
│
├── imports/
│   └── dev-portfolio.md        # Importações/dados do portfólio
│
├── styles/
│   ├── fonts.css               # Tipografia customizada
│   ├── index.css               # Estilos globais
│   ├── tailwind.css           # Configuração Tailwind
│   └── theme.css              # Variáveis de tema
│
├── main.tsx                    # Entry point da aplicação
│
├── vite.config.ts              # Configuração do Vite
├── postcss.config.mjs          # Configuração PostCSS
├── tsconfig.json               # Configuração TypeScript
├── package.json                # Dependências e scripts
└── index.html                  # HTML principal
```

## 🚀 Como Começar

### Pré-requisitos
- Node.js 16+ 
- npm, yarn, pnpm ou bun

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/JoaoAzevedo184/Portfolio.git
   cd Portfolio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

   A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

O build otimizado será gerado na pasta `dist/`

## 🎨 Seções do Portfólio

### LoadingScreen
Tela de carregamento inicial com animação enquanto os recursos são carregados.

### Navbar
Navegação principal com links para as seções e opções de tema.

### Hero
Banner principal com apresentação inicial e call-to-action.

### About
Seção biográfica com informações pessoais e características profissionais.

### Stack
Apresentação das tecnologias, ferramentas e linguagens de programação que domino.

### Projects
Galeria de projetos destacados com descrições, links e tecnologias utilizadas.

### Contact
Formulário de contato e informações para entrar em comunicação.

### ChatBot
Assistente de chat integrado para interações e dúvidas em tempo real.

## 📝 Desenvolvimento

### Adicionar Novo Componente

1. Crie um novo arquivo em `src/app/components/`
2. Importe o componente em `App.tsx`
3. Adicione a seção na ordem desejada

### Customizar Estilos

- **Cores globais**: Edite `src/styles/theme.css`
- **Fonts**: Configure em `src/styles/fonts.css`
- **Tailwind**: Customize em `tailwind.config.js` se necessário

### Componentes UI

Todos os componentes UI estão em `src/app/components/ui/` baseados no shadcn/ui. Consulte a [documentação do shadcn/ui](https://ui.shadcn.com/) para detalhes.

## 🔧 Configurações

### Aliases
O projeto usa alias `@` apontando para a pasta `src/`:
```typescript
import { Button } from '@/app/components/ui/button'
```

### Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto se precisar de variáveis de ambiente:
```
VITE_API_URL=seu_url_aqui
```

## 📚 Recursos Úteis

- [Documentação React](https://react.dev)
- [Documentação Vite](https://vitejs.dev)
- [Documentação Tailwind CSS](https://tailwindcss.com)
- [Documentação Radix UI](https://www.radix-ui.com)
- [shadcn/ui](https://ui.shadcn.com)

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

## 👨‍💻 Autor

**João Azevedo**

- GitHub: [@JoaoAzevedo184](https://github.com/JoaoAzevedo184)
- Portfólio: [seu-dominio.com](https://seu-dominio.com)

## 🤝 Contribuindo

Contributions, issues e feature requests são bem-vindos! Sinta-se à vontade para fazer um fork e abrir um pull request.

---

Desenvolvido com ❤️ usando React, TypeScript e Vite
