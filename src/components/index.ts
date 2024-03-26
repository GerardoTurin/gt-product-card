//export { default as ProductCard } from './ProductCard';
export * from './ProductImage';
export * from './ProductTitle';
export * from './ProductsButtons';


import { ProductCardHOCProps } from '../interfaces/prodInterfaces';
import  ProductCardHOC  from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductsButtons } from './ProductsButtons';

const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductsButtons
});

export default ProductCard;