import React from "react";
import renderer from "react-test-renderer";
import { product1 } from '../data/products';
import ProductCard from "../../src/components/ProductCard";

const { act } = renderer;


describe("ProductCard", () => {
    test("Debe mostrar el componente correctamente", () => {
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <>
                            <div>Contenido del componente</div>
                        </>
                    )
                }
            </ProductCard>
        );

        //console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    });


    test("Debe de incrementar el contador", () => {
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    ( { count, increaseBy } ) => (
                        <>
                            <h1>Product Card</h1>
                            <div>{ count }</div>
                            <button onClick={ () => increaseBy(1) }>
                                +
                            </button>
                        </>
                    )
                }
            </ProductCard>
        );

        let tree = wrapper.toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot();

        act(() => {
            ( tree as any ).children[2].props.onClick();
        });
        

        tree = wrapper.toJSON();
        expect(( tree as any ).children[1].children[0]).toBe('1');
    });

    
});