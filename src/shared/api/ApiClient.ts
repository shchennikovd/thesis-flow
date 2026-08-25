import { ApiError } from "../errors/ApiError";

export class ApiClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public setToken(token: string | null) {
    this.token = token;
  }

  private getHeaders(customHeaders?: HeadersInit): HeadersInit {
    const headers: Record<string, string> = {};
  
    // Если у нас есть токен, добавляем его
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }
  
    // Разворачиваем кастомные заголовки (если они были переданы в options)
    // Это нужно, чтобы не затереть другие важные заголовки
    return {
      ...headers,
      ...(customHeaders as Record<string, string>),
    };
  }

  public async get<T>(url: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      ...options,
      headers: this.getHeaders(options.headers),
      method: "GET",
    });

    return this.handleResponse<T>(response);
  }

  public async post<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
    const headers = this.getHeaders({ "Content-Type": "application/json", ...options.headers });

    const response = await fetch(`${this.baseUrl}${url}`, {
      ...options,
      method: "POST",
      headers: headers,
      body: body ? JSON.stringify(body) : undefined,
    });
  
    return this.handleResponse<T>(response);
  }

  public async put<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
    const headers = this.getHeaders({ "Content-Type": "application/json", ...options.headers });

    const response = await fetch(`${this.baseUrl}${url}`, {
      ...options,
      method: "PUT",
      headers: headers,
      body: body ? JSON.stringify(body) : undefined,
    });
  
    return this.handleResponse<T>(response);
  }

  public async patch<T>(url: string, body?: unknown, options: RequestInit = {}): Promise<T> {
    const headers = this.getHeaders({ "Content-Type": "application/json", ...options.headers });

    const response = await fetch(`${this.baseUrl}${url}`, {
      ...options,
      method: "PATCH",
      headers: headers,
      body: body ? JSON.stringify(body) : undefined,
    });
  
    return this.handleResponse<T>(response);
  }

  public async delete<T>(url: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      ...options,
      headers: this.getHeaders(options.headers),
      method: "DELETE",
    });

    return this.handleResponse<T>(response);
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorMessage = await response.text(); 
      
      throw new ApiError(response.status, errorMessage || "Произошла ошибка при выполнении запроса.");
    }

    if (response.status === 204) {
      return {} as T;
    }

    return response.json();
  }

  public async postFormData<T>(url: string, data: FormData, options: RequestInit = {}): Promise<T> {
    const headers = this.getHeaders(options.headers);

    const response = await fetch(`${this.baseUrl}${url}`, {
      ...options,
      method: "POST",
      headers: headers,
      body: data,
    });
  
    return this.handleResponse<T>(response);
  }
}