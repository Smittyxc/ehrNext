'use client'

import { useGetSimPrepsQuery } from "@/app/store/apiSlice"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { CircleUserRound } from "lucide-react"
import Link from "next/link"

const SimPrep = () => {
  const { data, isLoading, isFetching, isError, error } = useGetSimPrepsQuery()
  // const data = {
  //   name: "Mark Smith",
  //   diagnosis: "COPD",
  //   overview: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dicta similique deleniti veritatis consequatur quis corrupti maxime, laboriosam quam adipisci in dolorum magni! Consequatur non eaque voluptatibus nisi cupiditate nobis.",
  //   age: "67",
  //   sex: "Male",
  //   tasks: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, tempore omnis animi veniam, libero similique, aspernatur sunt aperiam et nesciunt."
  // }
  if (isLoading || isFetching) {
    return (
      <div className="flex flex-col h-screen w-full py-4 px-6 bg-gray-100 justify-start items-center gap-6">
        <Skeleton className="w-full h-60 rounded-xl bg-gray-200" />
        <Skeleton className="w-full h-60 rounded-xl bg-gray-200" />
        <Skeleton className="w-full h-60 rounded-xl bg-gray-200" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen w-full overflow-y-auto p-4 bg-white rounded justify-center items-center">
        <p className="text-red-600">Error loading simulation prep: {error ? (error as any).message : 'Unknown error'}</p>
      </div>
    );
  }

  const simPrepData = data?.simPreps
  
  if (!simPrepData) {
    return (
      <div className="h-screen w-full overflow-y-auto p-4 bg-white rounded justify-center items-center">
        <p className="text-red-600">No Simultion data</p>
      </div>
    );
  }

  

  return (
    <div className="flex flex-col gap-4 w-full p-4 bg-white">
        {simPrepData.map(simData =>
          <div className= "grid grid-cols-[2fr_5fr]  w-full h-fit rounded-tr-xl rounded-br-xl rounded-bl-xl overflow-hidden shadow-lg">
            <div className="flex flex-col  gap-2 px-2 py-4 items-center justify-start w-full min-w-48 h-full bg-lime-600 text-white">
              <span className="rounded-full p-1 bg-gray-100 shadow-md"> 
                <CircleUserRound size={100} strokeWidth={0.8} color="oklch(38% 0.189 293.745)" className="rounded-full bg-white"/>
              </span>
              <p className="text-2xl font-medium">{simData.name}</p>
              <p className="">{simData.gender}, {simData.age} years old</p>
              <p className="">Dx: {simData.diagnosis}</p>
              <Link href={`/simulation/${simData.id}/chart/overview`}>
                <Button variant="secondary">Enter chart</Button>
              </Link>
            </div>
            <div className="flex flex-col w-full h-full gap-4 items-start justify-start py-2 px-4">
              <div>
                <h2 className="text-2xl">Overview:</h2>
                <p className="pl-1 font-light">{simData.overview}</p>
              </div>
              <div>
                <h2 className="text-2xl">Tasks:</h2>
                {simData.tasks.map((task, index) => (
                  <p key={`${task}-${index}`} className="pl-3 font-light"><span className="font-medium">{index + 1}. </span>{task}</p>
                ))}

              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default SimPrep