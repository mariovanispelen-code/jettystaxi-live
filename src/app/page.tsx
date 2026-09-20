import { AchievementTicker } from "@/components/AchievementTicker";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { M5Teaser } from "@/components/M5Teaser";
import { PlatinumPride } from "@/components/PlatinumPride";
import { ReserveCTA } from "@/components/ReserveCTA";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AchievementTicker />
        <PlatinumPride />
        <Services />
        <M5Teaser />
        <ReserveCTA />
      </main>
      <footer className="border-t border-white/10 bg-black px-6 py-10 text-center text-sm text-white/50">
        Thierry&apos;s Taxi · IJmuiden / Haarlem e.o.
      </footer>
    </>
  );
}
