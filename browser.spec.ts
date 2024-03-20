import { test, expect } from '@playwright/test';

test('Teste de navegação e envio do formulário', async ({ page }) => {
  // Navega até a página inicial
  await page.goto('http://localhost:5173');

  // Verifica se o formulário está visível
  expect(await page.isVisible('form')).toBeTruthy();

  // Preenche o formulário
  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="phone"]', '123-456-7890');
  await page.fill('input[name="email"]', 'john@example.com');

  // Clica no botão "Iniciar Desafio"
  await page.click('button');

  // Verifica se o modal de "Desafio finalizado com falha!" é exibido após 15 segundos
  await page.waitForSelector('.modal-overlay');
  expect(await page.isVisible('.modal-container')).toBeTruthy();

  // Clica no botão "Enviar" dentro do prazo de 15 segundos
  await page.click('button:text("Iniciar Desafio")');

  // Verifica se o modal de "Desafio finalizado com sucesso!" é exibido
  expect(await page.isVisible('.modal-container')).toBeTruthy();

  // Navega até a página do candidato
  await page.click('a:text("Ver dados do candidato")');
  expect(await page.isVisible('h1:text("Dados do Candidato")')).toBeTruthy();

  // Volta para a página inicial
  await page.goBack();
  expect(await page.isVisible('h1:text("Formulário")')).toBeTruthy();
});
