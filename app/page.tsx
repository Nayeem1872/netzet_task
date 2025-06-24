import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import TopNav from "./components/TopNav";

export default function Home() {
  return (
    <div>
      <TopNav />
      <Nav />
      <main className="max-w-[1180px] mx-auto px-6">
        <HeroSection />
      </main>
    </div>
  );
}
