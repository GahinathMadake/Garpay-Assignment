import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

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
  return (
    <div className="relative flex flex-col h-full">
      <div className="p-4 border-b font-semibold text-lg">AI Agent</div>
      <ScrollArea className="flex-1 p-4 space-y-4 overflow-auto bg-muted">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={cn(
              "flex",
              msg.sender === "user" ? "justify-end" : "justify-start"
            )}
          >
            <Card
              className={cn(
                "max-w-md px-4 py-2 text-sm",
                msg.sender === "user"
                  ? "bg-muted border text-right"
                  : "bg-white border"
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
          </div>
        ))}
      </ScrollArea>

      <div className="sticky bg-white bottom-0 border-t p-4">
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
