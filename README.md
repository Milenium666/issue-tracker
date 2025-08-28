# MiniJira

Учебный проект для отработки Angular Routing.

## 🚀 Стек
- Angular 20+
- Standalone components
- Router + Lazy Loading
- Nx (структурирование проекта)

## 📂 Функционал
- Список проектов `/projects`
- Детали проекта `/projects/:id`
- Список задач проекта `/projects/:id/issues`
- Детали задачи `/browse/:issueKey`
- Список пользователей (админка) `/admin/users`
- Детали пользователя (админка) `/admin/users/:id`
- Авторизация (мок, через `AuthService`)
- Гард для `/admin` (роль `admin` или `teamlead`)
- Страница 404
- Страница логина

## 🔐 Авторизация
- При входе используется `AuthService.login()`, пользователь сохраняется в памяти.
- Если пользователь неавторизован, доступ к `/admin` → редирект на `/login`.

## 🛠 Установка и запуск
```bash
npm install
npm start
