import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductById, formatPrice } from "@/data/products";

// Генерируем статические страницы для всех товаров
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Цвета-заглушки (те же что в ProductCard)
const placeholderColors: Record<string, string> = {
  "fleur-noire": "from-purple-200 to-rose-100",
  "cedre-blanc": "from-emerald-100 to-stone-100",
  "soleil-dore": "from-amber-100 to-yellow-50",
  "nuit-sauvage": "from-stone-300 to-zinc-200",
  "jardin-secret": "from-pink-100 to-rose-50",
  "ocean-libre": "from-cyan-100 to-blue-50",
  "velours-rouge": "from-red-200 to-amber-100",
  "brume-matinale": "from-green-50 to-teal-50",
};

const categoryLabels: Record<string, string> = {
  women: "Для неё",
  men: "Для него",
  unisex: "Унисекс",
};

// params в Next.js 16 — это Promise, нужен await
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const gradient = placeholderColors[product.id] || "from-gray-100 to-gray-50";

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Хлебные крошки */}
      <nav className="text-sm text-muted mb-8">
        <Link href="/" className="hover:text-foreground">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <Link href="/catalog" className="hover:text-foreground">
          Каталог
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* Основной контент: картинка + описание */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Картинка-заглушка */}
        <div
          className={`aspect-square rounded-lg bg-gradient-to-br ${gradient}
            flex items-center justify-center`}
        >
          <span className="text-6xl opacity-30">✦</span>
        </div>

        {/* Информация о продукте */}
        <div className="flex flex-col justify-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-2">
            {product.brand}
          </p>
          <h1 className="text-3xl md:text-4xl font-light mb-2">
            {product.name}
          </h1>
          <p className="text-sm text-muted mb-6">
            {categoryLabels[product.category]} &middot; {product.volume} мл
          </p>

          <p className="text-2xl font-light mb-6">
            {formatPrice(product.price)}
          </p>

          <p className="text-sm text-muted leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Ноты аромата */}
          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.2em] uppercase">
              Пирамида аромата
            </h3>

            <div>
              <p className="text-xs text-muted mb-1">Верхние ноты</p>
              <div className="flex gap-2 flex-wrap">
                {product.notes.top.map((note) => (
                  <span
                    key={note}
                    className="text-xs border border-border rounded-full px-3 py-1"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-muted mb-1">Сердце</p>
              <div className="flex gap-2 flex-wrap">
                {product.notes.middle.map((note) => (
                  <span
                    key={note}
                    className="text-xs border border-border rounded-full px-3 py-1"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-muted mb-1">Базовые ноты</p>
              <div className="flex gap-2 flex-wrap">
                {product.notes.base.map((note) => (
                  <span
                    key={note}
                    className="text-xs border border-border rounded-full px-3 py-1"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Кнопка */}
          <button className="mt-8 border border-foreground px-8 py-3 text-sm tracking-wider uppercase hover:bg-foreground hover:text-background w-fit">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
