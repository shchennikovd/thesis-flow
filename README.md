# 🎓 ThesisFlow

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![React Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query/latest)
[![Zod](https://img.shields.io/badge/Zod-3068B7?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
[![MSW](https://img.shields.io/badge/MSW-FF6A33?style=for-the-badge&logo=mockserviceworker&logoColor=white)](https://mswjs.io/)

**ThesisFlow** - это пет-проект, имитирующий систему контроля сдачи дипломных работ (ВКР). 

Главной целью проекта было уйти от стандартных "туду-листов" и реализовать приложение со сложной бизнес-логикой, стейт-машиной и ролевой моделью, сделав основной упор на чистую архитектуру фронтенда.

### 🌍 Live Demo: [https://thesis-flow-ashy.vercel.app/](https://thesis-flow-ashy.vercel.app/)

---

## 🛠 Что реализовано

* **Разделение логики и UI (Headless-подход):** Вся бизнес-логика (правила, стейт-машина) написана на чистом TypeScript и изолирована от React-компонентов.
* **Стейт-машина для статусов:** Этапы диплома не переключаются хаотично. Переходы (`В работе` -> `На проверке` -> `Утверждено`) жестко контролируются ядром.
* **RBAC и валидация:** Права зависят от роли (Студент / Руководитель) и принадлежности диплома (Ownership). Данные форм валидируются в рантайме через **Zod**.
* **Mock-бэкенд:** Приложение работает автономно. Все сетевые запросы перехватываются прямо в браузере через **MSW (Mock Service Worker)** с имитацией in-memory базы данных и задержек сети.
* **Связка с React:** Управление серверным стейтом реализовано через кастомные хуки на базе **TanStack Query** (без Redux).

## 📂 Архитектура проекта

Проект разбит на слои по принципу однонаправленной зависимости (в духе Feature-Sliced Design):

* `shared/` - инфраструктура: ApiClient, базовые UI-компоненты (Tailwind v4), кастомные классы ошибок.
* `entities/` - предметная область: типы, статусы, правила переходов (State Machine).
* `features/` - бизнес-сценарии (Use Cases), DTO-схемы, хуки для мутаций.
* `widgets/` - сборка логики и UI (например, Kanban-доска этапов).
* `pages/` - экраны и роутинг.

## 🧪 Тестирование
Ядро приложения покрыто Unit-тестами с помощью **Vitest**.
Тесты проверяют логику переходов стейт-машины, систему прав доступа и работу Use-кейсов (через моки сервисов `vi.mock` и проверку асинхронных вызовов).

## 🗺 Roadmap

- [x] **Phase 1 (MVP):** Проектирование TS-ядра, тесты, внедрение MSW, базовая сборка UI на Tailwind, деплой.
- [ ] **Phase 2:** Добавление Zustand для глобального стейта авторизации и защита роутов (Protected Routes).
- [ ] **Phase 3:** Drag-and-Drop для доски и имитация загрузки физических файлов.
- [ ] **Phase 4:** Переход с MSW на реальное REST API.

---

## 🚀 Запуск локально

```bash
git clone https://github.com/shchennikovd/thesis-flow
cd thesis-flow
npm install
npm run dev
```
*(Для запуска тестов используйте `npm run test`)*
