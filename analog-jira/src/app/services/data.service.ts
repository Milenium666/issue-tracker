import { Injectable } from '@angular/core';
import { Issue, Project, User } from '../interfaces/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private projects: Project[] = [
    { id: 'ABC', name: 'Angular Проект' },
    { id: 'XYZ', name: 'Backend Сервис' },
    { id: 'DEF', name: 'Frontend Приложение' },
  ];

  private issues: Issue[] = [
    { id: '1', projectId: 'ABC', name: 'Добавить логин' },
    { id: '2', projectId: 'ABC', name: 'Создать форму' },
    { id: '3', projectId: 'ABC', name: 'Реализовать API' },
    { id: '1', projectId: 'XYZ', name: 'Настроить API' },
    { id: '2', projectId: 'XYZ', name: 'Добавить JWT' },
    { id: '1', projectId: 'DEF', name: 'Создать компонент' },
    { id: '2', projectId: 'DEF', name: 'Добавить стили' },
  ];

  private users: User[] = [
    { id: '1', role: 'admin', fullName: 'Иван Петров' },
    { id: '2', role: 'teamlead', fullName: 'Мария Сидорова' },
    { id: '3', role: 'member', fullName: 'Алексей Козлов' },
    { id: '4', role: 'member', fullName: 'Елена Волкова' },
  ];

async loadProjects(): Promise<readonly Project[]> {
  return this.projects;
}

async loadIssues(): Promise<readonly Issue[]> {
  return this.issues;
}

async loadUsers(): Promise<readonly User[]> {
  return this.users;
}

}
