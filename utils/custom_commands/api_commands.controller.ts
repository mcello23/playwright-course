import { APIRequestContext, request } from '@playwright/test';

class APIController {
  private fakerAPI: APIRequestContext;

  async init() {
    this.fakerAPI = await request.newContext({
      baseURL: 'https://jsonplaceholder.typicode.com/',
    });
  }

  async getUsers() {
    const response = await this.fakerAPI.get('users');
    const responseBody = await response.json();
    return responseBody;
  }

  async postTodos(requestBody: { title: string; completed: boolean }) {
    const response = await this.fakerAPI.post('users/1/todos', {
      data: requestBody,
    });
    return await response.json();
  }
}

export { APIController };
