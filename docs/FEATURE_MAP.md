# FEATURE_MAP.md

## Homepage (seções)

| Seção | Componente | Arquivo de Dados | Funcionalidades |
|-------|------------|------------------|-----------------|
| Navbar | `Navbar.jsx` | — | Monograma NH, scroll transparent→glass, active section via IntersectionObserver, mobile toggle |
| Hero | `Hero.jsx` | `profile.js`, `stats.js` | Eyebrow, headline Syne, role line, stack chips, stats com separadores, mesh gradient + dot grid |
| Sobre | `About.jsx` | `about.js` | Grid imagem + texto, frame gradiente, glassmorphism overlay, highlights cards |
| Skills | `Skills.jsx` | `skills.js` (inline) | 3 categorias com chips + badges Expert/Proficient/Familiar (sem progress bars) |
| Portfolio | `Portfolio.jsx` | `projects.js` | Grid com primeiro card wide, numeração editorial, image curtain overlay |
| Contato | `Contact.jsx` | `profile.js` | Info + formulário com labels uppercase (mailto) |
| Footer | `Footer.jsx` | `profile.js` | Tagline, social links, linha gradiente, stack de tecnologias |

## Projetos (páginas individuais)

| Projeto | Slug | Componente | CSS |
|---------|------|------------|-----|
| Gestão com BI | `management-bi` | `ManagementBiProject.jsx` | `project-shell.css` |
| Dashboard Executivo | `executive-dashboard` | `ExecutiveDashboardProject.jsx` | `project-shell.css` |
| API RESTful | `rest-api` | `RestApiProject.jsx` | `project-shell.css` |

## Rotas

| Path | Componente | Descrição |
|------|------------|-----------|
| `/` | `HomePage` | Landing page com todas as seções |
| `/projects/management-bi` | `ManagementBiProject` | Detalhes projeto 1 |
| `/projects/executive-dashboard` | `ExecutiveDashboardProject` | Detalhes projeto 2 |
| `/projects/rest-api` | `RestApiProject` | Detalhes projeto 3 |

## Componentes Compartilhados

- `ProjectShell`: wrapper para páginas de projeto com navegação anterior/próximo
- `ProjectCard`: card de projeto na grade da homepage
