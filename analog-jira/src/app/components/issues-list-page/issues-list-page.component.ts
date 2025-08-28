import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Issue } from '../../interfaces/models';
@Component({
  selector: 'app-issues-list-page',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './issues-list-page.component.html',
  styleUrls: ['./issues-list-page.component.less'],
})
export class IssuesListPageComponent implements OnInit {
  issues: Issue[] = [];
  projectId: string = '';

  constructor(private readonly route: ActivatedRoute, private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id') || '';

    if (this.projectId) {
      this.dataService.loadIssues().then((issues) => {
        this.issues = issues.filter((i) => i.projectId === this.projectId);
      });
    }
  }
}
