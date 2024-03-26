import { useEffect, useRef, useState } from "react";
import { InitialValueProps, Product, onChangeArgs } from "../interfaces/prodInterfaces";


interface useProductProps {
    product:Product;
    onChange?: ( args: onChangeArgs) => void;
    value?: number;
    initialValue?: InitialValueProps;
}


const useProduct = ({ onChange, product, value = 0, initialValue }: useProductProps) => {
    const [counter, setCounter] = useState<number>( initialValue?.count || value );
    const isMounted = useRef( false );
    

    const increaseBy = ( value: number ) => {
        const newValue = Math.max( counter + value, 0 );    // Si el valor es negativo, se queda en 0
        const maxCount = initialValue?.maxCount || 0;       // Si no se recibe un valor máximo, se establece en 0

        if ( newValue > maxCount ) return;                  // Si el nuevo valor es mayor al máximo, se detiene

        setCounter( newValue );
        onChange && onChange({ product, count: newValue });
    };



    const reset = () => {
        setCounter( initialValue?.count || value );
    }



    useEffect(() => {
        isMounted.current = true;
    }, []);

    // Actualizar el contador si el valor cambia
    useEffect(() => {

        if ( !isMounted.current ) return;
        setCounter( initialValue?.count || value);
    }, [value, initialValue]);





    return {
        counter,
        increaseBy,
        reset,
        maxCount: initialValue?.maxCount,
        isMaxCountReached: !!initialValue?.maxCount && counter === initialValue.maxCount
    };
};

export default useProduct;