import Product from './Product/Product';
import products from '@/data/products.json';
import { Product as ProductType } from '@/types';

export default function ProductList() {
  return (
    <ul className={''}>
      {products.map(({ id }: ProductType) => (
        <Product key={id} />
      ))}
    </ul>
  );
}
