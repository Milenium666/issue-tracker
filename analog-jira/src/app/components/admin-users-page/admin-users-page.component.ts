import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../interfaces/models';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-admin-users-page',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.less'],
})
export class AdminUsersPageComponent implements OnInit {
  users: User[] = [];

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.loadUsers().then((users) => {
      this.users = [...users];
    });
  }
}
