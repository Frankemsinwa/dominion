
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="hero" className="relative h-dvh w-full overflow-hidden">
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl font-headline">
          Best Real Estate in Abuja
        </h1>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl md:text-2xl font-body">
          Discover exquisite properties with Dominion Global Estate. Your premier partner for luxury living in Nigeria's capital.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="#properties">Explore Properties</Link>
        </Button>
      </div>
    </section>
  );
}
