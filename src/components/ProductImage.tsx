import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImg from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import React from "react";



export interface ProductImageProps {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}


export const ProductImage = ({ img, className, style }: ProductImageProps) => {
    const { product } = useContext( ProductContext );   // Se extrae el producto del contexto
    let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img;
    } else {
        imgToShow = noImg;
    }


    return (
        <img 
            className={ `${ styles.productImg } ${ className }` } style={ style } 
            alt="Product" src={ imgToShow } />
    )
};