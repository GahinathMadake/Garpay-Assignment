"use client"
const desktopColor = "#6366F1"
const mobileColor = "#F59E0B"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "Referal Sent %", visitors: 75, fill: desktopColor },
  { browser: "Converted %", visitors: 25, fill: mobileColor },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Increase() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </div>
      <div className="flex flex-col items-center gap-4 text-sm">
        <div className="flex items-center gap-3 text-base font-semibold text-primary">
            <span>Referral Sent</span>
            <span className="font-medium text-green-600">75%</span>
            <TrendingUp className="h-5 w-5 text-green-600" />
        </div>
        
        <div className="flex items-center gap-3 text-base font-semibold text-primary">
            <span>Converted into Subscribers</span>
            <span className="font-medium text-blue-600">25%</span>
        </div>
      </div>

    </div>
  )
}
