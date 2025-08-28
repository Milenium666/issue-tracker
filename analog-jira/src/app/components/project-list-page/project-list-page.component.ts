import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Project } from '../../interfaces/models';

@Component({
  selector: 'app-project-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.less'],
})
export class ProjectListPageComponent implements OnInit {
  projects: Project[] = [];

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.loadProjects().then(projects => {
      this.projects = [...projects];
    });
  }
}
