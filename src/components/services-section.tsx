import { Building, Handshake, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Handshake className="h-10 w-10 text-accent" />,
    title: 'Sales & Acquisition',
    description: 'Expert guidance through the process of buying or selling high-value properties, ensuring optimal outcomes for our clients.'
  },
  {
    icon: <Building className="h-10 w-10 text-accent" />,
    title: 'Property Management',
    description: 'Comprehensive management services for luxury estates, providing peace of mind and maintaining the value of your investment.'
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent" />,
    title: 'Real Estate Consulting',
    description: 'Strategic advisory services for real estate investment, development, and portfolio management, backed by market intelligence.'
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Premier Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Delivering excellence in every aspect of luxury real estate.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="text-center">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="font-headline text-2xl pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-base text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
