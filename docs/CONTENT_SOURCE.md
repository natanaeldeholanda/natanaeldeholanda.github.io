# CONTENT_SOURCE.md

## Mapeamento de Conteúdo

Este documento é referência para mapeamento de conteúdo. Não é bundled na aplicação.

| Conteúdo | Arquivo Fonte | Descrição |
|----------|---------------|-----------|
| Perfil | `src/data/profile.js` | Nome, email, role, tagline, redes sociais |
| Hero Stats | `src/data/stats.js` | Números de impacto (projetos, techs, horas, café) |
| Sobre | `src/data/about.js` | Narrativa profissional, parágrafos |
| Skills | `src/data/skills.js` | Categorias + skills com níveis |
| Skill Icons | `src/data/skillIcons.js` | Mapeamento skill → URL do ícone |
| Projetos | `src/data/projects.js` | Cards da homepage + dados completos |
| Projeto Detail | `src/projects/*.jsx` | Páginas individuais de projeto |

## Regras

- Instruções do usuário no chat sobrescrevem este documento
- Alterações de conteúdo: atualizar `CONTENT_SOURCE.md` + arquivos runtime
- Projetos: metadata em `projects.js`, corpo completo em `src/projects/*.jsx`

## Persona do Portfólio

- Nome: Natanael de Holanda e Oliveira
- Role: Desenvolvedor Java & Analista de Dados
- Tagline: "Transformando Dados Brutos em Código Eficiente e Decisões Inteligentes"
- Foco: Backend Java/Spring + Data Analytics/BI
- Tom: Profissional, técnico, analítico
