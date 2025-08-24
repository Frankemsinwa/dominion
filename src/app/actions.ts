'use server';

import { z } from 'zod';
import { generatePropertyDescription } from '@/ai/flows/generate-property-description';

const formSchema = z.object({
  propertyType: z.string(),
  location: z.string(),
  bedrooms: z.coerce.number(),
  bathrooms: z.coerce.number(),
  squareFootage: z.coerce.number(),
  amenities: z.string(),
  uniqueFeatures: z.string(),
});

export async function generateListingAction(
  prevState: { message: string, data: { headline: string; description: string } },
  formData: FormData,
) {
  const parsed = formSchema.safeParse({
    propertyType: formData.get('propertyType'),
    location: formData.get('location'),
    bedrooms: formData.get('bedrooms'),
    bathrooms: formData.get('bathrooms'),
    squareFootage: formData.get('squareFootage'),
    amenities: formData.get('amenities'),
    uniqueFeatures: formData.get('uniqueFeatures'),
  });

  if (!parsed.success) {
    return { message: 'Invalid form data', data: prevState.data };
  }

  try {
    const result = await generatePropertyDescription(parsed.data);
    return { message: 'success', data: result };
  } catch (e) {
    console.error(e);
    return { message: 'Failed to generate listing', data: prevState.data };
  }
}
