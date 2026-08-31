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
];