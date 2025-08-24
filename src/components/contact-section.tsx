import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Get In Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              We are here to assist you with all your luxury real estate needs. Contact us today.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-5">
          <div className="flex flex-col justify-start space-y-6 lg:col-span-2">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-accent/20 p-3">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-headline">Our Office</h3>
                <p className="text-muted-foreground font-body">123 Luxury Lane, Beverly Hills, CA 90210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-accent/20 p-3">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-headline">Email Us</h3>
                <p className="text-muted-foreground font-body">inquiries@dominionestates.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-accent/20 p-3">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-headline">Call Us</h3>
                <p className="text-muted-foreground font-body">+1 (310) 555-0123</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" rows={5} />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Submit</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-16">
          <Image
            src="https://placehold.co/1200x400.png"
            alt="Map showing office location"
            data-ai-hint="city map"
            width={1200}
            height={400}
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
