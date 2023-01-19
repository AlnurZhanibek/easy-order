import { Link } from 'react-router-dom';

import ProductCard from '../components/ProductCard';

export default function HomePage() {
  return (
    <>
      <nav className="fixed w-full h-12 p-2 bg-white flex justify-center border-b">
        <h1 className="text-xl font-semibold">Easy Order</h1>
        <Link
          className="
            absolute top-3 right-2
            text-sm text-blue-400 underline
          "
          to="/cart"
        >
          Корзина
        </Link>
      </nav>
      <div className="pt-16 p-4 grid grid-cols-2 gap-x-2 gap-y-4">
        {Array(10).fill(null).map((_, i) => <ProductCard key={i} />)}
      </div>
    </>
  );
}
