/**
 * format number as currency
 * @param  {string} symbol [currency symbol] optional
 * @param  {number} value  [number to be converted]
 * @return {string}        [currency]
 */
export default function (rawValue = '') {
  let value = rawValue.toString().replace(/[^0-9]*/g, '');

  if (isNaN(parseFloat(value)) || !isFinite(value)) {
    return '';
  }

  value = value.toString()
  const cents = (value.length === 1 ? '0' : '') + value.slice(-2)
  const money = value.slice(0, -2)
  const formatedValue = parseFloat(`${money}.${cents}`)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+,)/g, '$1.');

  return `R$ ${formatedValue}`;
}
