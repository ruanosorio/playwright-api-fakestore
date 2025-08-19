// tests/api/carts/carts.spec.ts
import { test, expect } from '@playwright/test';
import { ApiClient } from '../../../utils/api-helpers/apiClient';

// IDs dos produtos criados no teste anterior
const createdProductId1 = 1;
const createdProductId2 = 2;
let cartId = 1;

test.describe('API Tests - Carts', () => {

    test('deve criar um carrinho com os produtos', async ({ request }) => {
        const apiClient = new ApiClient(request);

        const cartPayload = {
            userId: 5,
            date: "2025-06-03",
            products: [
                { productId: createdProductId1, quantity: 2 },
                { productId: createdProductId2, quantity: 1 }
            ]
        };

        const createdCart = await apiClient.createCart(cartPayload);

        // Validação: ID do carrinho retornado
        expect(createdCart).toHaveProperty('id');
        cartId = createdCart.id;

        // Validação: Carrinho criado com produtos e quantidades corretas
        expect(createdCart.products).toHaveLength(2);
        expect(createdCart.products[0].productId).toBe(createdProductId1);
        expect(createdCart.products[0].quantity).toBe(2);
        expect(createdCart.products[1].productId).toBe(createdProductId2);
        expect(createdCart.products[1].quantity).toBe(1);
    });

    test('deve consultar carrinho e validar itens', async ({ request }) => {

        const apiClient = new ApiClient(request);
        const retrievedCart = await apiClient.getCart(cartId);

        // Validação: ID do carrinho está correto
        expect(retrievedCart.id).toBe(cartId);

        // Validação: Quantidade e IDs dos produtos
        expect(retrievedCart.products).toHaveLength(3);
        expect(retrievedCart.products[0].productId).toBe(createdProductId1);
        expect(retrievedCart.products[0].quantity).toBe(4);
        expect(retrievedCart.products[1].productId).toBe(createdProductId2);
        expect(retrievedCart.products[1].quantity).toBe(1);
    });

    test('deve remover carrinho (simulação)', async ({ request }) => {
        // Logica de simulação de remoção de item do carrinho

        const apiClient = new ApiClient(request);
        const deletedCart = await apiClient.deleteCart(cartId);

        // Validação: O body da resposta corresponde ao carrinho que deveria ter sido removido
        expect(deletedCart.id).toBe(cartId);
    });

});