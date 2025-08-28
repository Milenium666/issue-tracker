import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Issue } from '../../interfaces/models';

@Component({
  selector: 'app-issue-detail-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './issue-detail-page.component.html',
  styleUrls: ['./issue-detail-page.component.less'],
})
export class IssueDetailPageComponent implements OnInit {
  issue: Issue | null = null;
  project: any = null;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    const issueKey = this.route.snapshot.paramMap.get('issueKey');
    if (issueKey) {
      const [projectId, issueId] = issueKey.split('-');

      this.dataService.loadIssues().then((issues) => {
        this.issue = issues.find((i) => i.projectId === projectId && i.id === issueId) || null;

        this.dataService.loadProjects().then((projects) => {
          this.project = projects.find((p) => p.id === projectId) || null;
        });
      });
    }
  }
}
