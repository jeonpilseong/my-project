const NUMBER_FORMAT_REGX = /\B(?=(\d{3})+(?!\d))/g

export const useMoneyFormat = () => {
  const MoneyFormat = (value: number) => {
    return value?.toString().replace(NUMBER_FORMAT_REGX, ',')
  }

  return { MoneyFormat }
}
