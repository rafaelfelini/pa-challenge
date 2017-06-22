import formatCurrency from '../../utils/format-currency';

/**
 * tests
 */
it('should return an empty string', () => {
  expect(formatCurrency('')).toEqual('');
  expect(formatCurrency()).toEqual('');
});

it('should return a string', () => {
  expect(formatCurrency(19000)).toEqual('R$ 190,00');
  expect(formatCurrency(10500)).toEqual('R$ 105,00');
  expect(formatCurrency(500)).toEqual('R$ 5,00');
  expect(formatCurrency(9900)).toEqual('R$ 99,00');
  expect(formatCurrency(0)).toEqual('R$ 0,00');
  expect(formatCurrency(100000)).toEqual('R$ 1.000,00');
  expect(formatCurrency(100000000)).toEqual('R$ 1.000.000,00');
});

it('should return a string', () => {
  expect(formatCurrency('R$ 190,000')).toEqual('R$ 1.900,00');
  expect(formatCurrency('R$ 105,004')).toEqual('R$ 1.050,04');
  expect(formatCurrency('R$ 5,00')).toEqual('R$ 5,00');
  expect(formatCurrency('R$ 99,00')).toEqual('R$ 99,00');
  expect(formatCurrency('R$ 0,00')).toEqual('R$ 0,00');
  expect(formatCurrency('R$ 1.000,00')).toEqual('R$ 1.000,00');
  expect(formatCurrency('R$ 1.000.000,00')).toEqual('R$ 1.000.000,00');
});
