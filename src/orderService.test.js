const { calculateTotal } = require('./orderService');

describe('Order Service Validation', () => {
  test('debe calcular el total con el 15% de impuesto por defecto', () => {
    const items = [{ price: 10 }, { price: 20 }];
    expect(calculateTotal(items)).toBe(34.5);
  });

  test('debe calcular el total con una tasa de impuesto personalizada', () => {
    const items = [{ price: 100 }];
    expect(calculateTotal(items, 0.12)).toBe(112);
  });

  test('debe lanzar TypeError si items no es un array', () => {
    expect(() => calculateTotal(null)).toThrow(TypeError);
  });
});