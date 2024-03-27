import React from "react";
import renderer from "react-test-renderer";
import { ProductTitle } from "../../src/components/ProductTitle";
import { product1 } from '../data/products';
import ProductCard from "../../src/components/ProductCard";



describe("ProductTitle", () => {
    test("Debe mostrar el componente con el titulo personalizado", () => {
        const wrapper = renderer.create(<ProductTitle title="Hola mundo" />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });


    test("Debe mostrar el componente con el titulo del producto", () => {
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <>
                            <ProductTitle />
                        </>
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});