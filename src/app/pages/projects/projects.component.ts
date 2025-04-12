import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Portfolio',
      description: 'It is the portfolio you are currently viewing.',
      githubUrl: 'https://github.com/anasAbdelati/my-portfolio',
      liveUrl: 'https://anasabdelati.github.io/my-portfolio/',
      technologies: ['Angular', 'TypeScript', 'SCSS','Github Actions']
    },
    {
      name: 'Android application',
      description: 'A mobile application for restaurant reservations. This app displays' +
        ' nearby restaurants using the Google API, allowing users to filter results based on ' +
        'their preferences. Users can leave reviews and ratings for restaurants and make reservations directly through the app.',
      githubUrl: 'https://github.com/anasAbdelati/Food.fr',
      liveUrl: '',
      technologies: ['Android', 'Java', 'Firebase']
    },
    {
      name: 'VirVoile Rest Api',
      description: "A REST API with a front-end used only for testing. This API is directly utilized by the <a href=\"https://opencollective.com/virvoile\" target=\"_blank\">VirVoile</a> " +
        "3D sailing race simulator. ( the owner of the project made it private 🙁)",
      githubUrl: '',
      liveUrl: '',
      technologies: ['Spring Boot','Java','JavaFx','React', 'Docker', 'GitLab CI', 'Docker Swarm','PostgreSQL']
    },
    {
      name: 'Crypto API',
      description: "A side project REST API to register users via Keycloak and fetch crypto coin data. Includes email alerts based on price thresholds or recurring intervals. Documented with Swagger UI.",
      githubUrl: 'https://github.com/anasAbdelati/crypto-api',
      liveUrl: '',
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'Junit5', 'Cucumber', 'Keycloak', 'Docker', 'Docker Compose', 'GitHub Actions', 'OpenAPI / Swagger']
    },
    {
      name: 'Coming Soon',
      description: 'more projects will be added soon.',
      githubUrl: '',
      liveUrl: '',
      technologies: []
    },
  ];
}
