const projects = [
  {
    slug: 'management-bi',
    title: 'Sistema de Gestão com BI Integrado',
    shortDescription: 'Backend robusto em Java/PostgreSQL integrado a um painel analítico para tomada de decisões operacionais.',
    fullDescription: 'Plataforma completa de gestão empresarial que unifica operações de backend com inteligência de negócios. O sistema oferece módulos de cadastro, controle de estoque, faturamento e um dashboard analítico integrado que transforma dados operacionais em insights acionáveis em tempo real.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Power BI', 'REST API'],
    link: '/projects/management-bi',
    image: '/images/projects/Sistema%20de%20Gest%C3%A3o%20com%20BI%20Integrado.jpg',
    github: 'https://github.com/natanaeldeholanda',
    features: [
      'CRUD completo com Spring Data JPA',
      'Autenticação JWT e controle de acesso por roles',
      'ETL automatizado para o Power BI',
      'Dashboards de vendas, financeiro e estoque',
      'API RESTful documentada com Swagger',
    ],
    techDetails: {
      backend: 'Java 17, Spring Boot 3, Spring Security, Spring Data JPA',
      database: 'PostgreSQL com migrations Flyway',
      bi: 'Power BI com DAX medidas e conexão direta SQL',
      others: 'Docker, Swagger/OpenAPI, Git',
    },
  },
  {
    slug: 'executive-dashboard',
    title: 'Dashboard Executivo de Performance',
    shortDescription: 'Solução de business intelligence no Metabase/Power BI automatizando extração SQL para insights estratégicos.',
    fullDescription: 'Solução completa de Business Intelligence que consolida dados de múltiplas fontes em um dashboard executivo unificado. Automatiza a extração, transformação e carga (ETL) de dados SQL, gerando visualizações interativas que permitem aos gestores acompanhar KPIs críticos em tempo real.',
    tags: ['Power BI', 'Metabase', 'SQL', 'ETL', 'DAX'],
    link: '/projects/executive-dashboard',
    github: 'https://github.com/natanaeldeholanda',
    image: '/images/projects/Dashboard%20Executivo%20de%20Performance.png',
    features: [
      'ETL automatizado com scripts SQL agendados',
      'Modelo dimensional estrela para análise multidimensional',
      'Medidas DAX para indicadores de performance',
      'Dashboards interativos com drill-down',
      'Alertas automáticos para métricas críticas',
    ],
    techDetails: {
      backend: 'SQL avançado, Views materializadas, Stored Procedures',
      database: 'SQL Server / PostgreSQL',
      bi: 'Power BI, Metabase, DAX, M-Query',
      others: 'Excel, Google Sheets, Git',
    },
  },
  {
    slug: 'rest-api',
    title: 'API RESTful Escalável',
    shortDescription: 'Microsserviço em Java focado em alta performance e processamento de dados em larga escala.',
    fullDescription: 'API RESTful construída com arquitetura de microsserviços, projetada para alta disponibilidade e processamento eficiente de grandes volumes de dados. Implementa padrões de design como Repository, Service Layer e DTO, com tratamento robusto de exceções e validações.',
    tags: ['Java', 'Spring Boot', 'Microserviços', 'JPA', 'Docker'],
    link: '/projects/rest-api',
    github: 'https://github.com/natanaeldeholanda',
    image: '/images/projects/API%20RESTful%20Escal%C3%A1vel.png',
    features: [
      'Arquitetura em camadas (Controller, Service, Repository)',
      'Paginação, filtros e ordenação eficientes',
      'Cache com Redis para consultas frequentes',
      'Tratamento global de exceções',
      'Testes unitários e de integração com JUnit',
    ],
    techDetails: {
      backend: 'Java 17, Spring Boot 3, Spring Cloud',
      database: 'PostgreSQL + Redis (cache)',
      infra: 'Docker, Docker Compose, Nginx',
      others: 'JUnit, Mockito, Swagger, Git, GitHub Actions',
    },
  },
]

export function getAllProjects() {
  return projects
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null
}

export default projects
