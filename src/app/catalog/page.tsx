"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categories = [
  { value: "all", label: "Все" },
  { value: "women", label: "Для неё" },
  { value: "men", label: "Для него" },
  { value: "unisex", label: "Унисекс" },
];

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Заголовок */}
      <h1 className="text-3xl font-light mb-2">Каталог</h1>
      <p className="text-sm text-muted mb-10">
        {products.length} ароматов в коллекции
      </p>

      {/* Фильтры */}
      <div className="flex gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`text-sm px-4 py-2 border rounded-full transition-colors ${
              activeCategory === cat.value
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted hover:border-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Сетка товаров */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted py-20">
          В этой категории пока нет ароматов
        </p>
      )}
    </div>
  );
}
