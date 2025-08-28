import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Issue, Project } from '../../interfaces/models';
@Component({
  selector: 'app-project-detail-page',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './project-detail-page.component.html',
  styleUrls: ['./project-detail-page.component.less'],
})
export class ProjectDetailPageComponent implements OnInit {
  project: Project | null = null;
  issues: Issue[] = [];

  constructor(private readonly route: ActivatedRoute, private readonly dataService: DataService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.dataService.loadProjects().then((projects) => {
        this.project = projects.find((p) => p.id === id) || null;

        this.dataService.loadIssues().then((issues) => {
          this.issues = issues.filter((i) => i.projectId === id);
        });
      });
    }
  }
}
