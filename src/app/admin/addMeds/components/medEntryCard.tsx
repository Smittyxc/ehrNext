import { format } from "date-fns";
import { medActionSelections, type AllMedicationTypes, type MedAdministrationInstance, type MedicationOrder } from '@/app/simulation/[sessionId]/chart/mar/components/marData'
import MedAdminCardSelector from '@/app/simulation/[sessionId]/chart/mar/components/medAdminCardSelector' 
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { renderMedTitleRow, renderMedCardDetails, isSlidingScaleInsulin } from "@/app/simulation/[sessionId]/chart/mar/components/marHelpers";

// interface MedEntryCardProps {
//   medication: AllMedicationTypes;
//   order: MedicationOrder;
//   sessionStartTime: number;
//   realWorldNow: Date;
//   onStatusChange: (status: string) => void;
//   currentStatus: string
//   onDoseChange: (administeredDose: Number) => void;
//   currentDose: number
// }


const MedEntryCard = () => {

  // const handleStatusChange = (newStatus: string) => {
  //   onStatusChange(newStatus)
  // }
  // const handleDoseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value
  //   if (value === '' || /^[0-9]*$/.test(value)) {
  //     onDoseChange(Number(e.target.value))
  //   }
  // } 
  const medication: AllMedicationTypes = {
    id: "medNormalSaline09Iv",              // links to order
    genericName: "normal saline 0.9%",
    route: "IV", 
    strength: 1000,
    strengthUnit: "mL",
    orderableUnit: "Bag",           
    availableDosages: [500, 1000], 
    administrationFrequencies: ["Q6H", "Q8H"], 
    infusionRate: 100, 
    infusionRateUnit: 'mL/hr', 
    totalVolume: 1000, 
    infusionDurationHours: 10, 
    isContinuous: true, 
  }

  const order: MedicationOrder = {
    id: "orderNormalSaline09",
    medicationId: "medNormalSaline09Iv", 
    unitsOrdered: 1,
    frequency: "Continuous",
    priority: "Routine",
    indication: "IV Fluids",
    status: "active",
    orderingProvider: 'dr'
  }

  
  const isSlidingScaleInsulinMed = isSlidingScaleInsulin(medication)

  return (
    <div className="border bg-white rounded-2xl w-full p-0 overflow-hidden flex-shrink-0">
      <div className="grid grid-cols-2">
        <div className=" flex flex-col justify-between py-3 pl-6 space-y-4">  
          <div className="space-y-1">
            <div className="flex gap-2">
              <Input placeholder="genericName"/>
              <Input placeholder="brandname"/>
            </div>
            

            <div className="text-xs tracking-tight pb-2 text-gray-500">
              {renderMedCardDetails(medication, order)}
            </div>
          </div>

          <div>
            {order.instructions && 
              <div className="">
                <h2 className="font-light">Administration Instructions:</h2>
                <p className="pl-2 text-xs font-light text-gray-700">
                  {order.instructions}
                </p>
              </div>
            }
          </div>

          {(isSlidingScaleInsulinMed) && (
            <div className="overflow-hidden rounded-lg border w-fit">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      BG Range (mg/dL)
                    </th>
                    <th scope="col" className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Correction Units
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {/* {medication.bgDosing.map((dose, index) => (
                    <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                      <td className="whitespace-nowrap px-2 py-1 text-xs text-gray-800 font-mono">{dose.bgRange}</td>
                      <td className="whitespace-nowrap px-2 py-1 text-xs text-gray-800 font-mono">{dose.units}</td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
          )}

          <div>
            <h2 className="font-light pb-1">Previous Administrations:</h2>
            <div className="flex gap-4 pl-2">
              
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-3 py-4 px-2 gap-y-2">
          <MedAdminCardSelector 
            options={medActionSelections}
            // value={currentStatus}
            // onValueChange={handleStatusChange} 
            label="Action"
          />
          <div className="w-full space-y-1">
            <Label>Route</Label>
            <p className="text-sm w-fit border px-3 py-2 rounded-lg shadow-xs">
              {medication.route}
            </p>
          </div>
          <div className="w-full space-y-1">
            <Label>Dose</Label>
            <div className="flex items-end">
              <Input  onChange={(e) => handleDoseChange(e)} value={currentDose} className="text-sm w-16 border px-3 py-2 rounded-r-none shadow-xs focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-gray-200" />
              <div className="h-9 bg-gray-50 border border-l-0 rounded-r-xl border-gray-200 p-2 shadow-xs">
                <p className="text-sm">{medication.strengthUnit}</p>
              </div>
            </div> 
          </div>
          {medication.route === "IV" &&
            <div className="w-full space-y-1">
              <Label>Rate</Label>
              <p className="text-sm w-fit border px-3 py-2 rounded-lg shadow-xs">
                {`${medication.infusionRate}${medication.infusionRateUnit}`}
              </p>
            </div>
          }
          <div className="w-full space-y-1">
            <Label>Date</Label>
            <p className="text-sm w-fit border px-3 py-2 rounded-lg shadow-xs">
              {format(sessionStartTime, 'P')}
            </p>
          </div>
          <div className="w-full space-y-1">
            <Label>Time</Label>
            <p className="text-sm w-fit border px-3 py-2 rounded-lg shadow-xs">
              {format(realWorldNow, 'HHmm')}
            </p>
          </div>
          <div className="w-full space-y-1">
            <Label>Comments</Label>
            <Input className="text-sm w-full" />
          </div> */}
        </div>      
      </div>
  )
}

export default MedEntryCard