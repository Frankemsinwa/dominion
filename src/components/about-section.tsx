import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1701589212546-2a1bcd94c5af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhZnJpY2ElMjByZWFsJTIwZXN0YXRlJTIwYnVpbGRlcnN8ZW58MHx8fHwxNzU2MDYxODk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern office for a property investment company"
              data-ai-hint="elegant real estate office"
              width={600}
              height={800}
              className="rounded-lg object-cover shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Unique Home & Properties</h2>
              <p className="text-primary/80 font-semibold font-headline">Our Story & Mission</p>
            </div>
            <p className="max-w-prose text-foreground/80 md:text-xl/relaxed font-body">
              Founded on the principles of integrity, expertise, and strategic growth, Unique Home & Properties has become a leading name in Lagos property investment. We specialize in identifying high-potential real estate opportunities for our discerning clients.
            </p>
            <p className="max-w-prose text-foreground/80 md:text-xl/relaxed font-body">
              Our mission is to provide a seamless and profitable investment journey, ensuring that every asset we manage is positioned for maximum returns. We believe that smart property investment is the cornerstone of building generational wealth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
