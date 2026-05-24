# AGENTS.md

Este arquivo documenta as instruções e convenções para agentes de IA que trabalham neste projeto.

## Stack

- React 18 + Vite 5 (web SPA)
- React Router 6 para navegação
- Lucide React para ícones
- CSS Modules / CSS puro para estilização
- Node 18+

## Estrutura do Projeto

```
src/
├── components/   # Componentes reutilizáveis (Navbar, Hero, etc.)
├── data/         # Arquivos de dados (profile, skills, projects)
├── projects/     # Páginas de detalhes de cada projeto
├── styles/       # CSS global e de componentes
│   └── projects/ # CSS específico de projetos
App.jsx           # Rotas e layout principal
main.jsx          # Entry point
```

## Convenções

- slug em `projects.js` === segmento de path em `App.jsx` === prop `slug` do `ProjectShell`
- `link` em projects.js === `/projects/<slug>`
- `getAllProjects()` retorna na ordem de navegação anterior/próximo
- Sem `motion.div` (não temos framer-motion)
- Em páginas de projeto, usar `<Link to="/#work">` ao invés de `href="#work"`
- Texto completo de case study vive em `src/projects/*.jsx`, não em `projects.js`

## Comandos

```bash
npm install      # Instalar dependências
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
```

## Manutenção de Docs

Sempre que código ou configuração mudar, atualizar docs conforme `docs/USAGE_GUIDE.md` §4.2.
