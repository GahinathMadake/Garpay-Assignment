import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from 'react'
import { useBreadcrumb } from '@/context/BreaderCrumbContext'
import { useLocation } from 'react-router-dom';
import { HiUsers } from "react-icons/hi2";
import { FileChartColumnIncreasing } from 'lucide-react';
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { PiUserSoundLight } from "react-icons/pi";
import MetricCard from "./Dashboard/InitialCard";
import QuickStatsSection from "./Dashboard/CircularProgress";
import { Performance } from "./Dashboard/Performance";
import { Increase } from "./Dashboard/IncrementRate";

const metrics = [
  { title: "Total Promoters", value: 1234, change: "+12%", note: "vs last month", color: "text-green-600", icon:HiUsers },
  { title: "Conversion rate", value: 23.5, change: "-2.4%", note: "vs last month", color: "text-red-500", icon:FileChartColumnIncreasing },
  { title: "Revenue Generated in $", value: 12345, change: "+8.7%", note: "vs last month", color: "text-green-600", icon:FaMoneyBill1Wave},
  { title: "Active Campaigns", value: 3, change: "+12%", note: "owr value", color: "text-gray-700", icon:PiUserSoundLight },
]


const channels = [
  { name: "Facebook", percent: 78, color: "bg-red-100 text-red-600" },
  { name: "Twitter", percent: 45, color: "bg-blue-100 text-blue-600" },
  { name: "LinkedIn", percent: 23, color: "bg-sky-100 text-sky-600" },
]

const activities = [
  { text: "Julian earned $10", date: "28-4-2024", time: "10:30 AM" },
  { text: "John Doe signed up from your referral link", date: "29-4-2024", time: "9:45 AM" },
  { text: "You reached 50 referrals milestone!", date: "30-4-2024", time: "8:20 AM" },
  { text: "You updated your referral campaign", date: "31-4-2024", time: "7:00 AM" },
]

const leaderboard = [
  { name: "Emery Dokidis", rate: 150, sent: 80, conv: "60%", revenue: "$1,200" },
  { name: "Kadin Lipshutz", rate: 132, sent: 90, conv: "65%", revenue: "$980" },
  { name: "Randy Culhane", rate: 110, sent: 60, conv: "60%", revenue: "$880" },
  { name: "Jaxson Vaccaro", rate: 100, sent: 85, conv: "75%", revenue: "$500" },
  { name: "Jocelyn Levin", rate: 50, sent: 30, conv: "63%", revenue: "$600" },
  { name: "Maren Septimus", rate: 80, sent: 35, conv: "25%", revenue: "$200" },
  { name: "Haylie Saris", rate: 120, sent: 55, conv: "45%", revenue: "$150" },
  { name: "Randy Herwitz", rate: 110, sent: 90, conv: "65%", revenue: "$880" },
]

export default function Dashboard() {

const { addItem, clearItems } = useBreadcrumb()
const location = useLocation()

useEffect(() => {
  setTimeout(() => {
    clearItems()
    addItem({ url: location.pathname, name: 'Dashboard' }) // or dynamic name
  }, 0)
}, [location.pathname])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // 3 seconds delay

    return () => clearTimeout(timer)
  }, [])

if (loading) return <DashboardSkeleton />

  return (
    <div className="space-y-6">
      {/* Metrics cards - unchanged */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {metrics.map((m) => (
            <MetricCard key={m.title} m={m} />
          ))}
      </div>

      {/* Quick Stats with corrected circular progress */}
      <QuickStatsSection />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardContent className="px-4">
            <div className="flex justify-between mb-2">
              <h3 className="text-sm font-medium">Promoter Performance Over Time</h3>
              <Tabs defaultValue="6m">
                <TabsList>
                  <TabsTrigger value="6m">Last 6 months</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <Performance />
            
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <Card>
            <CardContent className="px-4">
              <div className="text-sm mb-2">Conversion Success Rate</div>
              <Increase />
            </CardContent>
          </Card>

          <Card className="py-4">
            <CardContent className="px-4 space-y-2">
              <div className="text-md mb-2 font-semibold">Top Performing Channel</div>
              <div className="flex flex-wrap gap-3">
                {channels.map((c) => (
                  <div key={c.name} className={`text-center text-sm px-7 py-4 rounded ${c.color}`}>
                    <p>{c.name}</p>
                    <p>{c.percent}%</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="px-4">
        <CardContent className="px-4">
          <h3 className="text-md font-semibold mb-2">Recent Activities</h3>
          <div className="grid grid-cols-3 text-sm font-medium text-muted-foreground mb-1">
            <div>Activities</div><div>Date</div><div>Time</div>
          </div>
          {activities.map((a, i) => (
            <div key={i} className="grid grid-cols-3 text-sm py-3 border-t">
              <div>{a.text}</div>
              <div>{a.date}</div>
              <div>{a.time}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="px-4 overflow-x-auto">
          <h3 className="text-md font-semibold mb-4">Leaderboard Table View</h3>
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2">Rank</th>
                <th className="p-2">Promoter Name</th>
                <th className="p-2">Conversion Rate</th>
                <th className="p-2">Referrals Sent</th>
                <th className="p-2">Successful Conversions</th>
                <th className="p-2">Revenue Generated</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((r, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{i + 1}</td>
                  <td className="p-2">{r.name}</td>
                  <td className="p-2">{r.rate}</td>
                  <td className="p-2">{r.sent}</td>
                  <td className="p-2">{r.conv}</td>
                  <td className="p-2">{r.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}



import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div className="space-y-6">

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="p-4">
            <Skeleton className="h-6 w-1/3 mb-2" />
            <Skeleton className="h-8 w-2/3 mb-1" />
            <Skeleton className="h-4 w-1/2" />
          </Card>
        ))}
      </div>

      {/* Quick Stats Skeleton */}
      <Card>
        <CardContent className="flex gap-6 flex-wrap justify-around py-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <Skeleton className="h-24 w-24 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Performance + Side Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardContent className="p-4">
            <Skeleton className="h-6 w-1/3 mb-4" />
            <Skeleton className="h-64 w-full" />
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <Skeleton className="h-6 w-2/3 mb-2" />
            <Skeleton className="h-32 w-full" />
          </Card>
          <Card className="p-4">
            <Skeleton className="h-6 w-1/2 mb-2" />
            <div className="flex gap-2 flex-wrap">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-16 w-24 rounded" />
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Activities */}
      <Card className="px-4">
        <CardContent className="px-4">
          <Skeleton className="h-6 w-1/3 mb-4" />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="grid grid-cols-3 gap-4 py-3 border-t">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Leaderboard Table */}
      <Card>
        <CardContent className="px-4">
          <Skeleton className="h-6 w-1/3 mb-4" />
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border">
              <thead>
                <tr>
                  {["Rank", "Name", "Rate", "Sent", "Conv", "Revenue"].map((i) => (
                    <th key={i} className="p-2">
                      <Skeleton className="h-4 w-16" />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((_, rowIdx) => (
                  <tr key={rowIdx} className="border-t">
                    {Array.from({ length: 6 }).map((_, cellIdx) => (
                      <td key={cellIdx} className="p-2">
                        <Skeleton className="h-4 w-20" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
