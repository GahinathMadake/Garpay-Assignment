import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useEffect, useState } from 'react'
import { useBreadcrumb } from '@/context/BreaderCrumbContext'
import { useLocation } from 'react-router-dom'
import { Bot, User } from "lucide-react"

const messages = [
  {
    sender: "agent",
    text: "Welcome Back, Kadin! How can I help you today?",
  },
  {
    sender: "user",
    text: "Hey, I want to create a new referral campaign, but I'd like some help from AI to make sure it's set up correctly and performs well. Can you guide me through it?",
  },
  {
    sender: "agent",
    text: "Absolutely! I'll help you create a high-converting referral campaign step by step. Let's start by defining your main objective. What's the primary goal of this campaign?",
  },
  {
    sender: "user",
    text: "My main goal is to increase sales through referrals. I want existing customers to bring in new paying customers, and I'd like to reward them for it.",
  },
  {
    sender: "agent",
    text: "That's a great goal! Referral campaigns work best when there's a strong incentive. What kind of reward would you like to offer referrers?",
  },
  {
    sender: "user",
    text: "Discount on next purchase",
  },
  {
    sender: "agent",
    text: "Smart choice! Discounts are a great way to encourage both referrals and repeat purchases. How much discount would you like to offer per successful referral?",
  },
  {
    sender: "user",
    text: "15%",
  },
  {
    sender: "agent",
    text: "15% sounds like a strong incentive! Now, let's define when a referral is considered valid. When should the referrer receive their reward?",
  },
  {
    sender: "user",
    text: "When the referred person signs up",
  },
  {
    sender: "agent",
    text: "That's a great way to ensure that your campaign drives real revenue! Now, how long do you want this referral campaign to run?",
  },
  {
    sender: "user",
    text: "I want to test this campaign for a while before making any long-term decisions, so I think 3 months would be ideal. If it works well, I can always extend it later.",
  },
  {
    sender: "agent",
    text: "Got it! Here's a quick summary of your campaign:\n\n• Goal: Increase sales\n• Reward: 15% discount on the next purchase\n• Condition: Reward is given when the referred person makes a purchase\n• Duration: 3 months",
    summary: true
  },
]

export default function ChatUI() {

  const { addItem, clearItems } = useBreadcrumb()
    const location = useLocation()
    useEffect(() => {
      setTimeout(() => {
        clearItems()
        addItem({ url: location.pathname, name: 'AI Agent' }) // or dynamic name
      }, 0)
    }, [location.pathname])


    // Loading state
  const [loading, setLoading] = useState(true)
  


    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 3000) // 3 seconds delay
  
      return () => clearTimeout(timer)
    }, [])


    if(loading){
      return <MessageSkeletonLoader />
    }






  return  (
    <div className="flex flex-col h-[calc(100vh-85px)]">
      {/* Main content area that will grow and allow scrolling */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full p-4">
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex items-start gap-2",
                  msg.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                {msg.sender !== "user" && (
                   <div className="flex justify-center items-center mt-1 w-8 h-8 rounded-full overflow-hidden bg-green-100">
                    <Bot className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}

                <Card
                  className={cn(
                    "max-w-md px-4 py-2 text-sm shadow-none",
                    msg.sender === "user"
                      ? "bg-blue-100 text-blue-900 border text-right"
                      : "bg-green-100 border text-left"
                  )}
                >
                  {msg.text.split("\n").map((line, i) => (
                    <p key={i} className="mb-1 last:mb-0">
                      {line}
                    </p>
                  ))}
                  {msg.summary && (
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" className="flex-1">
                        Edit
                      </Button>
                      <Button className="flex-1">Launch</Button>
                    </div>
                  )}
                </Card>

                {msg.sender === "user" && (
                  <div className="flex justify-center items-center mt-1 w-8 h-8 rounded-full overflow-hidden bg-blue-300">
                    <User stroke="black" className="w-5 h-5 text-blue-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Fixed input area at bottom */}
      <div className="sticky bottom-0 bg-white border-t p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          <Button variant="outline">Send Referral</Button>
          <Button variant="outline">Create Campaign</Button>
          <Button variant="outline">Follow-up</Button>
          <Button variant="outline">View Referral</Button>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Ask me anything..." className="flex-1" />
          <Button>➤</Button>
        </div>
      </div>
    </div>
  )
}




import { Skeleton } from "@/components/ui/skeleton"

const MessageSkeletonLoader = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-85px)]">
      {/* Main content area that will grow and allow scrolling */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full p-4">
          <div className="space-y-4">
            {/* Loading Skeleton for each message */}
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 justify-between"
              >
                <div className="flex items-start gap-2 justify-between">
                  <div className="flex justify-center items-center mt-1 w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                  </div>

                  <Card className="min-w-lg h-20 px-4 py-2 text-sm shadow-none bg-gray-100 border">
                    <Skeleton className="mb-2" />
                  </Card>
                </div>

                
                <div 
                className="mt-8 flex items-start gap-2 justify-between">
                <Card className="min-w-lg h-20 px-4 py-2 text-sm shadow-none bg-gray-100 border">
                  <Skeleton className="mb-2" />
                </Card>

                <div className="flex justify-center items-center mt-1 w-8 h-8 rounded-full overflow-hidden bg-blue-200">
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed input area at bottom */}
      <div className="sticky bottom-0 bg-white border-t p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          <Skeleton className="h-10 w-full rounded" />
          <Skeleton className="h-10 w-full rounded" />
          <Skeleton className="h-10 w-full rounded" />
          <Skeleton className="h-10 w-full rounded" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 flex-1 rounded" />
          <Skeleton className="h-10 w-12 rounded" />
        </div>
      </div>
    </div>
  );
};


