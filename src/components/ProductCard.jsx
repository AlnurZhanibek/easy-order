export default function ProductCard() {
  return (
    <div className="space-y-1">
      <img
        src="https://admin.digarson.ru/storage/2022/10/24/695434eab8cfbeccb9a8c9ced2b66396420b81b4.jpg"
        alt="Food"
        className="w-full h-40 object-cover rounded-md"
      />
      <h2>Блины жяйские</h2>
      <p className="text-sm">100 тг</p>
      <button className="px-4 py-1 rounded-md text-sm text-blue-400 border border-blue-400">Добавить</button>
    </div>
  );
}
