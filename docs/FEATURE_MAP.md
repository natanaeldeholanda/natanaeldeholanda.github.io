# FEATURE_MAP.md

## Homepage (seções)

| Seção | Componente | Arquivo de Dados | Funcionalidades |
|-------|------------|------------------|-----------------|
| Navbar | `Navbar.jsx` | — | Nav fixa, scroll transparent→sólido, mobile toggle |
| Hero | `Hero.jsx` | `profile.js`, `stats.js` | Título, subtítulo, stats, CTAs, gradientes animados |
| Sobre | `About.jsx` | `about.js` | Grid imagem + texto, highlights cards |
| Skills | `Skills.jsx` | `skills.js` | 3 categorias com skill bars animadas |
| Portfolio | `Portfolio.jsx` | `projects.js` | Grid de cards com tags, link para detalhes |
| Contato | `Contact.jsx` | `profile.js` | Info + formulário (mailto) |
| Footer | `Footer.jsx` | `profile.js` | Social links, copyright |

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
