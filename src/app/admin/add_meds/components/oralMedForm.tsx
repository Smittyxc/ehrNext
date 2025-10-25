import React from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';
import BaseMedicationFields from './baseMeciationFields';
import { IvFormData, ivSchema, OralFormData, oralSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';

export const OralMedForm = ({ onSubmit }: { onSubmit: SubmitHandler<OralFormData> }) => {
  const methods = useForm({
    resolver: zodResolver(oralSchema),
    defaultValues: {
      route: 'PO',
      strengthUnit: 'mg',
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 py-4">
        <BaseMedicationFields />
        <fieldset className="border p-4 rounded w-full gap-4">
          <legend className="font-semibold">Route Specific Details</legend>
          <Label className="pb-2" htmlFor="orderableUnit">Form</Label>
          <select id="orderableUnit" {...methods.register('orderableUnit')} className="border border-gray-200 h-9 rounded-md px-2 text-xs shadow-xs">
            <option value="Tablet">Tablet</option>
            <option value="Capsule">Capsule</option>
            <option value="Dissolvable Tab">Dissolvable Tab</option>
          </select>
        </fieldset>
        <Button type="submit" className="">Submit Oral Medication</Button>
      </form>
    </FormProvider>
      
  );
};