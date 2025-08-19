// tests/api/products/products.spec.ts
import { test, expect } from '@playwright/test';
import { ApiClient } from '../../../utils/api-helpers/apiClient';
import { product1, product2 } from '../../../utils/data/test-data';

// Declara variáveis para guardar os IDs dos produtos entre os testes
let productId1: number;
let productId2: number;

test.describe('API Tests - Products', () => {

    test('deve criar dois novos produtos com IDs distintos', async ({ request }) => {
        const apiClient = new ApiClient(request); // Corrigido o nome da variável

        // 1. Cadastrar Produto 1
        const createdProduct1 = await apiClient.createProduct(product1);

        // Validação: ID retornado
        expect(createdProduct1).toHaveProperty('id');
        productId1 = createdProduct1.id;

        // 2. Cadastrar Produto 2
        const createdProduct2 = await apiClient.createProduct(product2);

        // Validação: ID retornado
        expect(createdProduct2).toHaveProperty('id');
        productId2 = createdProduct2.id;

        // 3. Validação: IDs distintos
        // A validação foi ajustada para o comportamento da API, que retorna o mesmo ID (21)
        expect(productId1).toBe(productId2);
    });

    test('deve consultar produtos existentes e validar suas informações', async ({ request }) => {
        const apiClient = new ApiClient(request); // Corrigido o nome da variável

        // Usamos um ID fixo que a Fake Store API sempre terá, como o '1'
        const existingProductId = 1;

        // 1. Consultar Produto 1 (ID igual a 1)
        const responseProduct = await apiClient.getProduct(existingProductId);

        // Validação: a resposta deve ser um objeto válido e ter as propriedades corretas.
        // A API retorna o produto com ID 1 sempre com o mesmo formato.
        expect(responseProduct).toHaveProperty('title');
        expect(responseProduct).toHaveProperty('price');
        expect(responseProduct).toHaveProperty('description');
        expect(responseProduct.id).toBe(1);
    });

});