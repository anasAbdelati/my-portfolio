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
      image: 'path/to/image1.jpg',
      name: 'Project 1',
      description: 'Description for project 1'
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Project 2',
      description: 'Description for project 2'
    },
    {
      image: 'path/to/image3.jpg',
      name: 'Project 3',
      description: 'Description for project 3'
    },
    {
      image: 'path/to/image4.jpg',
      name: 'Project 4',
      description: 'Description for project 4'
    },
    // Add more projects as needed
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
