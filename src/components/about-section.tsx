import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1701589212546-2a1bcd94c5af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhZnJpY2ElMjByZWFsJTIwZXN0YXRlJTIwYnVpbGRlcnN8ZW58MHx8fHwxNzU2MDYxODk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Elegant real estate office interior"
              data-ai-hint="elegant real estate office"
              width={600}
              height={800}
              className="rounded-lg object-cover shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Dominion Global Estate</h2>
              <p className="text-primary/80 font-semibold font-headline">Our Story & Mission</p>
            </div>
            <p className="max-w-prose text-foreground/80 md:text-xl/relaxed font-body">
              Founded on the principles of integrity, expertise, and unparalleled service, Dominion Global Estate has been a beacon in the luxury real estate market for over two decades. We are dedicated to connecting discerning clients with the world's most exceptional properties.
            </p>
            <p className="max-w-prose text-foreground/80 md:text-xl/relaxed font-body">
              Our mission is to provide a seamless and sophisticated experience, ensuring that every transaction is as flawless as the properties we represent. We believe that luxury is not just a price point, but a standard of excellence we uphold in everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
