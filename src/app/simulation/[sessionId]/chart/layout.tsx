"use client";

import ChartTabs from "./components/chartTabs"
import { Toaster } from "sonner"
import ChartSidebar from "@/app/simulation/[sessionId]/chart/components/chartSidebar"
import { useEffect, use } from 'react';
import { useDispatch } from 'react-redux';
import { initializeTime, updateSimulationTime } from './components/timeSlice';
import type { AppDispatch } from '../../../store/store.js'
import Header from "@/app/simulation/[sessionId]/chart/components/header"
import { useParams } from "next/navigation";

type ChartLayoutProps = {
  children: React.ReactNode;
  // params: Awaited<LayoutProps<"/simulation/[sessionId]/chart">["params"]>;
};
// params is dynamic URL portion
const ChartLayout = ({ children }: ChartLayoutProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams()
  // Main component of the entire chart, time is kept here
  // Timer sets the sessionStartTime once and updates the simulation time for components that need it (FlexSheet, Overview Cards, Labs)
  // probably better ways of doing this
  useEffect(() => {
    dispatch(initializeTime());

    const interval = setInterval(() => {
      dispatch(updateSimulationTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const { sessionId } =  params
  
  return (
    <div className="bg-lime-600 h-screen w-full overflow-hidden flex flex-col [--header-height:calc(--spacing(16))]">
      <Toaster position="top-right" />
      <Header tabs={<ChartTabs />} />
      <div className="flex w-full h-full">
        <ChartSidebar />
        <div className="flex flex-col w-full h-full">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ChartLayout