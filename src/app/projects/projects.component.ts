import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']

})

export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      image: 'assets/portfolioScreen.png',
      name: 'Portfolio',
      description: 'its the porfolio that are you are currently in'
    },
    {
      image: 'assets/mobileApp.png',
      name: 'Android application',
      description: 'mobile application for restaurant reservation, I am still working on this project which is why its still private on my github'
    },
    {
      image: 'assets/api.png',
      name: 'VirVoile Rest Api',
      description: "I developed the backend with Spring Boot, implemented the CI/CD pipeline using " +
        "GitLab CI, and deployed the application with Docker Swarm. This API was used by a sailing simulator for professionals."
    },
    {
      image: 'assets/Loading.png',
      name: 'Comming Soon',
      description: ''
    },
  ];

  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      slidesPerView: 3, // Number of slides to show
      spaceBetween: 30, // Space between slides
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
    });
  }

  viewProject(project: any) {
    // Handle view project action
    console.log(project);
  }
}
