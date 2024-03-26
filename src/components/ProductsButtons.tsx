import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import React from "react";

export interface ProductsButtonsProps {
    className?: string;
    style?: React.CSSProperties;
}



export const ProductsButtons = ({ className, style }: ProductsButtonsProps) => {
    const { counter, increaseBy, maxCount } = useContext( ProductContext );   // Se extraen las funciones del contexto

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount, 
        [counter, maxCount]    
    );

    

    return (
        <div className={ `${ styles.buttonsContainer } ${ className }` } style={ style }>
            <button className={ styles.buttonMinus } onClick={ () => increaseBy( -1 ) }>
                -
            </button>

            <div className={ styles.countLabel }>
                { counter }
            </div>

            <button 
                className={ `${ styles.buttonAdd } ${ isMaxReached() && styles.disabled }` }
                onClick={ () => increaseBy( +1 ) }>
                +
            </button>
        </div>
    )
};