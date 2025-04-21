import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react'
import { useBreadcrumb } from '@/context/BreaderCrumbContext'
import { useLocation } from 'react-router-dom'

const Campaign = () => {
    const [activeTab, setActiveTab] = useState<string>('Past Promoters');
    
    const { addItem, clearItems } = useBreadcrumb()
    const location = useLocation()
    useEffect(() => {
      setTimeout(() => {
        clearItems()
        addItem({ url: location.pathname, name: 'Create & Manage Referral Campaigns' }) // or dynamic name
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
      return <CampaignSkeleton />
    }

  return (
    <div>
        <div className="space-x-2 p-1 w-fit bg-muted rounded-xs">
            <Button
                variant='outline'
                className={`rounded-xs py-6 px-20 ${activeTab === 'Past Promoters' ? 'shadow-sm bg-blue-300' : ''}`}
                onClick={() => setActiveTab('Past Promoters')}
            >
                Past Promoter
            </Button>

            <Button
                variant='outline'
                className={`rounded-xs py-6 px-20 ${activeTab === 'New Promoters' ? 'shadow-sm bg-blue-300' : ''}`}
                onClick={() => setActiveTab('New Promoters')}
            >
                New Promoter
            </Button>

            <Button
                variant='outline'
                className={`rounded-xs py-6 px-20 ${activeTab === 'New Leads' ? 'shadow-sm bg-blue-300' : ''}`}
                onClick={() => setActiveTab('New Leads')}
            >
                New Leads
            </Button>
        </div>

        <div className='w-full border p-4 mt-5'>
            {activeTab==='Past Promoters' && <PastPromoters />}
            {activeTab==='New Promoters' && <NewPromotors />}
            {activeTab==='New Leads' && <NewLeads />}
        </div>
    </div>
  )
}



import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, Trash2, Filter } from "lucide-react";

export function PastPromoters() {
  const campaigns = [
    {
      name: "Summer Referral Program",
      date: "5/31/2024 - 8/30/2024",
      status: "Active",
      referrals: 245,
      conversion: "32%",
      roi: "287%",
      suggestion: "Increase reward by 10% to boost conversion rates during peak season",
    },
    {
      name: "Early Bird Special",
      date: "8/20/2024 - 9/19/2024",
      status: "Inactive",
      referrals: 300,
      conversion: "40%",
      roi: "320%",
      suggestion: "Extend your campaign! Strong engagement suggests higher conversions with more time.",
    },
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Button className="bg-blue-500 hover:bg-blue-600">+ Create New Campaign</Button>
        <div className="flex items-center gap-2">
          <Input placeholder="Search campaigns..." className="w-64" />
          <Button variant="outline" size="icon"><Filter /></Button>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        <span className="text-blue-500">2 Campaigns</span> • <span className="text-blue-500">1 Active</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaigns.map((campaign, idx) => (
          <Card key={idx} className="rounded-2xl shadow p-4 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{campaign.name}</h2>
                <p className="text-sm text-muted-foreground">{campaign.date}</p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded bg-muted text-muted-foreground ${campaign.status === "Active" ? "bg-blue-100 text-blue-600" : "bg-gray-200"}`}
              >
                {campaign.status}
              </span>
            </div>
            <div className="flex justify-between text-center text-sm">
              <div>
                <p className="text-muted-foreground">Referrals</p>
                <p className="font-semibold text-lg">{campaign.referrals}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Conversion</p>
                <p className="font-semibold text-lg">{campaign.conversion}</p>
              </div>
              <div>
                <p className="text-muted-foreground">ROI</p>
                <p className="font-semibold text-lg">{campaign.roi}</p>
              </div>
            </div>
            <CardContent className="bg-gradient-to-br from-purple-100 to-white p-3 rounded-md flex items-start gap-2 text-sm">
              <Eye className="w-4 h-4 mt-1 text-muted-foreground" />
              <span>{campaign.suggestion}</span>
            </CardContent>
            <div className="flex justify-between">
              <Button variant="ghost" size="icon"><Trash2 className="text-red-500" /></Button>
              <Button variant="ghost" size="icon"><Eye /></Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}




import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Pencil } from "lucide-react";
import landingPagePreview from '@/assets/landingPagePreview.png'
import landingPagePreview2 from '@/assets/landingPagePreview2.png'
import { Label } from '@radix-ui/react-label';
import { Checkbox } from '@/components/ui/checkbox';

export function NewPromotors() {
  return (
    <div className="mx-auto p-6 space-y-6">
      <Tabs defaultValue="promoter" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="promoter">Promoter Settings</TabsTrigger>
          <TabsTrigger value="leads">Leads Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="promoter">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium">Campaign Name</label>
              <Input defaultValue="Summer Referral Special" className="mt-2" />
            </div>

            <Card className="px-4">
                <Label>Promoter Settings</Label>
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium">Reward Type *</label>
                    <Button variant="outline" className="mt-2 w-full">
                    Points <span className="ml-2 text-xs text-muted-foreground">($1 is equivalent to 10 points)</span>
                    </Button>
                </div>
                <div>
                    <label className="block text-sm font-medium">Reward Value *</label>
                    <Input defaultValue="200 points" className="mt-2" />
                </div>
                </div>

                <div>
                <label className="block text-sm font-medium">Promoter Message *</label>
                <Textarea
                    className="mt-2"
                    defaultValue="Hey! Share this with your friends and get $20 for each successful signup!"
                />
                </div>

                <div className="bg-muted p-6 rounded-xl">
                <h2 className="text-sm font-semibold mb-4">Follow-Up Strategy *</h2>
                <div className="space-y-4">
                    {[
                    "SMS",
                    "Wait - 5 days",
                    "Email",
                    "Wait - 2 days",
                    "SMS",
                    "Wait - 3 days",
                    "SMS",
                    ].map((step, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm"
                    >
                        <span>{step}</span>
                        <div className="flex items-center space-x-2">
                        <Pencil className="h-4 w-4 text-muted-foreground cursor-pointer" />
                        <Trash2 className="h-4 w-4 text-red-500 cursor-pointer" />
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                <div>
                <h2 className="text-sm font-semibold mb-4">Landing Page Preview</h2>
                {/* <div className="overflow-hidden">
                    <div className="bg-gradient-to-r from-green-100 to-pink-100 p-6">
                    <h3 className="text-lg font-bold text-center mb-2">
                        Welcome back! You're promoting: SnackNation Express
                    </h3>
                    <p className="text-sm text-center text-muted-foreground mb-4">
                        SnackNation delivers hand-picked, chef-curated snacks — from spicy masala nuts to sweet jaggery treats — delivered fresh to your door in under 45 minutes.
                    </p>
                    <div className="text-center text-blue-500 font-medium mb-4">
                        Every successful referral earns you 200 points
                    </div>
                    <div className="text-center">
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        Start Promoting & Earning
                        </Button>
                    </div>
                    </div>
                </div> */}
                <img src={landingPagePreview} alt="landingPagePreview" />
                </div>

            </Card>

            <div className="text-center pt-4">
              <Button className="w-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6">
                Edit
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="leads">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium">Campaign Name</label>
              <Input defaultValue="Summer Referral Special" className="mt-2" />
            </div>

            <Card className="px-4">
              <Label>Leads Settings</Label>
              
              <div className='flex justify-between gap-6'>
                <div className='w-5/12'>
                    <label className="block text-sm font-medium">Reward Type *</label>
                    <Button variant="outline" className="mt-2 w-full">
                    Discount <span className="ml-2 text-xs text-muted-foreground">($1 is equivalent to 10 points)</span>
                    </Button>
                </div>
                <div className='w-5/12'>
                    <label className="block text-sm font-medium">Reward Value *</label>
                    <Input defaultValue="20%" className="mt-2" />
                </div>
              </div>

                <div>
                <label className="block text-sm font-medium">Refferad Message *</label>
                <Textarea
                    className="mt-2"
                    defaultValue="Hey! Share this with your friends and get $20 for each successful signup!"
                />
                </div>

                <div className="space-y-2">
                    <Label>Form Fields</Label>
                    <div className="flex flex-wrap justify-around">
                        <label><Checkbox /> Full Name</label>
                        <label><Checkbox /> Email Address</label>
                        <label><Checkbox /> Phone Number</label>
                        <label><Checkbox /> Agree to T&C</label>
                    </div>
                </div>

                <div className="bg-muted p-6 rounded-xl">
                <h2 className="text-sm font-semibold mb-4">Follow-Up Strategy *</h2>
                <div className="space-y-4">
                    {[
                    "SMS",
                    "Wait - 5 days",
                    "Email",
                    "Wait - 2 days",
                    "SMS",
                    "Wait - 3 days",
                    "SMS",
                    ].map((step, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm"
                    >
                        <span>{step}</span>
                        <div className="flex items-center space-x-2">
                        <Pencil className="h-4 w-4 text-muted-foreground cursor-pointer" />
                        <Trash2 className="h-4 w-4 text-red-500 cursor-pointer" />
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                <div>
                <h2 className="text-sm font-semibold mb-4">Landing Page Preview</h2>
                {/* <div className="overflow-hidden">
                    <div className="bg-gradient-to-r from-green-100 to-pink-100 p-6">
                    <h3 className="text-lg font-bold text-center mb-2">
                        Welcome back! You're promoting: SnackNation Express
                    </h3>
                    <p className="text-sm text-center text-muted-foreground mb-4">
                        SnackNation delivers hand-picked, chef-curated snacks — from spicy masala nuts to sweet jaggery treats — delivered fresh to your door in under 45 minutes.
                    </p>
                    <div className="text-center text-blue-500 font-medium mb-4">
                        Every successful referral earns you 200 points
                    </div>
                    <div className="text-center">
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        Start Promoting & Earning
                        </Button>
                    </div>
                    </div>
                </div> */}
                <img src={landingPagePreview2} alt="landingPagePreview" />
                </div>
            </Card>

            <div className="text-center pt-4">
              <Button className="w-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6">
                Edit
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}


const steps = [
  { type: "sms" },
  { type: "wait", value: "5 days" },
  { type: "email" },
  { type: "wait", value: "2 days" },
  { type: "sms" },
  { type: "wait", value: "3 days" },
  { type: "sms" },
];


export function NewLeads() {
  return (
    <div className="p-4">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Leads Settings</h2>
        <div className="bg-muted p-6 rounded-2xl">
          <h3 className="text-lg font-medium mb-4">Follow-Up Strategy<span className="text-red-500">*</span></h3>
          <div className="flex flex-col items-center space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-[150px] flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow-sm">
                  <span className="text-sm">
                    {step.type === "wait" ? `Wait - ${step.value}` : step.type.toUpperCase()}
                  </span>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-600">
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}


import { Skeleton } from "@/components/ui/skeleton";

export const CampaignSkeleton = () => {
  return (
    <div>
      {/* Tabs */}
      <div className="space-x-2 p-1 w-fit bg-muted rounded-xs">
        <Skeleton className="rounded-xs py-6 px-20 h-12 w-40 inline-block" />
        <Skeleton className="rounded-xs py-6 px-20 h-12 w-40 inline-block" />
        <Skeleton className="rounded-xs py-6 px-20 h-12 w-40 inline-block" />
      </div>

      {/* Tab content */}
      <div className='w-full flex-wrap flex justify-center gap-20 items-center mt-5'>
        <div className="w-5/12 border p-4 mt-5 space-y-4">
          {/* Title Placeholder */}
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-1/2" />
          
          {/* List/Table like loading */}
          <div className="space-y-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-6 w-1/4" />
                </div>
                <Skeleton className="h-8 w-16 rounded-md" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-5/12 border p-4 mt-5 space-y-4">
          {/* Title Placeholder */}
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-1/2" />
          
          {/* List/Table like loading */}
          <div className="space-y-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-6 w-1/4" />
                </div>
                <Skeleton className="h-8 w-16 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full border p-4 mt-5 space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );
};



export default Campaign;