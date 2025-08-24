import Link from 'next/link';
import { Building, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Building className="h-6 w-6" />
          <span className="font-bold text-lg font-headline">Dominion Global Estate</span>
        </div>
        <p className="text-sm text-primary-foreground/80 font-body">
          © {new Date().getFullYear()} Dominion Global Estate. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 transition-colors hover:text-accent" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 transition-colors hover:text-accent" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5 transition-colors hover:text-accent" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
