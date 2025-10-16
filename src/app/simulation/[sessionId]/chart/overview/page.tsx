import Visitors from "./components/visitors"
import { VitalsOverview } from "./components/vitalsOverview"
import RecurringOrders from "./components/recurringOrders"
import Nutrition from "./components/nutrition"
import ActiveProblems from "./components/activeProblems"
import Alerts from "./components/alerts"
import CareTeam from "./components/careTeam"
import { IntakeOutput } from "./components/intakeOutput"
import { SelectedLabs } from "./components/selectedLabs"
import MarSnapshot from "./components/marSnapshot"
import Demographics from "./components/demographics"

const OverviewPage = () => {
  return (
    <div className="w-full h-[calc(100vh-4rem)] bg-gray-100 pt-4 px-2">
      <div className="overflow-auto h-full px-2 rounded-t-2xl border inset-shadow-sm">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 py-2">
          <Alerts />
          <ActiveProblems />
          <VitalsOverview />
          <RecurringOrders />
          <Visitors />
          <Nutrition />
          <CareTeam />
          <IntakeOutput />
          <SelectedLabs />
          <MarSnapshot />
          <Demographics />
        </div>
      </div>
    </div>
  )
}

export default OverviewPage