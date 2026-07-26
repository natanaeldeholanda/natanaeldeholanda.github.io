# FEATURE_MAP.md

## Homepage (seções)

| Seção | Componente | Arquivo de Dados | Funcionalidades |
|-------|------------|------------------|-----------------|
| Navbar | `Navbar.jsx` | — | Monograma NH, scroll transparent→glass, active section via IntersectionObserver, mobile toggle |
| Hero | `Hero.jsx` | `profile.js`, `stats.js` | Headline Sora, role line, inline stats, 2 CTAs, mesh gradient, scroll indicator |
| Sobre | `About.jsx` | `about.js` | Grid texto + imagem, overlay com dot pulse, highlights cards 3-col full-width |
| Experiência | `Experience.jsx` | `experience.js` | Timeline unificada (trabalho + educação intercalados), scroll reveal CSS |
| Skills | `Skills.jsx` | `skills.js` (inline) | 3 categorias com chips (sem badges), icons por categoria |
| Portfolio | `Portfolio.jsx` | `projects.js` | Grid 2-col, image curtain overlay |
| Depoimentos | `Testimonials.jsx` | `testimonials.js` | Cards com quote + autor, avatar gradiente |
| Contato | `Contact.jsx` | `profile.js` | Info links + formulário mailto |
| Footer | `Footer.jsx` | `profile.js` | Tagline, social links circulares, divider, stack tecnologias |

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
