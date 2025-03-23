import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  experiences = [
    {
      title: 'Apprentice - Software Engineer in the Air Traffic Management Sector',
      company: 'Thales',
      location: 'Toulouse , France',
      startDate: '09/2024',
      endDate: '09/2025',
      description: 'Thales is a global leader in aerospace, defense, and security, specializing in advanced technologies for critical industries . ' +
        'During my apprenticeship at Thales, I worked in the Land and Air Systems (LAS) department, specifically in Air Traffic Management (ATM). My project was part of the SESAR program, which aims to modernize and optimize European air traffic management systems.<br>'+
        '<br>As part of this initiative, I collaborated closely with EuroControl to develop and deploy a highly scalable microservice designed ' +
        'to propose and submit real-time flight trajectory changes. This service played a key role in dynamically adjusting flight paths to achieve ' +
        'three main objectives: reducing CO₂ emissions, minimizing flight durations, and alleviating air traffic congestion in high-density hotspots.<br>' +
        '<br>Following an Agile SCRUM methodology, I contributed by designing, developing, and integrating a Java Spring Boot microservice. I implemented ' +
        'rigorous unit and integration testing using Cucumber & Mockito and deployed cloud-native services using Helm & Kubernetes. Additionally, I worked' +
        ' closely with air traffic management experts to refine trajectory optimization models.<br>' +
        'This experience allowed me to bridge the gap between software engineering and real-world aviation operations, contributing directly to European efforts in sustainable aviation.<br>',
      skills: ['Java (JEE)', 'Spring Boot', 'Cucumber','Mockito', 'Helm', 'React', 'Gitlab CI', 'Kubernetes'],
      link: 'https://www.thalesgroup.com/en'
    },
    {
      title: 'Intership - Fullstack Developper',
      company: 'Sopra Steria',
      location: 'Toulouse , France',
      startDate: '05/2024',
      endDate: '09/2024',
      description: 'Sopra Steria is a European leader in digital transformation, consulting, and software development, providing innovative' +
        ' IT solutions to various industries, including banking, insurance, and government sectors. At Sopra Steria, I worked in the Insurance Department for Crédit Agricole, where I was responsible for developing and maintaining a' +
        ' contract management application. I was the sole developer managing the application, working directly with both the client and a UI/UX designer' +
        ' to enhance usability, functionality, and efficiency.<br>' +
        '<br>My contributions included full-stack development using Java (JEE), Spring Boot, Hibernate, and Angular, enhancing the application’s contract ' +
        'management features based on client feedback, and collaborating with a UI/UX designer to improve its user interface and ergonomics. I also' +
        ' implemented Spring Batch for efficient data processing and optimized PostgreSQL databases for performance improvements.<br>' +
        '<br>This internship provided me with hands-on experience in full-cycle software development, from requirement gathering and client communication ' +
        'to UI/UX enhancements and backend optimizations. Managing the entire application reinforced my problem-solving abilities, autonomy, and adaptability.',
      skills: ['Java (JEE)', 'Spring Boot', 'Spring Batch','Hibernate', 'Angular', 'JavaScript','PostgreSQL'],
      link: 'https://www.soprasteria.com/'
    }
  ];
}
