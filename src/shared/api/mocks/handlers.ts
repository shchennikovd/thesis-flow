import { http, HttpResponse, delay } from 'msw';
import { endpoints } from '../endpoints';

const BASE_URL = '*/api'; 

let mockStagesDatabase = [
  // Этапы для первой ВКР (workflow-1)
  { id: "stage-1", workflowId: "workflow-1", title: "Глава 1. Теоретическая часть", description: "Обзор литературы", order: 1, status: "approved", deadline: "2026-10-01T00:00:00Z" },
  { id: "stage-2", workflowId: "workflow-1", title: "Глава 2. Практическая реализация", description: "Написание кода", order: 2, status: "in_progress", deadline: "2026-11-01T00:00:00Z" },
  { id: "stage-3", workflowId: "workflow-1", title: "Глава 3. Тестирование и Выводы", order: 3, status: "pending", deadline: null },
  
  // Этапы для второй ВКР (workflow-2)
  { id: "stage-4", workflowId: "workflow-2", title: "Сбор датасета", description: "Собрать данные для нейросети", order: 1, status: "in_progress", deadline: "2026-09-15T00:00:00Z" }
];

const mockThesesDatabase = [
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
];

export const handlers = [
  http.post(`${BASE_URL}${endpoints.auth}/login`, async () => {
    await delay(1000); 
    return HttpResponse.json({
      user: { id: "student-123", name: "Иван Иванов", role: "student" },
      token: "fake-jwt-token"
    });
  }),

  http.get(`${BASE_URL}${endpoints.thesis}`, async () => {
    await delay(800);
    return HttpResponse.json(mockThesesDatabase);
  }),

  http.get(`${BASE_URL}${endpoints.thesis}/:id`, async ({ params }) => {
    await delay(500); 
    const { id } = params; 

    const thesis = mockThesesDatabase.find((t) => t.id === id);

    if (!thesis) {
      return new HttpResponse('Not found', { status: 404 });
    }

    return HttpResponse.json(thesis);
  }),

  http.get(`${BASE_URL}${endpoints.stages}`, async ({ request }) => {
    await delay(600);
    
    const url = new URL(request.url);
    const workflowId = url.searchParams.get("workflowId");

    const filteredStages = mockStagesDatabase.filter(
      (stage) => stage.workflowId === workflowId
    );

    return HttpResponse.json(filteredStages);
  }),

  http.post(`${BASE_URL}${endpoints.stages}/:id/submit`, async ({ params }) => {
    await delay(800);
    
    mockStagesDatabase = mockStagesDatabase.map(stage => 
      stage.id === params.id ? { ...stage, status: "submitted" } : stage
    );

    const updatedStage = mockStagesDatabase.find(stage => stage.id === params.id);

    return HttpResponse.json(updatedStage);
  }),
];