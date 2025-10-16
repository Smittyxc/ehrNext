import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/header";
import { AdminSidebar } from "./components/adminSidebar";

interface LayoutProps {
  children: React.ReactNode
}

const MainLayout = ( { children }: LayoutProps) => {
  return (
    <div className="bg-lime-600 h-screen w-full overflow-hidden flex flex-col [--header-height:calc(--spacing(16))]">
      <SidebarProvider className="flex flex-col">
        <Header />
        <div className="flex w-full flex-1">
          <AdminSidebar />
          <SidebarInset>
            <div className="h-[calc(100vh-4rem)] overflow-y-auto">
              { children }
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default MainLayout