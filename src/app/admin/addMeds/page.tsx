import { Input } from "@/components/ui/input"
import MedEntryCard from "./components/medEntryCard"
import { MedSelect } from "./components/medSelect"
import { Label } from "@/components/ui/label"
import { AllMedicationTypes } from "@/app/simulation/[sessionId]/chart/mar/components/marData"
import { useState } from "react"

const medTypes = [
  { label: 'Continous IV Fluids', value: 'Continous IV Fluids' },
  { label: 'Sliding Scale Insulin', value: 'Sliding Scale Insulin' },
  { label: 'IV Medication in Diluent', value: 'IV Medication in Diluent' },
  { label: 'Oral', value: 'Oral' },
]


const renderForm = (medType: string) => {
  switch (medType) {
    case 'PO':
      return (
        <div>
          <select name="form">
            <option value='mg'>mg</option>
            <option value='g'>g</option>
            <option value='mcg'>mcg</option>
          </select>
        </div>
      )
  }
}

const MedicationEntry = () => {
  const [formData, setFormData] = useState<Partial<AllMedicationTypes>>({route: 'PO'})
  const [route, setRoute] = useState('PO')
  
  const handleRouteChange = (value: string) => {
    setRoute(value)
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }


  return (
    <div className="w-full ">
      <MedSelect data={medTypes} placeholder="Select med route" label="Routes" value={route} onChange={handleRouteChange}/>
      <form className="grid grid-cols-4">
        <div>
          <Label>Generic Name</Label>
          <Input   />  
        </div>
        <Label>Generic Name</Label>
        <Input />
        <Input />
        <Input />
        <Input />

      </form>
      <MedEntryCard />

    </div>
  )
}

export default MedicationEntry