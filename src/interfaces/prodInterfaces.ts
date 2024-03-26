import { ProductImageProps, ProductTitleProps, ProductsButtonsProps } from "../components";
import { ProductCardProps } from "../components/ProductCard";


export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps  {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product;
    maxCount?: number;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps) : JSX.Element;
    Title: ( Props: ProductTitleProps ) => JSX.Element;
    Image: ( Props: ProductImageProps ) => JSX.Element;
    Buttons: ( Props: ProductsButtonsProps ) => JSX.Element;
}


export interface onChangeArgs {
    product: Product;
    count: number;
}


export interface InitialValueProps {
    count?: number;
    maxCount?: number;
}



export interface ProductCardHandlerProps {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: ( value: number ) => void;
    reset: () => void;
}


