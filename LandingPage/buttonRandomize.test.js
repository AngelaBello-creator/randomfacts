/**
 * @vitest-environment jsdom
 */

import { describe, it, beforeEach, expect, vi } from 'vitest';

// Mockea los módulos importados ANTES de importar landing.js
vi.mock('../LandingPage/api.js', () => ({
  getData: vi.fn(),
}));
vi.mock('../LandingPage/function.js', () => ({
  updateFact: vi.fn(),
}));
vi.mock('../LandingPage/fav.js', () => ({
  initializeFavorites: vi.fn(),
  addFavorite: vi.fn(),
}));

// Importa los mocks para espiar después
import { getData } from '../LandingPage/api.js';
import { updateFact } from '../LandingPage/function.js';

let cleanupLanding;
beforeEach(async () => {
  // Limpia el caché de módulos para que los mocks se usen
  vi.resetModules();

  // Crea los botones que landing.js espera encontrar
  document.body.innerHTML = `
    <button class="buttonRandomize"></button>
    <button class="buttonHeart"></button>
  `;

  // IMPORTA landing.js DESPUÉS de todo lo anterior y usando await import (import dinámico)
  await import('../LandingPage/landing.js');
});

describe('Botón Randomize', () => {
  it('llama a getData y updateFact al hacer click', async () => {
    getData.mockResolvedValue('Hecho de prueba');

    // Click en el botón
    document.querySelector('.buttonRandomize').click();

    // Espera al siguiente microtask para que se procese el async
    await Promise.resolve();

    // Comprobaciones
    expect(getData).toHaveBeenCalled();
    expect(updateFact).toHaveBeenCalledWith('Hecho de prueba');
  });
});

