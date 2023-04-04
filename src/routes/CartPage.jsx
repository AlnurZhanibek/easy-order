import { Link } from 'react-router-dom';

export default function CartPage() {
  return (
    <>
      <nav className="fixed w-full h-12 p-2 bg-white flex justify-center border-b">
        <Link
          className="
            absolute top-3 left-2
            text-sm text-blue-400 underline
          "
          to="/"
        >
          Назад
        </Link>
        <h1 className="text-xl font-semibold">Корзина</h1>
      </nav>
      <div className="pt-12 pb-4">
        <ul className="divide-y p-2">
            <li className="flex justify-between items-center p-2">
              <p>Котлеты из фарша в панировочных сухарях</p>
              <p>2300 тг</p>
            </li>
        </ul>
        <div
          className="
            flex justify-between items-center p-4
            text-lg font-semibold  
          "
        >
          <p>Итого:</p>
          <p>2300 тг</p>
        </div>
        <div className="p-4">
          <button
            className="p-2 bg-green-400 rounded-md text-xl text-white font-semibold text-center w-full"
          >
            Оплатить
          </button>
        </div>
      </div>
    </>
  );
}
