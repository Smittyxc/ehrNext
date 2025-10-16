'use client'
import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

const sidebarGroupOne = {
  navMain: [
    {
      title: "Simulation",
      url: "#",
      items: [
        {
          title: "Simulation Prep",
          url: "/student/simPrep",
        },
        {
          title: "Join Simulation",
          url: "/simulation",
        },
      ],
    }
  ],
}

const sidebarGroupTwo = {
  navMain: [
    {
      title: "Feedback",
      url: "#",
      items: [
        {
          title: "View Feedback",
          url: "#",
        },
        {
          title: "?",
          url: "#",
        },
      ],
    },
  ],
}

export default function StudentSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  console.log(pathname)

  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarContent className="bg-white">
        {sidebarGroupOne.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent className="overflow-y-auto">
              <SidebarMenu className="">
                {item.items.map((item) => {
                  const active = pathname === item.url
                  return(
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton isActive={active} asChild>
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        {sidebarGroupTwo.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent className="overflow-y-auto">
              <SidebarMenu className="">
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}


      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

