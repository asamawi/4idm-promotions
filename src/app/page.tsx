import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="text-center py-10 px-4 border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          4IDM
        </h1>
        <p className="mt-2 text-lg text-white/60">عروض ترويجية احترافية</p>
      </header>

      <main className="flex-1">
        <Gallery />
      </main>

      <footer className="text-center py-6 text-white/30 text-sm border-t border-white/10">
        © {new Date().getFullYear()} 4IDM — جميع الحقوق محفوظة
      </footer>
    </div>
  );
}
