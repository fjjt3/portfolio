export type Locale = 'en' | 'es' | 'de' | 'fr' | 'ru';

interface CvSection {
  title: string;
  body: string;
}

interface LocaleMessages {
  documentTitle: string;
  description: string;
  ui: Record<string, string>;
  cv: {
    role: string;
    location: string;
    sections: CvSection[];
  };
  hero: {
    kicker: string;
    heading: string;
    description: string;
    viewCv: string;
  };
}

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  ru: 'Русский',
};

export const locales: Record<Locale, LocaleMessages> = {
  en: {
    documentTitle: 'Francisco Jiménez — Software Engineer',
    description:
      'Software engineer in Málaga. Backend services in Java, Spring Boot, and Quarkus: microservices, cloud, and observability.',
    ui: {
      languageLabel: 'Language',
      navHome: 'Home',
      navCv: 'CV',
      navProjects: 'Projects',
      navOpenMenu: 'Open menu',
      navCloseMenu: 'Close menu',
      heroViewCv: 'View CV',
      cvProjects: 'Projects',
      cvGithub: 'GitHub',
      cvLinkedin: 'LinkedIn',
    },
    hero: {
      kicker: 'Backend engineering / Málaga',
      heading: 'Backend systems that hold up in production.',
      description:
        'Software engineer in Málaga working across Java, Spring Boot, and Quarkus. Microservices, cloud, and the observability around them.',
      viewCv: 'View CV',
    },
    cv: {
      role: 'Software Engineer',
      location: 'Málaga, Spain',
      sections: [
        {
          title: 'Professional Profile',
          body: 'Results-oriented Software Engineer with experience in software development and maintenance. Proficient in Java, Python, Spring Boot, FastAPI, and PostgreSQL. Skilled in agile methodologies, creative problem-solving, and teamwork. Quick learner with a strong ability to adapt to new technologies and challenges.',
        },
        {
          title: 'Experience',
          body: `### Software Engineer — CGI
_September 2025 – Present_

_The Workshop betting software._
- Built scalable microservices using REST (OpenAPI), gRPC, and WebSockets.
- Main technologies: Claude Code, Java, Spring Boot, Quarkus, GitHub, Docker, Azure, OpenAPI Swagger, JUnit.

### Backend Developer — Sulzer
_January 2024 – August 2025_

_BMW software engineering for car factory production lines._
- Developed REST services and microservices.
- Managed observability and resolved issues with Grafana and Prometheus.
- Built RESTful APIs and integrated third-party services.
- Worked directly with factory users to troubleshoot incidents, identify root causes, and define solutions or new features.

_BMW time tracking application._
- Developed REST services and microservices.
- Wrote unit tests.
- Built RESTful APIs and integrated third-party services.
- Worked on cloud development.
- Main technologies: Java, Spring Boot, Quarkus, GitHub, Docker, Azure, OpenAPI Swagger, JUnit.

### Backend Developer — PwC
_January 2022 – January 2024_

_Business Intelligence Platform._
- Developed REST services and microservices.
- Wrote unit and integration tests.
- Built RESTful APIs and integrated third-party services.
- Applied agile methodologies (Scrum, Kanban) for project management.

_Custom GPT chatbot._
- Developed backend services.
- Wrote unit and integration tests.
- Built RESTful APIs and integrated third-party services.
- Main technologies: Java, Spring Boot, Python, FastAPI, Flask, Pytest, OpenAPI Swagger, GitHub, Docker, Azure, Cypress.`,
        },
        {
          title: 'Education',
          body: `### Higher National Diploma in Multiplatform Application Development — Medac
_March 2022 – August 2022_`,
        },
        {
          title: 'Skills',
          body: `**Languages:** Java, Python

**Frameworks:** Spring Boot, Quarkus, FastAPI

**Backend:** REST APIs, OpenAPI

**Databases:** PostgreSQL, MySQL, MongoDB

**Tools:** Claude Code, OpenCode, Git, GitHub, Jira, Postman, Trello

**Methodologies:** Agile/Scrum, Kanban, Pair Programming, TDD, SDD`,
        },
        {
          title: 'Languages',
          body: `- **Spanish** — Native
- **English** — Advanced
- **German** — Advanced
- **French** — Advanced
- **Russian** — Intermediate`,
        },
      ],
    },
  },
  es: {
    documentTitle: 'Francisco Jiménez — Ingeniero de software',
    description:
      'Ingeniero de software en Málaga. Desarrollo backend con Java, Spring Boot y Quarkus: microservicios, cloud y observabilidad.',
    ui: {
      languageLabel: 'Idioma',
      navHome: 'Inicio',
      navCv: 'Currículum',
      navProjects: 'Proyectos',
      navOpenMenu: 'Abrir menú',
      navCloseMenu: 'Cerrar menú',
      heroViewCv: 'Ver currículum',
      cvProjects: 'Proyectos',
      cvGithub: 'GitHub',
      cvLinkedin: 'LinkedIn',
    },
    hero: {
      kicker: 'Ingeniería backend / Málaga',
      heading: 'Sistemas backend preparados para producción.',
      description:
        'Ingeniero de software en Málaga, especializado en Java, Spring Boot y Quarkus. Microservicios, cloud y observabilidad.',
      viewCv: 'Ver currículum',
    },
    cv: {
      role: 'Ingeniero de software',
      location: 'Málaga, España',
      sections: [
        {
          title: 'Perfil profesional',
          body: 'Ingeniero de software orientado a resultados, con experiencia en desarrollo y mantenimiento de software. Especializado en Java, Python, Spring Boot, FastAPI y PostgreSQL. Experiencia con metodologías ágiles, resolución creativa de problemas y trabajo en equipo. Aprendizaje rápido y gran capacidad para adaptarse a nuevas tecnologías y retos.',
        },
        {
          title: 'Experiencia',
          body: `### Ingeniero de software — CGI
_Septiembre de 2025 – Actualidad_

_Software de apuestas de The Workshop._
- Desarrollo de microservicios escalables con REST (OpenAPI), gRPC y WebSockets.
- Tecnologías principales: Claude Code, Java, Spring Boot, Quarkus, GitHub, Docker, Azure, OpenAPI Swagger y JUnit.

### Desarrollador backend — Sulzer
_Enero de 2024 – Agosto de 2025_

_Ingeniería de software para las líneas de producción de BMW._
- Desarrollo de servicios REST y microservicios.
- Gestión de la observabilidad y resolución de incidencias con Grafana y Prometheus.
- Desarrollo de API REST e integración de servicios de terceros.
- Colaboración directa con usuarios de fábrica para diagnosticar incidencias, encontrar sus causas y definir soluciones o nuevas funcionalidades.

_Aplicación de control horario de BMW._
- Desarrollo de servicios REST y microservicios.
- Creación de pruebas unitarias.
- Desarrollo de API REST e integración de servicios de terceros.
- Desarrollo en la nube.
- Tecnologías principales: Java, Spring Boot, Quarkus, GitHub, Docker, Azure, OpenAPI Swagger y JUnit.

### Desarrollador backend — PwC
_Enero de 2022 – Enero de 2024_

_Plataforma de inteligencia de negocio._
- Desarrollo de servicios REST y microservicios.
- Creación de pruebas unitarias y de integración.
- Desarrollo de API REST e integración de servicios de terceros.
- Aplicación de metodologías ágiles (Scrum y Kanban) para la gestión de proyectos.

_Chatbot GPT personalizado._
- Desarrollo de servicios backend.
- Creación de pruebas unitarias y de integración.
- Desarrollo de API REST e integración de servicios de terceros.
- Tecnologías principales: Java, Spring Boot, Python, FastAPI, Flask, Pytest, OpenAPI Swagger, GitHub, Docker, Azure y Cypress.`,
        },
        {
          title: 'Formación',
          body: `### Técnico Superior en Desarrollo de Aplicaciones Multiplataforma — Medac
_Marzo de 2022 – Agosto de 2022_`,
        },
        {
          title: 'Habilidades',
          body: `**Lenguajes:** Java, Python

**Frameworks:** Spring Boot, Quarkus, FastAPI

**Backend:** API REST, OpenAPI

**Bases de datos:** PostgreSQL, MySQL, MongoDB

**Herramientas:** Claude Code, OpenCode, Git, GitHub, Jira, Postman, Trello

**Metodologías:** Agile/Scrum, Kanban, programación en pareja, TDD y SDD`,
        },
        {
          title: 'Idiomas',
          body: `- **Español** — Nativo
- **Inglés** — Avanzado
- **Alemán** — Avanzado
- **Francés** — Avanzado
- **Ruso** — Intermedio`,
        },
      ],
    },
  },
  de: {
    documentTitle: 'Francisco Jiménez — Softwareentwickler',
    description:
      'Softwareentwickler in Málaga. Backend-Entwicklung mit Java, Spring Boot und Quarkus: Microservices, Cloud und Observability.',
    ui: {
      languageLabel: 'Sprache',
      navHome: 'Startseite',
      navCv: 'Lebenslauf',
      navProjects: 'Projekte',
      navOpenMenu: 'Menü öffnen',
      navCloseMenu: 'Menü schließen',
      heroViewCv: 'Lebenslauf ansehen',
      cvProjects: 'Projekte',
      cvGithub: 'GitHub',
      cvLinkedin: 'LinkedIn',
    },
    hero: {
      kicker: 'Backend-Entwicklung / Málaga',
      heading: 'Backend-Systeme, die sich im Produktivbetrieb bewähren.',
      description:
        'Softwareentwickler in Málaga mit Schwerpunkt auf Java, Spring Boot und Quarkus. Microservices, Cloud und Observability.',
      viewCv: 'Lebenslauf ansehen',
    },
    cv: {
      role: 'Softwareentwickler',
      location: 'Málaga, Spanien',
      sections: [
        {
          title: 'Berufliches Profil',
          body: 'Ergebnisorientierter Softwareentwickler mit Erfahrung in der Entwicklung und Wartung von Software. Sicher im Umgang mit Java, Python, Spring Boot, FastAPI und PostgreSQL. Erfahrung mit agilen Methoden, kreativer Problemlösung und Teamarbeit. Lernt schnell und passt sich neuen Technologien und Herausforderungen an.',
        },
        {
          title: 'Berufserfahrung',
          body: `### Softwareentwickler — CGI
_September 2025 – heute_

_Wettsoftware von The Workshop._
- Entwicklung skalierbarer Microservices mit REST (OpenAPI), gRPC und WebSockets.
- Haupttechnologien: Claude Code, Java, Spring Boot, Quarkus, GitHub, Docker, Azure, OpenAPI Swagger und JUnit.

### Backend-Entwickler — Sulzer
_Januar 2024 – August 2025_

_BMW-Softwareentwicklung für Produktionslinien in Automobilwerken._
- Entwicklung von REST-Diensten und Microservices.
- Verantwortung für Observability und Fehlerbehebung mit Grafana und Prometheus.
- Entwicklung von RESTful APIs und Integration von Drittanbieterdiensten.
- Direkte Zusammenarbeit mit Werksmitarbeitenden zur Analyse von Vorfällen, Ermittlung der Ursachen und Entwicklung von Lösungen oder neuen Funktionen.

_BMW-Zeiterfassungsanwendung._
- Entwicklung von REST-Diensten und Microservices.
- Erstellung von Unit-Tests.
- Entwicklung von RESTful APIs und Integration von Drittanbieterdiensten.
- Entwicklung von Cloud-Lösungen.
- Haupttechnologien: Java, Spring Boot, Quarkus, GitHub, Docker, Azure, OpenAPI Swagger und JUnit.

### Backend-Entwickler — PwC
_Januar 2022 – Januar 2024_

_Business-Intelligence-Plattform._
- Entwicklung von REST-Diensten und Microservices.
- Erstellung von Unit- und Integrationstests.
- Entwicklung von RESTful APIs und Integration von Drittanbieterdiensten.
- Einsatz agiler Methoden (Scrum, Kanban) im Projektmanagement.

_Individueller GPT-Chatbot._
- Entwicklung von Backend-Diensten.
- Erstellung von Unit- und Integrationstests.
- Entwicklung von RESTful APIs und Integration von Drittanbieterdiensten.
- Haupttechnologien: Java, Spring Boot, Python, FastAPI, Flask, Pytest, OpenAPI Swagger, GitHub, Docker, Azure und Cypress.`,
        },
        {
          title: 'Ausbildung',
          body: `### Höherer Abschluss in der Entwicklung von Multiplattform-Anwendungen — Medac
_März 2022 – August 2022_`,
        },
        {
          title: 'Kenntnisse',
          body: `**Programmiersprachen:** Java, Python

**Frameworks:** Spring Boot, Quarkus, FastAPI

**Backend:** REST-APIs, OpenAPI

**Datenbanken:** PostgreSQL, MySQL, MongoDB

**Tools:** Claude Code, OpenCode, Git, GitHub, Jira, Postman, Trello

**Methoden:** Agile/Scrum, Kanban, Pair Programming, TDD, SDD`,
        },
        {
          title: 'Sprachen',
          body: `- **Spanisch** — Muttersprache
- **Englisch** — Fortgeschritten
- **Deutsch** — Fortgeschritten
- **Französisch** — Fortgeschritten
- **Russisch** — Mittelstufe`,
        },
      ],
    },
  },
  fr: {
    documentTitle: 'Francisco Jiménez — Ingénieur logiciel',
    description:
      'Ingénieur logiciel à Málaga. Développement backend avec Java, Spring Boot et Quarkus : microservices, cloud et observabilité.',
    ui: {
      languageLabel: 'Langue',
      navHome: 'Accueil',
      navCv: 'CV',
      navProjects: 'Projets',
      navOpenMenu: 'Ouvrir le menu',
      navCloseMenu: 'Fermer le menu',
      heroViewCv: 'Voir le CV',
      cvProjects: 'Projets',
      cvGithub: 'GitHub',
      cvLinkedin: 'LinkedIn',
    },
    hero: {
      kicker: 'Ingénierie backend / Málaga',
      heading: 'Des systèmes backend fiables en production.',
      description:
        'Ingénieur logiciel à Málaga, spécialisé en Java, Spring Boot et Quarkus. Microservices, cloud et observabilité.',
      viewCv: 'Voir le CV',
    },
    cv: {
      role: 'Ingénieur logiciel',
      location: 'Málaga, Espagne',
      sections: [
        {
          title: 'Profil professionnel',
          body: 'Ingénieur logiciel orienté résultats, avec de l’expérience en développement et maintenance de logiciels. Maîtrise de Java, Python, Spring Boot, FastAPI et PostgreSQL. À l’aise avec les méthodes agiles, la résolution créative de problèmes et le travail en équipe. Apprentissage rapide et grande capacité d’adaptation aux nouvelles technologies et aux défis.',
        },
        {
          title: 'Expérience',
          body: `### Ingénieur logiciel — CGI
_Septembre 2025 – aujourd’hui_

_Logiciel de paris de The Workshop._
- Développement de microservices évolutifs avec REST (OpenAPI), gRPC et WebSockets.
- Principales technologies : Claude Code, Java, Spring Boot, Quarkus, GitHub, Docker, Azure, OpenAPI Swagger et JUnit.

### Développeur backend — Sulzer
_Janvier 2024 – août 2025_

_Développement logiciel BMW pour les lignes de production automobile._
- Développement de services REST et de microservices.
- Gestion de l’observabilité et résolution des incidents avec Grafana et Prometheus.
- Création d’API RESTful et intégration de services tiers.
- Échanges directs avec les équipes en usine pour diagnostiquer les incidents, en identifier les causes et définir des solutions ou de nouvelles fonctionnalités.

_Application de suivi du temps BMW._
- Développement de services REST et de microservices.
- Rédaction de tests unitaires.
- Création d’API RESTful et intégration de services tiers.
- Développement cloud.
- Principales technologies : Java, Spring Boot, Quarkus, GitHub, Docker, Azure, OpenAPI Swagger et JUnit.

### Développeur backend — PwC
_Janvier 2022 – janvier 2024_

_Plateforme de Business Intelligence._
- Développement de services REST et de microservices.
- Rédaction de tests unitaires et d’intégration.
- Création d’API RESTful et intégration de services tiers.
- Mise en œuvre de méthodes agiles (Scrum, Kanban) pour la gestion de projet.

_Chatbot GPT personnalisé._
- Développement de services backend.
- Rédaction de tests unitaires et d’intégration.
- Création d’API RESTful et intégration de services tiers.
- Principales technologies : Java, Spring Boot, Python, FastAPI, Flask, Pytest, OpenAPI Swagger, GitHub, Docker, Azure et Cypress.`,
        },
        {
          title: 'Formation',
          body: `### Diplôme supérieur en développement d’applications multiplateformes — Medac
_Mars 2022 – août 2022_`,
        },
        {
          title: 'Compétences',
          body: `**Langages :** Java, Python

**Frameworks :** Spring Boot, Quarkus, FastAPI

**Backend :** API REST, OpenAPI

**Bases de données :** PostgreSQL, MySQL, MongoDB

**Outils :** Claude Code, OpenCode, Git, GitHub, Jira, Postman, Trello

**Méthodes :** Agile/Scrum, Kanban, programmation en binôme, TDD et SDD`,
        },
        {
          title: 'Langues',
          body: `- **Espagnol** — Langue maternelle
- **Anglais** — Avancé
- **Allemand** — Avancé
- **Français** — Avancé
- **Russe** — Intermédiaire`,
        },
      ],
    },
  },
  ru: {
    documentTitle: 'Francisco Jiménez — Инженер-программист',
    description:
      'Инженер-программист в Малаге. Backend-разработка на Java, Spring Boot и Quarkus: микросервисы, облачные решения и наблюдаемость.',
    ui: {
      languageLabel: 'Язык',
      navHome: 'Главная',
      navCv: 'Резюме',
      navProjects: 'Проекты',
      navOpenMenu: 'Открыть меню',
      navCloseMenu: 'Закрыть меню',
      heroViewCv: 'Посмотреть резюме',
      cvProjects: 'Проекты',
      cvGithub: 'GitHub',
      cvLinkedin: 'LinkedIn',
    },
    hero: {
      kicker: 'Backend-разработка / Малага',
      heading: 'Backend-системы, надёжно работающие в production.',
      description:
        'Инженер-программист в Малаге, специализирующийся на Java, Spring Boot и Quarkus. Микросервисы, облачные решения и наблюдаемость.',
      viewCv: 'Посмотреть резюме',
    },
    cv: {
      role: 'Инженер-программист',
      location: 'Малага, Испания',
      sections: [
        {
          title: 'Профессиональный профиль',
          body: 'Нацеленный на результат инженер-программист с опытом разработки и сопровождения ПО. Владеет Java, Python, Spring Boot, FastAPI и PostgreSQL. Имеет опыт работы по гибким методологиям, творческого решения задач и командной работы. Быстро осваивает новые технологии и адаптируется к новым задачам.',
        },
        {
          title: 'Опыт работы',
          body: `### Инженер-программист — CGI
_Сентябрь 2025 — настоящее время_

_Платформа для ставок The Workshop._
- Разработка масштабируемых микросервисов с использованием REST (OpenAPI), gRPC и WebSockets.
- Основные технологии: Claude Code, Java, Spring Boot, Quarkus, GitHub, Docker, Azure, OpenAPI Swagger и JUnit.

### Backend-разработчик — Sulzer
_Январь 2024 — август 2025_

_Разработка ПО BMW для автомобильных производственных линий._
- Разработка REST-сервисов и микросервисов.
- Обеспечение наблюдаемости и устранение проблем с помощью Grafana и Prometheus.
- Разработка RESTful API и интеграция сторонних сервисов.
- Прямое взаимодействие с сотрудниками завода: анализ инцидентов, поиск первопричин и определение решений или новых функций.

_Система учёта рабочего времени BMW._
- Разработка REST-сервисов и микросервисов.
- Написание модульных тестов.
- Разработка RESTful API и интеграция сторонних сервисов.
- Разработка облачных решений.
- Основные технологии: Java, Spring Boot, Quarkus, GitHub, Docker, Azure, OpenAPI Swagger и JUnit.

### Backend-разработчик — PwC
_Январь 2022 — январь 2024_

_Платформа бизнес-аналитики._
- Разработка REST-сервисов и микросервисов.
- Написание модульных и интеграционных тестов.
- Разработка RESTful API и интеграция сторонних сервисов.
- Применение гибких методологий (Scrum, Kanban) для управления проектами.

_Персональный GPT-чат-бот._
- Разработка backend-сервисов.
- Написание модульных и интеграционных тестов.
- Разработка RESTful API и интеграция сторонних сервисов.
- Основные технологии: Java, Spring Boot, Python, FastAPI, Flask, Pytest, OpenAPI Swagger, GitHub, Docker, Azure и Cypress.`,
        },
        {
          title: 'Образование',
          body: `### Высшее профессиональное образование в области разработки многоплатформенных приложений — Medac
_Март 2022 — август 2022_`,
        },
        {
          title: 'Навыки',
          body: `**Языки программирования:** Java, Python

**Фреймворки:** Spring Boot, Quarkus, FastAPI

**Backend:** REST API, OpenAPI

**Базы данных:** PostgreSQL, MySQL, MongoDB

**Инструменты:** Claude Code, OpenCode, Git, GitHub, Jira, Postman, Trello

**Методологии:** Agile/Scrum, Kanban, парное программирование, TDD, SDD`,
        },
        {
          title: 'Языки',
          body: `- **Испанский** — родной
- **Английский** — продвинутый
- **Немецкий** — продвинутый
- **Французский** — продвинутый
- **Русский** — средний`,
        },
      ],
    },
  },
};

export const isLocale = (value: string | undefined): value is Locale =>
  value !== undefined && Object.hasOwn(locales, value);
