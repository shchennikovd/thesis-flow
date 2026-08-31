import { http, HttpResponse, delay } from 'msw';
import { endpoints } from '../endpoints';
import { ID } from '../../types/common';

const BASE_URL = 'http://localhost:3000/api';

export const handlers = [
  http.post(`${BASE_URL}${endpoints.auth}/login`, async () => {
    await delay(1000); 

    return HttpResponse.json({
      user: {
        id: "student-123" as ID,
        name: "Иван Иванов",
        email: "student@university.edu",
        role: "student",
        createdAt: new Date().toISOString(),
      },
      token: "fake-jwt-token-12345"
    });
  }),

  http.get(`${BASE_URL}${endpoints.thesis}`, async () => {
    await delay(800);

    return HttpResponse.json([
      {
        id: "thesis-1",
        title: "Разработка системы контроля сдачи ВКР",
        description: "Веб-приложение на React и TypeScript",
        studentId: "student-123",
        supervisorId: "supervisor-456",
        workflowId: "workflow-1",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "thesis-2",
        title: "Анализ алгоритмов машинного обучения",
        studentId: "student-123",
        supervisorId: "supervisor-789",
        workflowId: "workflow-2",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ]);
  }),

  http.get(`${BASE_URL}${endpoints.thesis}/:id`, async ({ params }) => {
    await delay(500); 
    const { id } = params;

    return HttpResponse.json({
      id: id,
      title: "Разработка системы контроля сдачи ВКР",
      description: "Веб-приложение на React и TypeScript",
      studentId: "student-123",
      supervisorId: "supervisor-456",
      workflowId: "workflow-1",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }),
];