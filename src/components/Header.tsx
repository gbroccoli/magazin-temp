import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Логотип / название магазина */}
        <Link href="/" className="text-xl tracking-widest uppercase font-light">
          Parfum
        </Link>

        {/* Навигация */}
        <nav className="flex gap-8">
          <Link
            href="/"
            className="text-sm tracking-wide text-muted hover:text-foreground"
          >
            Главная
          </Link>
          <Link
            href="/catalog"
            className="text-sm tracking-wide text-muted hover:text-foreground"
          >
            Каталог
          </Link>
        </nav>
      </div>
    </header>
  );
}
