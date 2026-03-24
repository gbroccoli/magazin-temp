import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

// Показываем 4 избранных аромата на главной
const featured = products.slice(0, 4);

export default function Home() {
  return (
    <>
      {/* Герой-баннер */}
      <section className="bg-hero-bg">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
            Коллекция 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Искусство аромата
          </h1>
          <p className="text-muted max-w-md mx-auto mb-8 text-sm leading-relaxed">
            Откройте для себя коллекцию изысканных ароматов, созданных лучшими
            парфюмерами для тех, кто ценит красоту в деталях.
          </p>
          <Link
            href="/catalog"
            className="inline-block border border-foreground px-8 py-3 text-sm tracking-wider uppercase hover:bg-foreground hover:text-background"
          >
            Смотреть каталог
          </Link>
        </div>
      </section>

      {/* Избранные ароматы */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-light">Избранное</h2>
          <Link
            href="/catalog"
            className="text-sm text-muted hover:text-foreground tracking-wide"
          >
            Все ароматы &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Блок «О нас» */}
      <section className="bg-hero-bg">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-light mb-4">Философия Parfum</h2>
          <p className="text-sm text-muted max-w-lg mx-auto leading-relaxed">
            Каждый аромат в нашей коллекции — это история. Мы отбираем только те
            композиции, которые вызывают эмоции и остаются в памяти. Качество
            ингредиентов, внимание к деталям и любовь к парфюмерному искусству —
            вот что нас вдохновляет.
          </p>
        </div>
      </section>
    </>
  );
}
