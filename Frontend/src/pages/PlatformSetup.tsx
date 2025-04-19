import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import { Check } from "lucide-react"

export default function BusinessSetupDashboard() {
    const [currentSetup, setCurrentSetup] = useState<number>(1)


    const progress = ["Set Up Business Profile", "Sync Your Customer Data", "Set Up AI Agent Rules", "Set Up First Campaign"]
  return (
    <div className="flex flex-wrap min-h-screen bg-sidebar p-6 rounded-xl">
      {/* Left Sidebar */}
      <div className="w-[325px] bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-primary">Get Started with ReferralHub</h2>
        <p className="text-sm text-muted-foreground mt-2">
          To get started with better referrals & rewards, complete your account setup in a few easy steps.
        </p>

        <Separator className="my-4"/>

        <div className="space-y-6 mt-6">
          {progress.map((step, index) => (
            <div key={step} className="flex flex-wrap items-center gap-3">
              {
                    index+1<currentSetup ? (
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  ) : index+1===currentSetup ? (
                    <div className="relative w-6 h-6">
                      <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border border-gray-400" />
                  )
              }
              <div className="min-w-[200px]">
                <p className="font-medium text-md">{step}</p>
                <p className={`text-sm font-semibold bold ${index+1>currentSetup?"text-gray-400": index+1===currentSetup?"text-blue-500":"text-green-500"}`}>{index+1>currentSetup ? "Not Started": index+1===currentSetup? "In Progress" : "Completed"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Main Form */}
      { currentSetup===1 && <CountStep1 setCurrentSetup={setCurrentSetup} />}
      { currentSetup===2 && <CountStep2 setCurrentSetup={setCurrentSetup} />}
      { currentSetup===3 && <CountSetup3 setCurrentSetup={setCurrentSetup} />}
      { currentSetup===4 && <CountStep4 setCurrentSetup={setCurrentSetup} />}
    </div>
  )
}




interface CountStepProps {
    setCurrentSetup: React.Dispatch<React.SetStateAction<number>>;
}
 
export const CountStep1: React.FC<CountStepProps> = ({ setCurrentSetup }) => {
 return (
    <div className="flex-1 ml-6 p-6 space-y-2">
        <div className="text-center">
            <h2 className="text-xl font-semibold mb-1">Build Your Business Identity</h2>
            <p className="text-sm text-muted-foreground mb-6">
            Help us tailor the referral experience by adding key details about your business
            </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex gap-2">
            <Label>Business Logo</Label>
            <Button variant="outline" className="mt-2">Choose Image</Button>
          </div>

          <div className="col-span-2">
            <Label>Business Description</Label>
            <Textarea placeholder="Enter business description..." className="mt-4" />
          </div>

          <div>
            <Label>Business Name</Label>
            <Input placeholder="Enter business name" className="mt-4" />
          </div>

          <div>
            <Label>Business Email</Label>
            <Input placeholder="e.g., robert.fox@myemail.com" className="mt-4" />
          </div>

          <div>
            <Label>Business Phone No.</Label>
            <Input placeholder="Enter phone no." className="mt-4" />
          </div>

          <div>
            <Label>Industry</Label>
            <Select>
              <SelectTrigger className="mt-4">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tech">Technology</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Services</Label>
            <Input placeholder="Enter services.." className="mt-4" />
          </div>

          <div>
            <Label>Products</Label>
            <Input placeholder="Enter products..." className="mt-4" />
          </div>

          <div>
            <Label>Company Size <span className="text-muted-foreground">(Optional)</span></Label>
            <Select>
              <SelectTrigger className="mt-4">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10</SelectItem>
                <SelectItem value="11-50">11-50</SelectItem>
                <SelectItem value="51-200">51-200</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>City</Label>
            <Select>
              <SelectTrigger className="mt-4">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>State</Label>
            <Select>
              <SelectTrigger className="mt-4">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Zip Code</Label>
            <Input placeholder="Enter zip code" className="mt-4" />
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button className="w-4/12 cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-300 text-white shadow-md"
            onClick={()=>{
                setCurrentSetup(2);
            }}
          >
            Next
          </Button>
        </div>
      </div>
 )
}



import React, {DragEvent, ChangeEvent } from "react";
import { UploadCloud } from "lucide-react";

export const CountStep2: React.FC<CountStepProps> = ({ setCurrentSetup }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="max-w-2xl min-w-xl my-auto mx-auto text-center space-y-10">
      <h2 className="text-xl font-medium">Import Customer Data: Sync with Zapier or Upload CSV</h2>

      <Button variant="outline" className="border border-blue-500 text-blue-600 px-6 rounded hover:bg-blue-50 transition">
        Connect with Zapier
      </Button>

      <div className="flex items-center justify-center space-x-4 text-gray-400 text-sm">
        <hr className="flex-grow border-gray-300" />
        <span>or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div
        className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-blue-600 cursor-pointer"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <UploadCloud className="mx-auto mb-2" size={32} />
        <p>Drag and drop files here</p>
        <p className="text-sm my-2">or</p>

        <Button variant="outline" className="border border-blue-500 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition">
            <label className=" cursor-pointer">
                Click to Upload CSV File
                <input type="file" accept=".csv" onChange={handleFileChange} className="hidden" />
            </label>
        </Button>

        {fileName && <p className="mt-2 text-sm text-green-600">Uploaded: {fileName}</p>}
      </div>

      <Button
        onClick={()=>{
            setCurrentSetup(3);
        }}
        className="w-full py-2 cursor-pointer  rounded bg-gradient-to-r from-blue-600 to-blue-300 text-white font-semibold hover:opacity-90 transition"
        // disabled={!fileName}
      >
        Next
      </Button>
    </div>
  );
};



import { ChevronDown } from "lucide-react";
import ToggleSwitch from "@/components/common/ToggleSwitch";

export const CountSetup3: React.FC<CountStepProps> = ({ setCurrentSetup }) => {
  const [tone, setTone] = useState("");
  const [responseStyle, setResponseStyle] = useState("");
  const [autoHelp, setAutoHelp] = useState(false);
  const [userInitiated, setUserInitiated] = useState(false);

  const toneOptions = ["Friendly", "Professional", "Motivational", "Casual"];
  const responseStyleOptions = ["Concise", "Detailed", "step by step"];

  return (
    <div className="max-w-2xl min-w-xl my-auto mx-auto text-center space-y-10 p-4">
      <h2 className="text-lg font-medium">Set Up AI Agent Rules</h2>

      {/* Tone selection */}
      <div className="text-left">
        <label className="block text-sm font-medium mb-1">Tone of Communication</label>
        <div className="relative">
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full border px-4 py-2 rounded text-sm appearance-none focus:outline-none"
          >
            <option value="">Select</option>
            {toneOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {/* Response style */}
      <div className="text-left">
        <label className="block text-sm font-medium mb-1">Response Style</label>
        <div className="relative">
          <select
            value={responseStyle}
            onChange={(e) => setResponseStyle(e.target.value)}
            className="w-full border px-4 py-2 rounded text-sm appearance-none focus:outline-none"
          >
            <option value="">Select</option>
            {responseStyleOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {/* Auto-offer Help */}
      <div className="flex justify-between items-center text-sm">
        <div className="text-left">
          <p className="font-medium">Auto-offer help</p>
          <p className="text-gray-500 text-xs">AI pops up suggestions automatically when user lands on a page.</p>
        </div>
        <ToggleSwitch enabled={autoHelp} onToggle={() => setAutoHelp(!autoHelp)} />
      </div>

      {/* User-initiated only */}
      <div className="flex justify-between items-center text-sm">
        <div className="text-left">
          <p className="font-medium">User-initiated only</p>
          <p className="text-gray-500 text-xs">AI only responds when clicked or messaged.</p>
        </div>
        <ToggleSwitch enabled={userInitiated} onToggle={() => setUserInitiated(!userInitiated)} />
      </div>

      {/* Next button */}
      <Button
        onClick={() => setCurrentSetup(4)}
        className="w-full py-2 rounded bg-gradient-to-r from-blue-600 to-blue-300 text-white font-semibold hover:opacity-90 transition"
        // disabled={!tone || !responseStyle}
      >
        Next
      </Button>
    </div>
  );
};



import { Checkbox } from '@/components/ui/checkbox';
import { Card, } from '@/components/ui/card';


export const CountStep4: React.FC<CountStepProps>  = ({setCurrentSetup}) => {
  const [campaignName, setCampaignName] = useState('');
  const [promoterMessage, setPromoterMessage] = useState('');
  const [leadMessage, setLeadMessage] = useState('');
  const [followUpPromoter, setFollowUpPromoter] = useState('');
  const [followUpLead, setFollowUpLead] = useState('');
  const [rewardType, setRewardType] = useState<string>('Points');

  return (
    <div className=" max-w-2xl min-w-xl space-y-8 p-6">
      <div>
        <Label>Campaign Name</Label>
        <Input placeholder="e.g., Summer Referral Special" value={campaignName} onChange={e => setCampaignName(e.target.value)} />
      </div>

      <Card className="p-6 space-y-2">
        <Label className="font-semibold text-lg">Promoter Settings</Label>
        <div className="space-y-4">
            <div>
                <Label className="text-lg">Reward Setup</Label>
            </div>
                
                    {/* Reward Type */}
                    <div className="flex flex-wrap justify-between space-y-1.5">
                        <div className="space-y-2 w-5/12">
                            <Label className="text-sm font-medium flex items-center">
                                Reward Type<span className="text-destructive ml-1">*</span>
                            </Label>
                            <div
                                className={`h-14 rounded-md px-4 py-1 text-center cursor-pointer border
                                    ${rewardType === 'Points' ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-300'}`}
                                onClick={() => setRewardType('Points')}
                            >
                                <div className="text-blue-600 font-semibold text-base">Points</div>
                                <div className="text-xs text-blue-500 mt-1">
                                    ($1 is equivalent to 10 points)
                                </div>
                            </div>
                        </div>

                        {/* Reward Value Input */}
                        <div className="space-y-2 w-5/12">
                            <Label className="text-sm font-medium flex items-center">
                                Reward Value<span className="text-destructive ml-1">*</span>
                            </Label>
                            <div className="relative h-14">
                                <Input
                                placeholder="e.g., 200 points"
                                className="pl-8 h-14"
                                />
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                                $
                                </span>
                            </div>
                        </div>
                    
                    </div>
        </div>

        <div className="space-y-4">
          <Label >Promoter Message</Label>
          <Textarea className="h-20" placeholder="e.g., 'Hey! Share this with your friends and get $20 for each successful signup!'" value={promoterMessage} onChange={e => setPromoterMessage(e.target.value)} />
        </div>

        <div className="spacey-y-4">
            <Label className="font-semibold text-lg mb-4">Follow-Up Strategy</Label>
            {/* Follow-up action UI */}
            <Card className="p-4">
            <Label>Action Type</Label>
            <div className="flex space-x-4">
                <label><input type="radio" name="promoter-action" /> Email</label>
                <label><input type="radio" name="promoter-action" defaultChecked /> SMS</label>
                <label><input type="radio" name="promoter-action" /> Wait Duration</label>
            </div>
            <Select>
                <SelectTrigger><SelectValue placeholder="Select phone number" /></SelectTrigger>
                <SelectContent>
                <SelectItem value="user1">User 1</SelectItem>
                <SelectItem value="user2">User 2</SelectItem>
                </SelectContent>
            </Select>
            <Textarea placeholder="Enter message..." value={followUpPromoter} onChange={e => setFollowUpPromoter(e.target.value)} />
            <Button
                className="w-full py-2 rounded bg-gradient-to-r from-blue-600 to-blue-300 text-white font-semibold hover:opacity-90 transition"
            > 
                + Add Action
            </Button>
            </Card>
        </div>
      </Card>

      <Card className="p-6 space-y-2">
        <h2 className="font-semibold text-lg">Leads Settings</h2>
        
        <div className="space-y-4">
            <div>
                <Label className="text-lg">Reward Setup</Label>
            </div>
                
            
            <div className="flex flex-wrap justify-between space-y-1.5">
                        <div className="space-y-2 w-5/12">
                            <Label className="text-sm font-medium flex items-center">
                                Reward Type<span className="text-destructive ml-1">*</span>
                            </Label>
                            <div
                                className={`h-14 flex juxtify-center items-center rounded-md px-4 py-1 text-center cursor-pointer border
                                    ${rewardType === 'Points' ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-300'}`}
                                onClick={() => setRewardType('Points')}
                            >
                                <div className="text-blue-600 font-semibold text-base">Discount</div>
                            </div>
                        </div>

                        {/* Reward Value Input */}
                        <div className="space-y-2 w-5/12">
                            <Label className="text-sm font-medium flex items-center">
                                Reward Value<span className="text-destructive ml-1">*</span>
                            </Label>
                            <div className="relative h-14">
                                <Input
                                placeholder="e.g., 20%"
                                className="pl-8 h-14"
                                />
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                                %
                                </span>
                            </div>
                        </div>
                    
                    </div>
        </div>

        <div className="space-y-4">
          <Label>Referred Message</Label>
          <Textarea className="h-20" placeholder="e.g., 'You've been invited! Sign up now and get 15% off your first order.'" value={leadMessage} onChange={e => setLeadMessage(e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label>Form Fields</Label>
          <div className="flex flex-wrap justify-around">
            <label><Checkbox /> Full Name</label>
            <label><Checkbox /> Email Address</label>
            <label><Checkbox /> Phone Number</label>
            <label><Checkbox /> Agree</label>
          </div>
        </div>

        <div className="space-y-4">
            <h3 className="font-semibold text-md mb-4">Follow-Up Strategy</h3>
            <Card className="p-4">
            <Label>Action Type</Label>
            <div className="flex space-x-4">
                <label><input type="radio" name="lead-action" /> Email</label>
                <label><input type="radio" name="lead-action" defaultChecked /> SMS</label>
                <label><input type="radio" name="lead-action" /> Wait Duration</label>
            </div>
            <Select>
                <SelectTrigger><SelectValue placeholder="Select phone number" /></SelectTrigger>
                <SelectContent>
                <SelectItem value="user1">User 1</SelectItem>
                <SelectItem value="user2">User 2</SelectItem>
                </SelectContent>
            </Select>
            <Textarea placeholder="Enter message..." value={followUpLead} onChange={e => setFollowUpLead(e.target.value)} />
            <Button
                className="w-full py-2 rounded bg-gradient-to-r from-blue-600 to-blue-300 text-white font-semibold hover:opacity-90 transition"
            > 
                + Add Action
            </Button>
            </Card>
        </div>
      </Card>

        <Button
            onClick={()=>{
                setCurrentSetup(3);
            }}
            className="w-full py-2 rounded bg-gradient-to-r from-blue-600 to-blue-300 text-white font-semibold hover:opacity-90 transition"
        > 
          Launch
        </Button>
    </div>
  );
};


