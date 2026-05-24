# ARCHITECTURE_OVERVIEW.md

## Arquitetura Geral

SPA (Single Page Application) construída com React 18 + Vite 5. Roteamento client-side com React Router 6.

```
Browser → index.html → main.jsx → App.jsx → React Router
                                              ├── / → HomePage
                                              │     ├── Navbar
                                              │     ├── Hero
                                              │     ├── About
                                              │     ├── Skills
                                              │     ├── Portfolio
                                              │     ├── Contact
                                              │     └── Footer
                                              ├── /projects/management-bi → ManagementBiProject (ProjectShell)
                                              ├── /projects/executive-dashboard → ExecutiveDashboardProject (ProjectShell)
                                              └── /projects/rest-api → RestApiProject (ProjectShell)
```

## Fluxo de Dados

- Dados centralizados em `src/data/*.js` (profile, stats, about, skills, projects)
- Componentes importam dados diretamente (sem estado global)
- ProjectShell recebe `slug` prop e busca projeto em `getProjectBySlug()`
- Formulário de contato usa `mailto:` (sem backend)

## Temas

- Dark theme via variáveis CSS (`:root` em `global.css`)
- Sistema de design consistente (cores, espaçamentos, border-radius, shadows)
- Gradientes animados e blur effects

## Responsividade

- CSS Grid e Flexbox
- Mobile-first breakpoints: 640px, 768px, 1024px
- Navbar adaptável com menu hamburger
- Grid de skills e projects adaptam colunas por viewport
