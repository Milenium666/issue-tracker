import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { User } from '../../interfaces/models';
@Component({
  selector: 'app-user-detail-page',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.less'],
})
export class UserDetailPageComponent implements OnInit {
  user: User | null = null;

  constructor(private readonly route: ActivatedRoute, private readonly dataService: DataService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.dataService.loadUsers().then((users) => {
        this.user = users.find((u) => u.id === id) || null;
      });
    }
  }
}
