import * as React from "react"
import logo from '@/assets/logo.png'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }
}) {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                <img src={logo} alt="logo" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {teams.name}
                </span>
                <span className="truncate text-xs">{teams.plan}</span>
              </div>
            </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}