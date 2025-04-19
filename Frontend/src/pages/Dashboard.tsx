import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
const metrics = [
  { title: "Total Promoters", value: "1,234", change: "+12%", note: "vs last month", color: "text-green-600" },
  { title: "Conversion rate", value: "23.5%", change: "-2.4%", note: "vs last month", color: "text-red-500" },
  { title: "Revenue Generated", value: "$12,345", change: "+8.7%", note: "vs last month", color: "text-green-600" },
  { title: "Active Campaigns", value: "3", change: "", note: "", color: "text-gray-700" },
]

const quickStats = [
  { label: "Repeat Referral Rate", percent: 42, color: "text-green-500", strokeColor: "stroke-green-500" },
  { label: "Referral Engagement Rate", percent: 67, color: "text-red-400", strokeColor: "stroke-red-400" },
  { label: "Churn Rate of Leads", percent: 28, color: "text-blue-400", strokeColor: "stroke-blue-400" },
  { label: "Upsell Rate of Leads", percent: 19, color: "text-pink-400", strokeColor: "stroke-pink-400" },
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
  const size = 80;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="space-y-6">
      {/* Metrics cards - unchanged */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <Card key={m.title}>
            <CardContent className="p-4 space-y-1">
              <div className="text-sm text-muted-foreground">{m.title}</div>
              <div className="text-xl font-semibold">{m.value}</div>
              <div className={`text-xs ${m.color}`}>{m.change} {m.note}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats with corrected circular progress */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((s) => {
          const strokeDashoffset = circumference - (s.percent / 100) * circumference;
          
          return (
            <Card key={s.label}>
              <CardContent className="p-4 space-y-2 flex flex-col items-center">
                <div className="text-sm text-muted-foreground text-center">{s.label}</div>
                
                <div className="relative" style={{ width: size, height: size }}>
                  <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
                    {/* Background circle */}
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      className="stroke-gray-200"
                      strokeWidth={strokeWidth}
                    />
                    {/* Progress circle */}
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      className={s.strokeColor}
                      strokeWidth={strokeWidth}
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-lg font-medium ${s.color}`}>
                      {s.percent}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

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
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center text-muted-foreground text-sm">Chart Placeholder</div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <Card>
            <CardContent className="px-4">
              <div className="text-sm mb-2">Conversion Success Rate</div>
              <div className="h-32 bg-gray-100 rounded flex items-center justify-center text-muted-foreground text-sm">Pie Chart Placeholder</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="px-4 space-y-2">
              <div className="text-sm">Top Performing Channel</div>
              <div className="flex flex-wrap gap-3">
                {channels.map((c) => (
                  <div key={c.name} className={`text-center text-sm px-6 py-4 rounded ${c.color}`}>
                    <p>{c.name}</p>
                    <p>{c.percent}%</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
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
