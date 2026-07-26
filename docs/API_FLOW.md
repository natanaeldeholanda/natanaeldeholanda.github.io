# API_FLOW.md

## Fluxo de Dados

Este portfólio SPA não utiliza API externa. O fluxo de dados é inteiramente client-side.

## Estrutura de Dados

```
Profile (profile.js)
├── name, email, phone, role
├── tagline, summary, location
└── social { github, linkedin, instagram, twitter }

Stats (stats.js)
└── Array<{ label, value, suffix }>

About (about.js)
└── paragraphs: string[] (2 parágrafos)

Skills (skills.js)
└── Array<{
      category: string,
      icon: string,
      items: string[]
    }>

Experience (experience.js)
├── experience: Array<{ id, role, company, period, description, achievements }>
└── education: Array<{ id, degree, school, period, description }>

Testimonials (testimonials.js)
└── Array<{ id, name, role, company, content, avatar }>

Projects (projects.js)
├── slug, title, shortDescription, fullDescription
├── tags: string[], link, image, github
├── features: string[]
└── techDetails: { backend, database, bi/infra, others }
```

## Fluxo de Contato

Formulário → `mailto:` → cliente de email do usuário

## Fluxo de Navegação

```
User click → Router → Component render → data import → display
```

## Sem API Externa

- Google Fonts carregada via @import no `global.css`
- Imagens em `public/images/` servidas estaticamente pelo Vite
