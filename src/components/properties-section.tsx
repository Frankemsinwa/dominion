import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const properties = [
  {
    title: 'Oceanfront Villa in Malibu',
    details: '5 Beds | 6 Baths | 7,500 sqft',
    status: 'For Sale',
    image: {
      src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxlc3RhdGV8ZW58MHx8fHwxNzU2MDYyMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      hint: 'luxury villa exterior'
    }
  },
  {
    title: 'Penthouse with City Views',
    details: '3 Beds | 4 Baths | 4,200 sqft',
    status: 'For Sale',
    image: {
      src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxlc3RhdGV8ZW58MHx8fHwxNzU2MDYyMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      hint: 'modern apartment interior'
    }
  },
  {
    title: 'Secluded Mountain Retreat',
    details: '6 Beds | 7 Baths | 9,000 sqft',
    status: 'Sold',
    image: {
      src: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc1NjA2MjEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      hint: 'mountain house architecture'
    }
  },
  {
    title: 'Historic Downtown Mansion',
    details: '7 Beds | 8 Baths | 12,000 sqft',
    status: 'For Sale',
    image: {
      src: 'https://placehold.co/600x400.png',
      hint: 'classic mansion exterior'
    }
  }
]

export function PropertiesSection() {
  return (
    <section id="properties" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Properties</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Explore our curated collection of the finest luxury properties on the market.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {properties.map((property) => (
            <Card key={property.title} className="overflow-hidden transition-all hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={property.image.src}
                  alt={property.title}
                  data-ai-hint={property.image.hint}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl">{property.title}</CardTitle>
                <CardDescription className="font-body text-base mt-2">{property.details}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                 <Badge variant={property.status === 'Sold' ? 'secondary' : 'default'} className={property.status !== 'Sold' ? 'bg-accent text-accent-foreground' : ''}>
                  {property.status}
                </Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
