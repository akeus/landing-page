import { Injectable } from '@angular/core'
import { ProfileResponse } from '@services/models/profile.response'

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public getProfile(): ProfileResponse {
    return {
      information: {
        name: 'Miguel Angel Ake Us',
        title: 'Senior Software Engineer',
        description:
          'Ingeniero de software con experiencia en desarrollo de aplicaciones empresariales robustas usando tecnologías .NET Core y Angular. He diseñado arquitecturas escalables, implementado pipelines CI/CD, creado contenedores Docker y orquestación con Kubernetes. Apasionado por la mejora continua del código, revisión de buenas prácticas y optimización de procesos DevOps.',
        photo: {
          url: 'https://avatars.githubusercontent.com/u/16445740?v=4',
          alt: 'Miguel Angel Ake Us',
        },
      },
      social: {
        github: 'https://github.com/akeus',
        linkedin: 'https://www.linkedin.com/in/miguel-ake-us',
        email: 'miguel.ake.us@outlook.com',
      },
      experience: {
        title: 'Experiencia',
        subtitle:
          'Más de 11 años construyendo soluciones de software innovadoras.',
        positions: [
          {
            id: 1,
            company: 'World2Meet',
            position: 'Software Engineer III',
            from: 'Agosto 2024',
            to: 'Junio 2025',
            summary:
              'Participe en proyectos de migración de APIs, SPAs y SSRs desde la nube de Amazon Web Services a Microsoft Azure, creación de pipelines en Azure Repos y la integración de métricas en OpenSearch. Mi enfoque de desarrollo de software fue en tecnologías frontend como Angular, NodeJS con arquitectura micro-frontend desarrollando sitios SSR y SPA',
            skills: [
              'Angular',
              'NodeJS',
              'NestJS',
              'Azure DevOps',
              'Micro-frontend',
              'GIT (Azure Repos)',
              'CI/CD',
              'Jenkins',
            ],
          },
          {
            id: 2,
            company: 'Despegar',
            position: 'Software Engineer III',
            from: 'Abril 2022',
            to: 'Julio 2024',
            summary:
              'Participe en proyectos de desarrollo de APIs internas (Servidor de identidad, Cifrado de datos sensibles, Gestión de colas de eventos, Manejo de cache centralizado), Participe en una migración de nube donde tuve el reto de migrar las APIs y SPAs de Google Cloud Platform a Amazon Web Services.',
            skills: [
              '.NET (C#)',
              'Micro-servicios',
              'Github Actions',
              'SOLID',
              'Liderazgo',
              'Sistemas distribuidos',
              'Kafka',
              'Redis',
              'Docker',
              'MySQL',
            ],
          },
          {
            id: 3,
            company: 'Despegar',
            position: 'Software Engineer II',
            from: 'Noviembre 2020',
            to: 'Marzo 2022',
            summary:
              'Tuve el reto de migrar aplicaciones desde servidores virtuales de Azure a contenedores docker y deploy en kubernetes, durante esta migración el principal reto fue adaptar los sistemas para poder crear imágenes docker así como construir la infraestructura con HELM y preparar el monitoreo con Grafana y ELK. Desarrolle nuevas APIs usando tecnologías .NET y arquitectura microservicios con colas de eventos de kafka.',
            skills: [
              '.NET (C#)',
              'Micro-servicios',
              'SOLID',
              'Liderazgo',
              'Sistemas distribuidos',
              'Kafka',
              'Docker',
              'Kubernetes',
              'OWASP',
              'API Security',
              'Angular',
              'CD/CD',
              'MySQL',
            ],
          },
          {
            id: 4,
            company: 'BestDay Travel Group',
            position: 'Tech Lead',
            from: 'Marzo 2020',
            to: 'Octubre 2020',
            summary:
              'Principales responsabilidades eran reunirme con stakeholders para realizar el levantamiento de nuevas funcionalidades, priorizarlas para  analizar y diseñar soluciones con el equipo de desarrollo, así como seguimiento de tareas.',
            skills: [
              'Code Review',
              'Liderazgo',
              'Gestion de tareas',
              'Gestion de equipos',
              'Análisis de requerimientos',
              'Comunicacion',
            ],
          },
          {
            id: 5,
            company: 'BestDay Travel Group',
            position: 'Semi Senior Software Developer',
            from: 'Agosto 2018',
            to: 'Febrero 2020',
            summary:
              'Desarrolle nuevos módulos para los sistemas, puesta en producción, monitoreo y seguimiento con los usuarios sobre las nuevas funcionalidades. Estos desarrollos estaban echos con tecnologias .NET Framework con VB.NET y C#, publicadas en servidores windows con IIS.',
            skills: [
              'NET Framework 3',
              'NET Framework 4',
              'C#',
              'VB.NET',
              'ASP.NET',
              'HTML',
              'CSS',
              'Javascript',
              'Windows Server',
              'IIS',
              'SQL Server',
              'T-SQL',
            ],
          },
          {
            id: 6,
            company: 'BestDay Travel Group',
            position: 'Junior Software Developer',
            from: 'Julio 2016',
            to: 'Julio 2018',
            summary:
              'Daba soporte de segundo nivel a las aplicaciones. Mis tareas eran depurar, documentar y dar una solución a nivel código para incidencias de sistemas. Durante este periodo trabajé con bases de datos SQL Server creando y modificando Store Procedures, Function, Triggers y Jobs con el lenguaje T-SQL.',
            skills: [
              'NET Framework',
              'C#',
              'VB.NET',
              'Windows Server',
              'IIS',
              'SQL Server',
              'T-SQL',
            ],
          },
          {
            id: 7,
            company: 'Profesional Independiente',
            position: 'Programador Web',
            from: 'Enero 2016',
            to: 'Junio 2016',
            summary:
              'Durante este periodo desarrolle aplicaciones web, landing pages, CRMs, siguiendo normas de calidad, estándares para posicionamiento web (SEO, SEM), mis proyectos los desarrollaba usando tecnologías como PHP, Laravel, Symfony, MySQL, automatizaciones con scripts de Shell.',
            skills: [
              'PHP',
              'Laravel',
              'Symfony',
              'Lumen',
              'HTML',
              'CSS',
              'Javascript',
              'CPanel',
              'Web Hosting',
              'Shell',
            ],
          },
          {
            id: 8,
            company: 'Megatera Solutions',
            position: 'Webmaster',
            from: 'Enero 2014',
            to: 'Diciembre 2015',
            summary:
              'Desarrollo del CRM de la empresa,  obteniendo los requerimientos del usuario, analizando y diseñando la mejor solución, escribir código y poner en producción. Gestione la infraestructura del sitio para que siempre esté disponible y óptimo. Stack de desarrollo PHP, Laravel, Lumen y bases de datos MySQL.',
            skills: [
              'PHP',
              'Laravel',
              'Lumen',
              'HTML',
              'CSS',
              'Javascript',
              'CPanel',
              'Web Hosting',
              'MySQL',
            ],
          },
          {
            id: 9,
            company: 'Publiherz',
            position: 'Programador JR.',
            from: 'Abril 2013',
            to: 'Diciembre 2013',
            summary:
              'Desarrolle módulos para el CRM de la empresa, analizar requerimientos, escribir código en PHP,  guardar datos en la base de datos MySQL, generación de consultas SQL y pruebas funcionales del desarrollo.',
            skills: ['PHP', 'HTML', 'CSS', 'Javascript', 'MySQL'],
          },
        ],
      },
    }
  }
}
