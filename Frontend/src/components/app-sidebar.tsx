import * as React from "react"
import {
  CircleUserRound,
  GalleryVerticalEnd,
  LifeBuoy,
  Send,
  LoaderPinwheel,
  Laptop,
  Volume2,
  Users,
  FileText,
  MonitorCog,
} from "lucide-react";

// import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
// import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  SidebarGroup,
  // SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "@/components/team-switcher"
import { NavSecondary } from "./nav-secondary"

const data = {
  user: {
    name: "Gahinath Madake",
    email: "gahinathmadake@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  Platform: {
    name: "Refferal Hub",
    logo: GalleryVerticalEnd,
    plan: "MITAOE",
  },
  navMenu: [
    {
      title: "Platform Seturp",
      url: "/dashboard/platform-setup",
      icon: MonitorCog, 
    },
    { 
      title: "AI Agent", 
      url: "/dashboard/ai-agent", 
      icon: LoaderPinwheel,
    },
    { 
      title: "Dashboard",
      url: "/dashboard",
      icon: Laptop,
    },
    { 
      title: "Campaign",
      url: "/dashboard/campaign",
      icon: Volume2,
    },
    {
      title: "Promoters",
      url: "/dashboard/promoters",
      icon: Users, 
    },
    {
      title: "Leads",
      url: "/dashboard/leads",
      icon: CircleUserRound, 
    },
    {
      title: "Payouts",
      url: "/dashboard/payouts",
      icon: FileText, 
    },
    // {
    //   title: "Dashboard",
    //   url: "/dashboard",
    //   icon: Captions,
    //   isActive: false,
    //   items: [
    //     {
    //       title: "Ongoing",
    //       url: '/student/courses/ongoing'
    //     },
    //     {
    //       title: "Completed",
    //       url: '/student/courses/completed'
    //     },
    //     {
    //       title: "All",
    //       url: '/student/courses/All'
    //     },
    //   ],
    // },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

// interface MenuItemBase {
//   title: string;
//   url: string;
//   icon: LucideIcon;
//   isActive?: boolean;
//   items?: { title: string; url: string }[];
// }

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  
  const { open } = useSidebar()

  return (
    <Sidebar variant="inset" {...props} collapsible="icon">
      
      {/* SidebarTrigger centered below if sidebar is collapsed */}
      {!open && (
        <div className="w-full flex justify-center items-center">
          <SidebarTrigger />
        </div>
      )}

      <div className="relative">
        <SidebarHeader>
          <TeamSwitcher teams={data.Platform} />
        </SidebarHeader>

        {/* SidebarTrigger rendered at the top right if sidebar is not collapsed */}
        {open && (
          <SidebarTrigger className="z-100 absolute top-4 right-0" />
        )}
      </div>

      <SidebarContent>
        {/* Sidebar menu */}
        <SidebarGroup>
          {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}

          <SidebarMenu>
            {data.navMenu.map((menu, index) => {
              // if (menu.items) {
              //   return <NavMain key={index} item={{ ...menu, icon: menu.icon }} />;
              // } else 
              {
                return <NavProjects key={index} projects={{ ...menu, icon: menu.icon }} />;
              }
            })}
          </SidebarMenu>
        </SidebarGroup>

        {/* Navbar Second */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}

      <SidebarRail />
    </Sidebar>
  );
}



// import * as React from "react"
// import {
//   Bell,
//   Captions,
//   CircleUserRound,
//   GalleryVerticalEnd,
//   House,
//   LayoutDashboard,
//   LifeBuoy,
//   LucideIcon,
//   Send,
// } from "lucide-react"

// import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
// import { NavUser } from "@/components/nav-user"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarRail,
// } from "@/components/ui/sidebar"
// import { TeamSwitcher } from "@/components/team-switcher"
// import { NavSecondary } from "./nav-secondary"

// const data = {
//   user: {
//     name: "Gahinath Madake",
//     email: "gahinathmadake@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   Platform: {
//     name: "AI Tutor",
//     logo: GalleryVerticalEnd,
//     plan: "MITAOE",
//   },
//   navMenu: [
//       {
//           name: "Dashboard",
//           url: "/student",
//           icon: LayoutDashboard, 
//       },
//       { 
//           name: "SiteHome", 
//           url: "/student/sitehome", 
//           icon: House,
//       },
//       {
//           title: "Courses",
//           url: "#",
//           icon: Captions,
//           isActive: false,
//           items:[
//               {
//                   title:"Ongoing",
//                   url:'/student/courses/ongoing'
//               },
//               {
//                   title:"Completed",
//                   url:'/student/courses/completed'
//               },
//               {
//                   title:"All",
//                   url:'/student/courses/All'
//               },
//           ],
          
//       },
//       {
//           name: "Notifications",
//           url: "/student/notifications",
//           icon: Bell, 
//       },
//       {
//           name: "Help",
//           url: "/student/help",
//           icon: CircleUserRound, 
//       },
//   ],
//   navSecondary:[
//     {
//       title: "Support",
//       url: "#",
//       icon: LifeBuoy,
//     },
//     {
//       title: "Feedback",
//       url: "#",
//       icon: Send,
//     },
//   ],
// };


// interface BaseMenuItem {
//   name: string;
//   url: string;
//   icon: LucideIcon;
// }

// interface SubMenuItem {
//   title: string;
//   url: string;
//   items: { title: string; url: string }[];
//   icon: LucideIcon;
//   isActive: boolean;
// }

// type MenuItem = BaseMenuItem | SubMenuItem;

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   return (
//     <Sidebar variant="inset" {...props} collapsible="icon">
//       <SidebarHeader>
//         <TeamSwitcher teams={data.Platform} />
//       </SidebarHeader>

//       <SidebarContent>
//         {/* Sidebar menu */}
//         <SidebarGroup>
//           <SidebarGroupLabel>Platform</SidebarGroupLabel>

//           <SidebarMenu>
//             {data.navMenu.map((menu, index) => {
//               if ("items" in menu) {
//                 return <NavMain key={index} item={{ ...menu, icon: menu.icon as LucideIcon }} />;
//               } else {
//                 return <NavProjects key={index} projects={{ ...menu, icon: menu.icon as LucideIcon }} />;
//               }
//             })}
//           </SidebarMenu>
//         </SidebarGroup>

//         {/* Navbar Second */}
//         <NavSecondary items={data.navSecondary} className="mt-auto" />
//       </SidebarContent>

//       <SidebarFooter>
//         <NavUser user={data.user} />
//       </SidebarFooter>

//       <SidebarRail />
//     </Sidebar>
//   );
// }
