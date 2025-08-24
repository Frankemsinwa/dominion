"use client";

import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateListingAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles } from "lucide-react";

const formSchema = z.object({
  propertyType: z.string().min(1, "Property type is required."),
  location: z.string().min(1, "Location is required."),
  bedrooms: z.coerce.number().min(0, "Bedrooms must be a positive number."),
  bathrooms: z.coerce.number().min(0, "Bathrooms must be a positive number."),
  squareFootage: z.coerce.number().min(1, "Square footage is required."),
  amenities: z.string().min(1, "Please list some amenities."),
  uniqueFeatures: z.string().min(1, "Please list unique features."),
});

type FormData = z.infer<typeof formSchema>;

const initialState = {
  message: "",
  data: { headline: "", description: "" },
};

export function AiAssistant() {
  const [state, formAction] = useFormState(generateListingAction, initialState);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyType: "",
      location: "",
      bedrooms: 3,
      bathrooms: 2,
      squareFootage: 2000,
      amenities: "Gourmet kitchen, swimming pool, home theater",
      uniqueFeatures: "Ocean views, private rooftop terrace",
    },
  });

  return (
    <section id="ai-assistant" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">AI-Powered Listing Assistant</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                Effortlessly craft compelling property listings. Our AI assistant helps you generate professional headlines and descriptions in seconds.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Enter Property Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form action={formAction} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="propertyType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Property Type</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Luxury Villa" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Malibu, California" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-3 gap-4">
                       <FormField
                        control={form.control}
                        name="bedrooms"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bedrooms</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="bathrooms"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bathrooms</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="squareFootage"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sq. Ft.</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                     <FormField
                      control={form.control}
                      name="amenities"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Amenities</FormLabel>
                          <FormControl>
                            <Textarea placeholder="e.g., Pool, Spa, Gym" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="uniqueFeatures"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unique Features</FormLabel>
                          <FormControl>
                            <Textarea placeholder="e.g., Ocean view, Rooftop deck" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <SubmitButton />
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-4">
            <Card className="min-h-[300px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <Sparkles className="text-accent" />
                  Generated Headline
                </CardTitle>
              </CardHeader>
              <CardContent>
                {state.data?.headline ? (
                  <p className="text-2xl font-bold font-headline">{state.data.headline}</p>
                ) : <p className="text-muted-foreground">Your catchy headline will appear here.</p>}
              </CardContent>
            </Card>
            <Card className="min-h-[300px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <Sparkles className="text-accent" />
                  Generated Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                {state.data?.description ? (
                  <p className="whitespace-pre-wrap font-body">{state.data.description}</p>
                ) : <p className="text-muted-foreground">Your detailed property description will appear here.</p>}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function SubmitButton() {
  const { pending } = useFormState();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? <Loader2 className="animate-spin" /> : "Generate Listing"}
    </Button>
  )
}
