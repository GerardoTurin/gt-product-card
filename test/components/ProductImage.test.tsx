import React from "react";
import renderer from "react-test-renderer";
import { product2 } from '../data/products';
import ProductCard from "../../src/components/ProductCard";
import { ProductImage } from "../../src/components";



describe("ProductImage", () => {
    test("Debe mostrar el componente con la imagen personalizado", () => {
        const wrapper = renderer.create(<ProductImage img="https://via.placeholder.com/150" />);

        //console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    });


    test("Debe mostrar el componente con la imagen del producto", () => {
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <>
                            <ProductImage />
                        </>
                    )
                }
            </ProductCard>
        );
        
        //console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});