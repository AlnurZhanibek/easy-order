export default function ProductCard({ imgSrc, name, price }) {
  return (
    <div className="space-y-1">
      <img
        src={imgSrc}
        alt="Food"
        className="w-full h-40 object-cover rounded-md"
      />
      <h2>{name}</h2>
      <p className="text-sm">{price} тг</p>
      <button className="px-4 py-1 rounded-md text-sm text-blue-400 border border-blue-400">Добавить</button>
    </div>
  );
}
