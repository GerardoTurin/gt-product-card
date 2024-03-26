import { createContext } from 'react';
import useProduct from '../hooks/useProduct';
import { InitialValueProps, Product, ProductCardHandlerProps, ProductContextProps, onChangeArgs } from '../interfaces/prodInterfaces';
import styles from '../styles/styles.module.css';
import React from "react";


export interface ProductCardProps {
    product: Product;
    //children?: ReactElement | ReactElement[];    // Se le dice que puede recibir un elemento o varios elementos de React
    children: ( args: ProductCardHandlerProps ) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs) => void;
    value?: number;
    initialValue?: InitialValueProps;
}


export const ProductContext = createContext( {} as ProductContextProps );   // Se crea el contexto con un valor inicial vacio
const { Provider } = ProductContext;    // Se extrae el provider del contexto



const ProductCard = ({ children, product, className, style, onChange, value, initialValue }: ProductCardProps) => {
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValue });


    return (
        <Provider value={{ counter, increaseBy, product, maxCount }}>
            <div className={ `${ styles.productCard } ${ className }` } style={ style }>
                { children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValue?.maxCount,
                    product,
                    increaseBy,
                    reset
                
                }) }
            </div>
        </Provider>
    )
};


export default ProductCard;