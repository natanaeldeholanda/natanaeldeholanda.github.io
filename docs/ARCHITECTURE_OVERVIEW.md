# ARCHITECTURE_OVERVIEW.md

## Arquitetura Geral

SPA (Single Page Application) construída com React 18 + Vite 5. Roteamento client-side com React Router 6.

```
Browser → index.html → main.jsx → App.jsx → React Router
                                              ├── / → HomePage
                                              │     ├── Navbar
                                              │     ├── Hero
                                              │     ├── About
                                              │     ├── Experience
                                              │     ├── Skills
                                              │     ├── Portfolio
                                              │     ├── Testimonials
                                              │     ├── Contact
                                              │     └── Footer
                                              ├── /projects/management-bi → ManagementBiProject (ProjectShell)
                                              ├── /projects/executive-dashboard → ExecutiveDashboardProject (ProjectShell)
                                              └── /projects/rest-api → RestApiProject (ProjectShell)
```

## Fluxo de Dados

- Dados centralizados em `src/data/*.js` (profile, stats, about, skills, projects, experience, testimonials)
- Componentes importam dados diretamente (sem estado global)
- ProjectShell recebe `slug` prop e busca projeto em `getProjectBySlug()`
- Formulário de contato usa `mailto:` (sem backend)

## Temas

- Dark theme com fundo carvão quente (`#0c0a0e`) via variáveis CSS (`:root` em `global.css`)
- Accent esmeralda (`#059669`) como cor primária distintiva
- Tipografia: Sora (display) + Outfit (body)
- Animações CSS-only (sem framer-motion)

## Responsividade

- CSS Grid e Flexbox
- Breakpoints: 640px, 768px, 900px, 1024px
- Navbar adaptável com menu hamburger
- Grids adaptam colunas por viewport
