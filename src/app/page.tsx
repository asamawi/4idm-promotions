import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="text-center py-10 px-4 border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          عروض اليوم الوطني
        </h1>
      </header>

      <main className="flex-1">
        <Gallery />
      </main>
    </div>
  );
}
