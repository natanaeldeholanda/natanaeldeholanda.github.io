# USAGE_GUIDE.md

## 1. Sobre

Guia de uso e manutenção do site portfólio de Natanael de Holanda.

## 2. Stack

- React 18 + Vite 5
- React Router 6 (SPA com rotas)
- Lucide React (ícones)
- CSS puro com variáveis CSS (dark theme)
- Google Fonts (Inter)

## 3. Estrutura de Diretórios

```
/
├── public/images/       # Imagens estáticas
├── src/
│   ├── components/      # Componentes React
│   ├── data/            # Dados do portfólio
│   ├── projects/        # Páginas de projeto
│   └── styles/          # Folhas de estilo
├── docs/                # Documentação
├── index.html           # Entry point Vite
├── vite.config.js       # Config Vite
└── package.json
```

## 4. Fluxo de Trabalho

### 4.1 Editar Homepage

| Conteúdo | Arquivo |
|----------|---------|
| Perfil, contato | `src/data/profile.js` |
| Hero + números | `src/data/stats.js` |
| Sobre | `src/data/about.js` |
| Skills | `src/data/skills.js` |
| Projetos (cards) | `src/data/projects.js` |

### 4.2 Sincronização de Docs

Após qualquer alteração de código ou configuração, atualizar:

1. `docs/CONTENT_SOURCE.md` — se conteúdo mudou
2. `docs/FEATURE_MAP.md` — features afetadas
3. `docs/ARCHITECTURE_OVERVIEW.md` — se estrutura mudou
4. `docs/AI_AGENT_GUIDE.md` — se rotas/estrutura mudaram
5. `docs/FULL_DOCUMENTATION.md` — documentação geral
6. `docs/API_FLOW.md` — se fluxos de dados mudaram
7. `AGENTS.md` — se rotas mudaram

### 4.3 Adicionar Projeto

1. Adicionar entrada em `src/data/projects.js` (slug, link, etc.)
2. Criar `src/projects/NovoProjeto.jsx` + `src/styles/projects/novo-projeto.css`
3. Adicionar rota em `src/App.jsx`
4. Adicionar imagem em `public/images/projects/<slug>.jpg`
5. Verificar navegação anterior/próximo no `ProjectShell`
6. Atualizar docs (FEATURE_MAP, ARCHITECTURE_OVERVIEW, AI_AGENT_GUIDE, FULL_DOCUMENTATION, API_FLOW, AGENTS.md)

### 4.4 Invariantes

```
projects.js slug === App.jsx path segment === ProjectShell slug prop
projects.js link === '/projects/' + slug
getAllProjects() order === prev/next pager order
```

## 5. Comandos

```bash
npm install && npm run dev   # Desenvolvimento
npm run build                # Produção
```

Node 18+.

## 6. Evitar

- `motion.div` (sem framer-motion)
- `href="#work"` em páginas de projeto → usar `<Link to="/#work">`
- Case study longo em `projects.js` → usar `src/projects/*.jsx`
