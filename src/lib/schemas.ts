import { z } from 'zod';

export const baseMedicationSchema = z.object({
  genericName: z.string().min(1, 'Generic name is required'),
  brandName: z.string().optional(),
  strength: z.coerce.number().positive('Strength must be a positive number'),
  strengthUnit: z.string().min(1, 'Strength unit is required'),
});

export const oralSchema = baseMedicationSchema.extend({
  route: z.literal('PO'), 
  orderableUnit: z.string().min(1, 'Orderable unit is required'),
});

export const ivSchema = baseMedicationSchema.extend({
  route: z.literal('IV'),
  orderableUnit: z.string().min(1, 'Orderable unit is required'),
  infusionRate: z.coerce.number("Infusion rate must be numeric").optional(),
  infusionRateUnit: z.enum(["mL/hr", "mg/hr", "units/hr"]).optional(),
  diluent: z.string().optional(),
  totalVolume: z.coerce.number().positive().optional(),
  infusionDurationHours: z.coerce.number().positive().optional(),
  isContinuous: z.boolean().default(false),
});


export type IvFormData = z.infer<typeof ivSchema>;
export type OralFormData = z.infer<typeof oralSchema>;
