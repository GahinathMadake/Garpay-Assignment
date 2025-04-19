import {
  type LucideIcon,
} from "lucide-react"

import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"


export function NavProjects({
  projects,
}: {
  projects: {
    title: string
    url: string
    icon: LucideIcon
  }
}) {

  return (
    <>
      <SidebarMenuItem key={projects.title}>
        <SidebarMenuButton asChild>
            <Link to={projects.url}>
              <projects.icon />
              <span>{projects.title}</span>
            </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </>
  )
}