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
└── paragraphs: string[]

Skills (skills.js)
└── Array<{
      category: string,
      icon: string,
      items: Array<{ name: string, level: number }>
    }>

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

- Google Fonts carregada via CDN no `index.html`
- Imagens em `public/images/` servidas estaticamente pelo Vite
