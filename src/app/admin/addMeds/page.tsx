'use client'
import { AllMedicationTypes } from "@/app/simulation/[sessionId]/chart/mar/components/marData"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { OralMedForm } from "./components/oralMedForm"
import { IvMedForm } from "./components/ivMedForm"
import { IvFormData, OralFormData } from "@/lib/schemas"

const medTypes = [
  { label: 'Continous IV Fluids', value: 'Continous IV Fluids' },
  { label: 'Sliding Scale Insulin', value: 'Sliding Scale Insulin' },
  { label: 'IV Medication in Diluent', value: 'IV Medication in Diluent' },
  { label: 'Oral', value: 'Oral' },
]


const MedicationEntry = () => {
  const [route, setRoute] = useState('')
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRoute(event.target.value)
  }
  const onCreateMed = (data: IvFormData | OralFormData) => {
    console.log(data)
  }


  return (
    <div className="w-full p-4">
      <Label htmlFor="route" className='text-sm pb-1'>Route</Label>
      <select id="route" value={route} onChange={handleSelect} className="border border-gray-200 h-9 rounded-md px-2 shadow-xs  text-xs">
        <option value="" selected hidden disabled>Select route...</option>
        <option value="PO">Oral (PO)</option>
        <option value="IV">Intravenous (IV)</option>
        <option value="SC">Subcutaneous (SC)</option>
        <option value="IM">Intramuscular (IM)</option>
      </select>
      {route === 'PO' && <OralMedForm onSubmit={onCreateMed} />}
      {route === 'IV' && <IvMedForm onSubmit={onCreateMed} />}

    </div>
  )
}

export default MedicationEntry