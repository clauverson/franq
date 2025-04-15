export function formatCurrency(
  value: number,
  locale = 'pt-BR',
  currency = 'BRL'
) {
  return new Intl.NumberFormat(locale.replace('_', '-'), {
    style: 'currency',
    currency: currency,
  }).format(value)
}

export function formatPoints(value: number) {
  return new Intl.NumberFormat('pt-BR').format(value)
}
