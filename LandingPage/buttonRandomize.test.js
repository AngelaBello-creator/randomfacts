/**
 * @vitest-environment jsdom
 */

import { describe, it, beforeEach, expect, vi } from 'vitest';

import { getData } from '../LandingPage/api.js';
import { updateFact } from '../LandingPage/function.js';

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



let cleanupLanding;
beforeEach(async () => {

  vi.resetModules();

  document.body.innerHTML = `
    <button class="buttonRandomize"></button>
    <button class="buttonHeart"></button>
  `;

  
  await import('../LandingPage/landing.js');
});

describe('Botón Randomize', () => {
  it('llama a getData y updateFact al hacer click', async () => {
    getData.mockResolvedValue('Hecho de prueba');


    document.querySelector('.buttonRandomize').click();

    await Promise.resolve();

    expect(getData).toHaveBeenCalled();
    expect(updateFact).toHaveBeenCalledWith('Hecho de prueba');
  });
});

