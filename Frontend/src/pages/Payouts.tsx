
import { Award, AwardIcon, CalendarDays, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from 'react'
import { useBreadcrumb } from '@/context/BreaderCrumbContext'
import { useLocation } from 'react-router-dom'

const payoutStatusColor: Record<'Paid' | 'Disputed', string> = {
  Paid: 'bg-green-100 text-green-700',
  Disputed: 'bg-orange-100 text-orange-700',
};

const payouts = [
  {
    id: '#P-1048',
    name: 'Emery Dokidis',
    points: '500 pts',
    rewardDate: '28-4-2024',
    reward: 'Spring Boost',
    status: 'Paid',
  },
  {
    id: '#P-1047',
    name: 'Kadin Lipshutz',
    points: '250 pts',
    rewardDate: '27-5-2024',
    reward: 'Summer Referral Program',
    status: 'Paid',
  },
  {
    id: '#P-1046',
    name: 'Randy Culhane',
    points: '300 pts',
    rewardDate: '29-5-2024',
    reward: 'Early Bird Special',
    status: 'Disputed',
  },
  {
    id: '#P-1045',
    name: 'Jaxson Vaccaro',
    points: '100 pts',
    rewardDate: '30-6-2024',
    reward: 'Early Bird Special',
    status: 'Paid',
  },
  {
    id: '#P-1044',
    name: 'Jocelyn Levin',
    points: '200 pts',
    rewardDate: '01-7-2024',
    reward: 'Summer Referral Program',
    status: 'Disputed',
  },
  {
    id: '#P-1043',
    name: 'Maren Septimus',
    points: '300 pts',
    rewardDate: '03-7-2024',
    reward: 'Summer Referral Program',
    status: 'Paid',
  },
  {
    id: '#P-1042',
    name: 'Haylie Saris',
    points: '220 pts',
    rewardDate: '05-7-2024',
    reward: 'Spring Boost',
    status: 'Paid',
  },
  {
    id: '#P-1041',
    name: 'Randy Herwitz',
    points: '400 pts',
    rewardDate: '10-7-2024',
    reward: 'Spring Boost',
    status: 'Disputed',
  },
];

const disputes = [
    { id: "D-3012", name: "Emery Dokidis", points: "500 pts", date: "28-4-2024", reward: "Spring Boost", status: "Resolved" },
    { id: "D-3013", name: "Kadin Lipshutz", points: "250 pts", date: "27-5-2024", reward: "Summer Referral Program", status: "Resolved" },
    { id: "D-3014", name: "Randy Culhane", points: "300 pts", date: "29-5-2024", reward: "Early Bird Special", status: "Under Review" },
    { id: "D-3015", name: "Jaxson Vaccaro", points: "100 pts", date: "30-6-2024", reward: "Early Bird Special", status: "Resolved" },
    { id: "D-3016", name: "Jocelyn Levin", points: "200 pts", date: "01-7-2024", reward: "Summer Referral Program", status: "Under Review" },
    { id: "D-3017", name: "Maren Septimus", points: "300 pts", date: "03-7-2024", reward: "Summer Referral Program", status: "Resolved" },
    { id: "D-3018", name: "Haylie Saris", points: "220 pts", date: "05-7-2024", reward: "Spring Boost", status: "Resolved" },
    { id: "D-3019", name: "Randy Herwitz", points: "400 pts", date: "10-7-2024", reward: "Spring Boost", status: "Under Review" },
];



export default function PayoutsTable() {

  const { addItem, clearItems } = useBreadcrumb()
    const location = useLocation()
    useEffect(() => {
      setTimeout(() => {
        clearItems()
        addItem({ url: location.pathname, name: 'Your Payouts' }) // or dynamic name
      }, 0)
    }, [location.pathname])

    const [loading, setLoading] = useState(true)
    
        useEffect(() => {
          const timer = setTimeout(() => {
            setLoading(false)
          }, 3000)
    
          return () => clearTimeout(timer)
        }, [])

        if(loading){
          return <PayoutSkeleton />
        }


  return (
    <div className="p-6">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      
      {/* Total Points Given */}
      <div className="flex items-center gap-4 p-4 bg-white rounded-xl border shadow hover:shadow-lg transition-shadow">
        {/* Icon Section */}
        <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
          <Award className="w-6 h-6" />
        </div>

        {/* Text Section */}
        <div>
          <div className="text-sm font-medium text-gray-500 mt-2">
            Total Points Given
          </div>
          <p className="text-xl font-bold text-gray-900">12,500</p>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 bg-white rounded-xl border shadow hover:shadow-lg transition-shadow">
        {/* Icon Section */}
        <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
          <CalendarDays className="w-6 h-6" />
        </div>

        {/* Text Section */}
        <div>
          <div className="text-sm font-medium text-gray-500 mt-2">
          Last Points Transfer
          </div>
          <p className="text-xl font-bold text-gray-900">29 April, 2025</p>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 bg-white rounded-xl border shadow hover:shadow-lg transition-shadow">
        {/* Icon Section */}
        <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
          <AwardIcon className="w-6 h-6" />
        </div>

        {/* Text Section */}
        <div>
          <div className="text-sm font-medium text-gray-500 mt-2">
          Current Point Balance
          </div>
          <p className="text-xl font-bold text-gray-900">1,250</p>
        </div>
      </div>
    </div>

      {/* Tabs */}
      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Payouts</TabsTrigger>
          <TabsTrigger value="disputes">Disputes</TabsTrigger>
          <TabsTrigger value="settings">Payout Settings</TabsTrigger>
        </TabsList>

      {/* Search & Filter */}
      <div className="flex justify-between items-center mb-4">
        <Input placeholder="Search" className="max-w-sm" />
        <Button variant="outline">Filter</Button>
      </div>

      {/* Table */}
      <TabsContent value="all">
      <div className="rounded-xl border overflow-auto">
        <h1 className="text-2xl font-bold text-gray-900">All Payouts</h1>
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">Payout ID</th>
              <th className="px-4 py-3">Promoter Name</th>
              <th className="px-4 py-3">Points</th>
              <th className="px-4 py-3">Reward Date</th>
              <th className="px-4 py-3">Reward Earned For</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((payout) => (
              <tr key={payout.id} className="border-t">
                <td className="px-4 py-3">{payout.id}</td>
                <td className="px-4 py-3">{payout.name}</td>
                <td className="px-4 py-3">{payout.points}</td>
                <td className="px-4 py-3">{payout.rewardDate}</td>
                <td className="px-4 py-3">{payout.reward}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      payoutStatusColor[payout.status as keyof typeof payoutStatusColor]
                    }`}
                  >
                    {payout.status}
                  </span>
                </td>
                <td className="px-4 py-3 space-x-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="link" className="text-blue-600 text-xs">
                    {payout.status === 'Disputed' ? 'Track Dispute' : 'Request Dispute'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </TabsContent>

      <TabsContent value="disputes">
      <div className="space-y-4 p-6">
        <h2 className="text-xl font-semibold text-gray-800">Disputes</h2>
        
        <div className="rounded-lg border border-gray-200 overflow-hidden">
          <Table className="min-w-full">
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dispute ID</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Promoter Name</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted On</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reward Earned For</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white divide-y divide-gray-200">
              {disputes.map((dispute) => (
                <TableRow key={dispute.id} className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dispute.id}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispute.name}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispute.points}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispute.date}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispute.reward}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <Badge 
                      variant={dispute.status === "Resolved" ? "default" : "outline"}
                      className={
                        dispute.status === "Under Review" 
                          ? "bg-amber-100 text-amber-800 border-amber-200" 
                          : "bg-green-100 text-green-800 border-green-200"
                      }
                    >
                      {dispute.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="p-0 h-6 w-6">
                        <span className="text-lg">💶</span>
                      </Button>
                      {dispute.status === "Under Review" && (
                        <Button variant="outline" size="sm" className="h-6 px-2 text-xs">
                          Resolve
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      </TabsContent>

      <TabsContent value="settings">
        <div className="space-y-6 py-6">
                <div className="space-y-2">
                <h2 className="text-xl font-semibold">Preload Money</h2>
                <p className="text-gray-600">Use Points to Reward Promoters Instantly</p>
                </div>

                {/* Current Balance */}
                <div className="space-y-2">
                <h3 className="font-medium">Current Point Balance: <span className="font-bold">1,250 Points</span></h3>
                </div>

                {/* Enter Amount */}
                <div className="space-y-2">
                <Label htmlFor="amount">Enter Amount</Label>
                <Input className='w-lg' id="amount" placeholder="Enter amount..." />
                <p className="text-sm text-gray-500">You'll receive 10 points per $1</p>
                </div>

                {/* Payment Methods */}
                <div className="space-y-4">
                <h3 className="font-medium">Payment Methods</h3>
                <RadioGroup defaultValue="card" className=" flex gap-4 flex-wrap">
                    <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Credit/Debit/ATM Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">Paypal account</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank">Bank Transfer</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi">UPI</Label>
                    </div>
                </RadioGroup>
                </div>

                {/* Buy Points Button */}
                <div className="pt-4">
                    <Button className="w-lg py-2 rounded bg-gradient-to-r from-blue-600 to-blue-300 text-white font-semibold hover:opacity-90 transition">Buy Points</Button>
                </div>
        </div>
      </TabsContent>

      </Tabs>
    </div>
  );
}


import { Skeleton } from "@/components/ui/skeleton"

export function PayoutSkeleton() {
  return (
    <div className="p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border shadow">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="w-24 h-4" />
              <Skeleton className="w-32 h-6" />
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="w-24 h-8 rounded-md mx-1" />
          ))}
        </TabsList>

        {/* Search & Filter */}
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="h-10 w-64 rounded-md" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>

        {/* Table Skeleton */}
        <TabsContent value="all">
          <div className="rounded-xl border overflow-auto">
            <Skeleton className="h-8 w-32 mb-4" />
            <table className="w-full">
              <thead>
                <tr>
                  {[...Array(7)].map((_, i) => (
                    <th key={i} className="px-4 py-2">
                      <Skeleton className="h-4 w-24" />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, rowIndex) => (
                  <tr key={rowIndex} className="border-t">
                    {[...Array(7)].map((_, colIndex) => (
                      <td key={colIndex} className="px-4 py-3">
                        <Skeleton className="h-4 w-full" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="disputes">
          <div className="space-y-4 p-6">
            <Skeleton className="h-6 w-32" />
            <div className="rounded-lg border">
              <table className="min-w-full">
                <thead>
                  <tr>
                    {[...Array(7)].map((_, i) => (
                      <th key={i} className="px-4 py-3">
                        <Skeleton className="h-4 w-24" />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...Array(4)].map((_, i) => (
                    <tr key={i}>
                      {[...Array(7)].map((_, j) => (
                        <td key={j} className="px-4 py-3">
                          <Skeleton className="h-4 w-full" />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <div className="space-y-6 py-6">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-60" />
            <Skeleton className="h-6 w-60" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-10 w-72" />
              <Skeleton className="h-4 w-40" />
            </div>

            <div className="space-y-4">
              <Skeleton className="h-6 w-40" />
              <div className="flex flex-wrap gap-4">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-6 w-40 rounded-md" />
                ))}
              </div>
            </div>

            <Skeleton className="h-10 w-40 mt-4" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

