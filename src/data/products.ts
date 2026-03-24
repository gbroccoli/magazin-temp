// Тип данных для одного парфюма
export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  category: "women" | "men" | "unisex";
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  volume: number; // мл
  image: string; // путь к картинке
}

// Все товары — 16 позиций
export const products: Product[] = [
  // ─── Maison Élégance ───
  {
    id: "fleur-noire",
    name: "Fleur Noire",
    brand: "Maison Élégance",
    description:
        "Загадочный вечерний аромат с нотами чёрной розы и бархатного уда. Создан для тех, кто не боится быть в центре внимания.",
    price: 12500,
    category: "women",
    notes: {
      top: ["бергамот", "чёрная смородина"],
      middle: ["чёрная роза", "ирис"],
      base: ["уд", "мускус", "ваниль"],
    },
    volume: 50,
    image: "/images/fleur-noire.jpg",
  },
  {
    id: "velours-rouge",
    name: "Velours Rouge",
    brand: "Maison Élégance",
    description:
        "Роскошный восточный аромат с нотами красного бархата и специй. Для особенных вечеров.",
    price: 18900,
    category: "unisex",
    notes: {
      top: ["шафран", "корица"],
      middle: ["роза", "уд"],
      base: ["янтарь", "ваниль", "мускус"],
    },
    volume: 50,
    image: "/images/velours-rouge.jpg",
  },
  {
    id: "ambre-celeste",
    name: "Ambre Céleste",
    brand: "Maison Élégance",
    description:
        "Тёплый и обволакивающий аромат небесной амбры. Как золотистый закат, застывший во флаконе.",
    price: 14200,
    category: "unisex",
    notes: {
      top: ["бергамот", "розовый перец"],
      middle: ["амбра", "олибанум"],
      base: ["бензоин", "тонка", "кашемировое дерево"],
    },
    volume: 50,
    image: "/images/ambre-celeste.jpg",
  },
  {
    id: "feu-sacre",
    name: "Feu Sacré",
    brand: "Maison Élégance",
    description:
        "Пылающий аромат священного огня. Пряные специи и смолы создают ритуальную глубину.",
    price: 19500,
    category: "unisex",
    notes: {
      top: ["шафран", "чёрный перец"],
      middle: ["ладан", "мирра"],
      base: ["сандал", "опопанакс", "дымная смола"],
    },
    volume: 75,
    image: "/images/feu-sacre.jpg",
  },
  {
    id: "cuir-velours",
    name: "Cuir Velours",
    brand: "Maison Élégance",
    description:
        "Бархатистая кожа, припудренная ирисом. Утончённая элегантность без единого лишнего штриха.",
    price: 16800,
    category: "men",
    notes: {
      top: ["цитрон", "лаванда"],
      middle: ["ирис", "замша"],
      base: ["кожа", "ветивер", "пудровый мускус"],
    },
    volume: 75,
    image: "/images/cuir-velours.jpg",
  },

  // ─── Lumière ───
  {
    id: "soleil-dore",
    name: "Soleil Doré",
    brand: "Lumière",
    description:
        "Солнечный, радостный аромат с нотами цитрусов и жасмина. Как луч солнца в флаконе.",
    price: 7900,
    category: "women",
    notes: {
      top: ["мандарин", "нероли"],
      middle: ["жасмин", "иланг-иланг"],
      base: ["белый мускус", "сандал"],
    },
    volume: 30,
    image: "/images/soleil-dore.jpg",
  },
  {
    id: "nuit-sauvage",
    name: "Nuit Sauvage",
    brand: "Lumière",
    description:
        "Дерзкий и притягательный аромат для смелых натур. Пряные ноты переплетаются с кожей и дымом.",
    price: 15200,
    category: "men",
    notes: {
      top: ["чёрный перец", "кардамон"],
      middle: ["кожа", "табак"],
      base: ["пачули", "бензоин", "дымная нота"],
    },
    volume: 75,
    image: "/images/nuit-sauvage.jpg",
  },
  {
    id: "brume-matinale",
    name: "Brume Matinale",
    brand: "Lumière",
    description:
        "Лёгкий утренний аромат с росой и зелёным чаем. Пробуждает и дарит ощущение чистоты.",
    price: 5200,
    category: "unisex",
    notes: {
      top: ["зелёный чай", "роса"],
      middle: ["белый пион", "бамбук"],
      base: ["рисовое молоко", "лёгкий мускус"],
    },
    volume: 30,
    image: "/images/brume-matinale.jpg",
  },
  {
    id: "lune-pale",
    name: "Lune Pâle",
    brand: "Lumière",
    description:
        "Призрачный и невесомый аромат лунного света. Для тихих ночей и задумчивого настроения.",
    price: 8900,
    category: "women",
    notes: {
      top: ["белый чай", "лотос"],
      middle: ["лунный цветок", "белая лилия"],
      base: ["серая амбра", "шёлковый мускус"],
    },
    volume: 30,
    image: "/images/lune-pale.jpg",
  },
  {
    id: "soie-blanche",
    name: "Soie Blanche",
    brand: "Lumière",
    description:
        "Чистый и элегантный аромат белого шёлка. Минимализм, возведённый в абсолют.",
    price: 11300,
    category: "women",
    notes: {
      top: ["груша", "бергамот"],
      middle: ["белый пион", "магнолия"],
      base: ["белый мускус", "кашемир", "рисовая пудра"],
    },
    volume: 50,
    image: "/images/soie-blanche.jpg",
  },
  {
    id: "pluie-douce",
    name: "Pluie Douce",
    brand: "Lumière",
    description:
        "Нежный аромат тёплого летнего дождя. Петричор, озон и мокрые цветы в одном флаконе.",
    price: 7200,
    category: "unisex",
    notes: {
      top: ["озон", "лимонная вербена"],
      middle: ["мокрая фрезия", "фиалка"],
      base: ["петричор", "мягкий мускус", "влажная земля"],
    },
    volume: 50,
    image: "/images/pluie-douce.jpg",
  },

  // ─── Floral House ───
  {
    id: "jardin-secret",
    name: "Jardin Secret",
    brand: "Floral House",
    description:
        "Нежный цветочный аромат, словно прогулка по секретному саду на рассвете.",
    price: 6500,
    category: "women",
    notes: {
      top: ["роза", "пион"],
      middle: ["ландыш", "фрезия"],
      base: ["белый кедр", "мускус"],
    },
    volume: 50,
    image: "/images/jardin-secret.jpg",
  },
  {
    id: "ocean-libre",
    name: "Océan Libre",
    brand: "Floral House",
    description:
        "Свежесть океанского бриза и морской соли. Универсальный аромат для любого настроения.",
    price: 8400,
    category: "unisex",
    notes: {
      top: ["морская соль", "лимон"],
      middle: ["водяная лилия", "морские водоросли"],
      base: ["амбра", "коряга"],
    },
    volume: 100,
    image: "/images/ocean-libre.jpg",
  },
  {
    id: "mousse-tendre",
    name: "Mousse Tendre",
    brand: "Floral House",
    description:
        "Аромат мягкого мха после утреннего дождя. Земляной, зелёный и бесконечно уютный.",
    price: 6800,
    category: "unisex",
    notes: {
      top: ["зелёные листья", "росистая трава"],
      middle: ["мох", "фиалковый лист"],
      base: ["ветивер", "белый кедр", "земляные ноты"],
    },
    volume: 50,
    image: "/images/mousse-tendre.jpg",
  },
  {
    id: "bois-errant",
    name: "Bois Errant",
    brand: "Floral House",
    description:
        "Аромат странствующего дерева — тёплый, сухой и свободный. Для тех, кто ищет свой путь.",
    price: 10400,
    category: "men",
    notes: {
      top: ["элеми", "можжевельник"],
      middle: ["гваяковое дерево", "кипарис"],
      base: ["кедр", "мох", "сухая амбра"],
    },
    volume: 100,
    image: "/images/bois-errant.jpg",
  },

  // ─── Cedre Blanc (отдельно) ───
  {
    id: "cedre-blanc",
    name: "Cèdre Blanc",
    brand: "Maison Élégance",
    description:
        "Свежий и благородный аромат белого кедра. Идеален для повседневной элегантности.",
    price: 9800,
    category: "men",
    notes: {
      top: ["грейпфрут", "мята"],
      middle: ["белый кедр", "лаванда"],
      base: ["ветивер", "амбра"],
    },
    volume: 100,
    image: "/images/cedre-blanc.jpg",
  },
];

// Вспомогательные функции
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getProductsByBrand(brand: string): Product[] {
  if (brand === "all") return products;
  return products.filter((p) => p.brand === brand);
}

export function getAllCategories(): Product["category"][] {
  return [...new Set(products.map((p) => p.category))];
}

export function getAllBrands(): string[] {
  return [...new Set(products.map((p) => p.brand))];
}

export function formatPrice(price: number): string {
  return price.toLocaleString("ru-RU") + " ₽";
}