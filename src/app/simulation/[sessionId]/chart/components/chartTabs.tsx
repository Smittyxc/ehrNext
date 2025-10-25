import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clipboard, NotebookText, Pill, TestTubeDiagonal, User } from "lucide-react";
import MultiPtSelector from "./multiPtSelector";
import Link from "next/link";
import { useParams } from "next/navigation"


export default function ChartTabs() {
  const params = useParams()
  const { sessionId } = params
  const tabs = [
    {
      name: "Overview",
      value: "Overview",
      path: `/simulation/${sessionId}/chart/overview`,
      icon: ''
    },
    {
      name: "Labs",
      value: "Labs",
      icon: <TestTubeDiagonal />,
      path: `/simulation/${sessionId}/chart/labs`,
    },
    {
      name: "Avatar",
      value: "Avatar",
      icon: <User />,
      path: `/simulation/${sessionId}/chart/overview`, 
    },
    {
      name: "Orders",
      value: "Orders",
      icon: <Clipboard />,
      path: `/simulation/${sessionId}/chart/orders`,
    },
    {
      name: "MAR",
      value: "MAR",
      icon: <Pill />,
      path: `/simulation/${sessionId}/chart/mar`,
    },
    {
      name: "Notes",
      value: "Notes",
      icon: <NotebookText />,
      path: `/simulation/${sessionId}/chart/notes`,

    },
    {
      name: "FlexSheets",
      value: "FlexSheets",
      icon: "",
      path: `/simulation/${sessionId}/chart/charting`,
    },
  ];
  return (
      <Tabs defaultValue={tabs[0].value} className="w-fit pl-10 mt-auto ">
        <TabsList className="w-full h-8 p-0 bg-lime-600 justify-start rounded-none">
          {[
            ...tabs.map((tab) => (
              <Link
                key={tab.value}
                href={tab.path}
                className="rounded-none h-full flex items-center "
              >
                <TabsTrigger
                  value={tab.value}
                  className="rounded-none bg-gray-200 p-3 data-[state=active]:h-10 data-[state=active]:px-4  data-[state=active]:shadow-black/20 ring-none outline-none border border-gray-300 border-b-gray-00 data-[state=active]:bg-gray-100 -mb-[2px] rounded-t-lg flex items-center" // Added flex for alignment
                >
                  {tab.icon}
                  <p className="text-md font-normal tracking-tight">{tab.name}</p>
                </TabsTrigger>
              </Link>
            )), 
            <MultiPtSelector key="multiPatientSelector" />
          ]}
        </TabsList>
      </Tabs>
  );
}
