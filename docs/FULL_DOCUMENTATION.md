# FULL_DOCUMENTATION.md

## Visão Geral

Site portfólio profissional de Natanael de Holanda e Oliveira — Desenvolvedor Java & Analista de Dados.

## Stack

| Tecnologia | Versão |
|------------|--------|
| React | 18.3 |
| Vite | 5.4 |
| React Router | 6.26 |
| Lucide React | 0.454 |
| Node | 18+ |

## Páginas

1. **Home** (`/`): SPA com seções Hero, Sobre, Skills, Projetos, Contato
2. **Sistema de Gestão com BI** (`/projects/management-bi`): Projeto full-stack
3. **Dashboard Executivo** (`/projects/executive-dashboard`): Projeto BI
4. **API RESTful** (`/projects/rest-api`): Projeto backend

## Tema

- Dark mode (`#0a0e17` background)
- Accents: Blue (`#3b82f6`), Purple (`#8b5cf6`), Cyan (`#06b6d4`)
- Fonte: Inter (Google Fonts)
- Ícones: Lucide React

## Componentes

- Navbar: fixa, blur ao scroll, responsiva
- Hero: gradientes animados, stats, CTAs
- About: grid imagem/texto, highlights cards
- Skills: 3 colunas, skill bars animadas
- Portfolio: grid de project cards
- Contact: info + formulário mailto
- Footer: social links
- ProjectShell: wrapper com navegação

## Dados

Arquivos em `src/data/` controlam todo conteúdo editável sem mexer em componentes.

## Build

```bash
npm run build   # Saída em dist/
```
