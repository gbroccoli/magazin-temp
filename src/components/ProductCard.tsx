import Link from "next/link";
import { Product, formatPrice } from "@/data/products";

// Цвета-заглушки для карточек (пока нет реальных фото)
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

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const gradient = placeholderColors[product.id] || "from-gray-100 to-gray-50";

  return (
    <Link href={`/product/${product.id}`} className="group block">
      {/* Картинка-заглушка с градиентом */}
      <div
        className={`aspect-[3/4] rounded-lg bg-gradient-to-br ${gradient} mb-4
          flex items-center justify-center overflow-hidden
          group-hover:shadow-lg`}
      >
        <span className="text-4xl opacity-40 group-hover:scale-110 transition-transform">
          ✦
        </span>
      </div>

      {/* Инфо о товаре */}
      <div className="space-y-1">
        <p className="text-xs text-muted uppercase tracking-wider">
          {product.brand}
        </p>
        <h3 className="font-light text-base">{product.name}</h3>
        <p className="text-sm text-muted">{product.volume} мл</p>
        <p className="text-sm font-medium mt-1">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
