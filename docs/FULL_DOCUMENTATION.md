# FULL_DOCUMENTATION.md

## Visão Geral

Site portfólio profissional de Natanael de Holanda e Oliveira — Especialista em Engenharia de Software & Arquitetura de Dados.

## Stack

| Tecnologia | Versão |
|------------|--------|
| React | 18.3 |
| Vite | 5.4 |
| React Router | 6.26 |
| Lucide React | 0.454 |
| Node | 18+ |

## Páginas

1. **Home** (`/`): SPA com seções Hero, Sobre, Experiência, Skills, Projetos, Depoimentos, Contato
2. **Sistema de Gestão com BI** (`/projects/management-bi`): Projeto full-stack
3. **Dashboard Executivo** (`/projects/executive-dashboard`): Projeto BI
4. **API RESTful** (`/projects/rest-api`): Projeto backend

## Tema

- Dark mode com fundo carvão quente (`#0c0a0e`)
- Accent: Esmeralda (`#059669`)
- Display: Sora (Google Fonts)
- Body: Outfit (Google Fonts)
- Mono: JetBrains Mono
- Ícones: Lucide React
- Animações: CSS-only (sem framer-motion)

## Componentes

- Navbar: fixa, blur ao scroll, responsiva
- Hero: título Sora, inline stats, 2 CTAs, mesh gradient
- About: grid texto/imagem, highlights cards full-width
- Experience: timeline unificada com scroll reveal CSS
- Skills: 3 colunas, chips sem badges
- Portfolio: grid 2-col de project cards
- Testimonials: cards com quote + avatar gradiente
- Contact: info + formulário mailto
- Footer: social links, tagline
- ProjectShell: wrapper com navegação anterior/próximo

## Dados

Arquivos em `src/data/` controlam todo conteúdo editável sem mexer em componentes.

## Build

```bash
npm run build   # Saída em dist/
```
