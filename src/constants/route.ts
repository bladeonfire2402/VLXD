export const RouteManager = {
  HOME: '/',
  PRODUCTS: '/san-pham',
  CONTACT: '/lien-he',
  NEWS: '/tin-tuc',
  
  // Dynamic routes
  productCategory: (category: string) => `/san-pham/${category}`,
  productDetail: (category: string, product: string) => `/san-pham/${category}/${product}`,
};