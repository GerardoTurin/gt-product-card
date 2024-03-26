# GT-Product-Card

Este es un paquete de pruebas de despliegue en NPM.
Es un componente de React que muestra una tarjeta de producto con una imagen, un título, una descripción y un precio.

## Gerardo Turin
## Ejemplo:

```
import React from 'react';
import ProductCard, { ProductImage, ProductTitle, ProductsButtons } from 'gt-product-card';

```

```
  <ProductCard 
      key={ product.id } 
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
```


