
/**
 * @file buttonRandomize.test.js
 * @description Pruebas para el botón Randomize y su integración con el botón Heart usando Vitest y @testing-library/dom.
 */

import { describe, it, beforeAll, beforeEach, expect, vi } from 'vitest';
// Exponemos expect para que jest-dom pueda hacer expect.extend(...)
globalThis.expect = expect;

import { fireEvent, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { getData } from './api.js';
import { updateFact } from './function.js';
import { addFavorite, initializeFavorites } from './fav.js';

// Configuramos un DOM mínimo
beforeAll(() => {
  document.body.innerHTML = `
    <button class="buttonRandomize">Randomize</button>
    <button class="buttonHeart">♥</button>
    <div class="fact"></div>
  `;
  initializeFavorites();
});

// Mocks de las dependencias
vi.mock('./api.js', () => ({
  getData: vi.fn(),
}));
vi.mock('./function.js', () => ({
  updateFact: vi.fn(),
}));
vi.mock('./fav.js', () => ({
  addFavorite: vi.fn(),
  initializeFavorites: vi.fn(),
}));

// Importamos el script principal que registra los event listeners
import './main.js';

describe('Interacción con botones Randomize y Heart', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Click en Randomize: debe llamar a getData y actualizar el hecho', async () => {
    const fakeFact = 'Hecho curioso de prueba';
    getData.mockResolvedValue(fakeFact);

    const randomBtn = document.querySelector('.buttonRandomize');
    fireEvent.click(randomBtn);

    await waitFor(() => {
      expect(getData).toHaveBeenCalledTimes(1);
      expect(updateFact).toHaveBeenCalledWith(fakeFact);
    });
  });

  it('Click en Heart tras Randomize: debe añadir currentFact a favoritos', async () => {
    const fakeFact = 'Otro hecho aleatorio';
    getData.mockResolvedValue(fakeFact);

    const randomBtn = document.querySelector('.buttonRandomize');
    fireEvent.click(randomBtn);

    await waitFor(() => {
      expect(updateFact).toHaveBeenCalledWith(fakeFact);
    });

    const heartBtn = document.querySelector('.buttonHeart');
    fireEvent.click(heartBtn);

    expect(addFavorite).toHaveBeenCalledWith(fakeFact);
  });
});
