export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* О магазине */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-3">Parfum</h3>
            <p className="text-sm text-muted max-w-xs">
              Коллекция изысканных ароматов для тех, кто ценит красоту в деталях.
            </p>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-3">Контакты</h3>
            <div className="text-sm text-muted space-y-1">
              <p>info@parfum.ru</p>
              <p>+7 (999) 123-45-67</p>
              <p>Москва, ул. Примерная, 1</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Parfum. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
