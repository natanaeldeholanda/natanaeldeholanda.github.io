# AI_AGENT_GUIDE.md

## Para Agentes de IA

Este guia contém instruções específicas para agentes de IA que precisam modificar ou estender este projeto.

## Estrutura de Arquivos

```
src/
├── components/Navbar.jsx        # Navegação fixa
├── components/Hero.jsx          # Seção de abertura
├── components/About.jsx         # Seção sobre
├── components/Skills.jsx        # Seção habilidades
├── components/Portfolio.jsx     # Grid de projetos
├── components/ProjectCard.jsx   # Card individual
├── components/Contact.jsx       # Contato + formulário
├── components/Footer.jsx        # Rodapé
├── components/ProjectShell.jsx  # Wrapper páginas de projeto
├── data/profile.js              # Dados de perfil
├── data/stats.js                # Números hero
├── data/about.js                # Texto sobre
├── data/skills.js               # Skills técnicas
├── data/skillIcons.js           # Ícones de skills
├── data/projects.js             # Dados dos projetos
├── projects/ManagementBiProject.jsx
├── projects/ExecutiveDashboardProject.jsx
├── projects/RestApiProject.jsx
├── styles/global.css            # Tema e estilos base
├── styles/navbar.css
├── styles/hero.css
├── styles/about.css
├── styles/skills.css
├── styles/portfolio.css
├── styles/contact.css
├── styles/footer.css
├── styles/project-shell.css
├── App.jsx                      # Rotas
└── main.jsx                     # Entry point
```

## Regras de Manutenção

### Adicionar Projeto

1. `src/data/projects.js` — `{ slug, link: '/projects/<slug>', ... }`
2. `src/projects/NewProject.jsx` + estilo
3. `src/App.jsx` — `<Route>`
4. `public/images/projects/<slug>.jpg`
5. Verificar invariantes (slug, link, getProjects order)

### Editar Homepage

Editar arquivos em `src/data/` conforme tabela em `CONTENT_SOURCE.md`.

### Sincronizar Docs

Sempre que fizer alterações, atualizar:
- `FEATURE_MAP.md` (features afetadas)
- `ARCHITECTURE_OVERVIEW.md` (se estrutura mudou)
- `FULL_DOCUMENTATION.md`
- `API_FLOW.md` (se fluxos mudaram)
- `AGENTS.md` (se rotas mudaram)

## Evitar

- `motion.div` (não há framer-motion)
- Links com `href="#work"` em páginas de projeto
- Incluir corpo completo de case study em `projects.js`
