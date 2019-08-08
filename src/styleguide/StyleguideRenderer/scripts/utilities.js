const BRAND_NAMES = {
  bos: 'Bank of Scotland',
  halifax: 'Halifax',
  lloyds: 'Lloyds',
  mbna: 'MBNA'
};

export const formatBrandName = (brand) => {
  return BRAND_NAMES[brand];
}