import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'The Chen Family',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'asian family portrait',
    quote: "Unique Properties handled our investment with utmost professionalism. Their market knowledge of Lagos is second to none."
  },
  {
    name: 'Mr. Sterling',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'businessman portrait',
    quote: "As an international investor, I rely on their team for sound advice and seamless transactions. They have never disappointed."
  },
  {
    name: 'Dr. Isabella Rossi',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'professional woman portrait',
    quote: "Finding the right investment property felt effortless with their help. The attention to detail and personalized service was remarkable."
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What Our Investors Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Our reputation is built on the trust and success of the clients we serve.
            </p>
          </div>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <Avatar className="w-20 h-20 mb-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="text-lg italic font-body mb-4">"{testimonial.quote}"</p>
                      <cite className="font-bold not-italic font-headline">{testimonial.name}</cite>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
