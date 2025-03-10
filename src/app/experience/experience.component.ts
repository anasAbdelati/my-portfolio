import { Component, Input } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  skills: string[];
  link?: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() experiences: Experience[] = [];
}
