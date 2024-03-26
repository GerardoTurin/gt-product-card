import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProductCard, {  ProductImage, ProductTitle, ProductsButtons } from '../dist/components';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  //img: coffeeMug
};


const App = () => {
  return (
    <div>
      <ProductCard 
          product={ product } 
          initialValue={{ 
              count: 5, 
              maxCount: 15
          }}>
              {
                  ( { reset, count, increaseBy, isMaxCountReached, maxCount } ) => (
                      <>
                          <ProductImage />
                          <ProductTitle />
                          <ProductsButtons />
                      </>
                  )
              
              }
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
