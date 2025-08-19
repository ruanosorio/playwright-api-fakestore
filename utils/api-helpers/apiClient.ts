import { APIRequestContext, request, expect } from "@playwright/test";

export class ApiClient {
  request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createProduct(product: object) {
    const response = await this.request.post("/products", { data: product });
    expect(response.status()).toBe(201); // A API retorna 201 para POSTs
    return response.json();
  }

  async getProduct(id: number) {
    const response = await this.request.get(`/products/${id}`);
    expect(response.status()).toBe(200);
    return response.json();
  }

  async createCart(cart: object) {
    const response = await this.request.post("/carts", { data: cart });
    expect(response.status()).toBe(201); // A API retorna 201 para POSTs
    return response.json();
  }

  async getCart(id: number) {
    const response = await this.request.get(`/carts/${id}`);
    expect(response.status()).toBe(200);
    return response.json();
  }

  async deleteCart(id: number) {
    const response = await this.request.delete(`/carts/${id}`);
    expect(response.status()).toBe(200);
    return response.json();
  }
}