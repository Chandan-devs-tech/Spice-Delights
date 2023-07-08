import { mealcounter, showCount } from '../src/module/mealCounter.js';

// Replace ;'yourModule' with the actual module path

describe('mealcounter', () => {
  // Mock the fetch function to return a custom response
  const mockFetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({ meals: [{ idMeal: 1 }, { idMeal: 2 }] }),
  }));
  global.fetch = mockFetch;

  afterEach(() => {
    mockFetch.mockClear();
  });

  it('should return the correct number of meals', async () => {
    const count = await mealcounter();
    expect(count).toBe(2);
  });

  it('should make a request to the correct URL', async () => {
    await mealcounter();
    expect(mockFetch).toHaveBeenCalledWith(
      'https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian',
    );
  });
});

describe('showCount', () => {
  it('should update the text content of the specified element', () => {
    document.body.innerHTML = `
      <ul>
        <li class="home-li"></li>
      </ul>
    `;

    const num = 10;
    showCount(num);

    const homeli = document.querySelector('.home-li');
    expect(homeli.textContent).toBe(`(${num})Meals`);
  });
});