import { Eye, MessageSquare, Send } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { useEffect } from 'react'
import { useBreadcrumb } from '@/context/BreaderCrumbContext'
import { useLocation } from 'react-router-dom'

const leadsData = [
  { name: 'Emery Dokidis', email: 'emerydoki@gmail.com', contact: '+979970174715', coupon: 'SAVE10NOW', status: 'Pending' },
  { name: 'Kadin Lipshutz', email: 'kadinlipshutz@gmail.com', contact: '+971501948279', coupon: 'WELCOME15', status: 'Pending' },
  { name: 'Randy Culhane', email: 'randyculhane@gmail.com', contact: '+971501598978', coupon: 'EXCLUSIVE20', status: 'Pending' },
  { name: 'Jaxson Vaccaro', email: 'jaxonvaccaro@gmail.com', contact: '+971522503635', coupon: 'GETDEAL25', status: 'Completed' },
  { name: 'Jocelyn Levin', email: 'jocelynlevin@gmail.com', contact: '+971554315300', coupon: 'FIRSTORDER10', status: 'Pending' },
  { name: 'Maren Septimus', email: 'marenseptimus@gmail.com', contact: '+971525620832', coupon: 'SPECIALSAVE15', status: 'Completed' },
  { name: 'Haylie Saris', email: 'hayluesaris@gmail.com', contact: '+971503328228', coupon: 'LIMITED20', status: 'Completed' },
  { name: 'Randy Herwitz', email: 'randyherwitz@gmail.com', contact: '+971554231522', coupon: 'TRYUS10', status: 'Pending' },
];

export default function LeadsTable() {
  const [selected, setSelected] = useState<number[]>([0, 1]);

  const { addItem, clearItems } = useBreadcrumb()
    const location = useLocation()
    useEffect(() => {
      setTimeout(() => {
        clearItems()
        addItem({ url: location.pathname, name: 'Your Leads' }) // or dynamic name
      }, 0)
    }, [location.pathname])

  const toggleSelect = (index: number) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };


  const [loading, setLoading] = useState(true)
      
          useEffect(() => {
            const timer = setTimeout(() => {
              setLoading(false)
            }, 3000)
      
            return () => clearTimeout(timer)
          }, [])
  
          if(loading){
            return <LeadsSkelton />
          }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Leads</h2>
        <div className="flex space-x-2">
          <Input placeholder="Search" className="w-64" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Change Status</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Pending</DropdownMenuItem>
              <DropdownMenuItem>Completed</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline">Filter</Button>
        </div>
      </div>
      <div className="rounded-xl border p-4">
        <div className="grid grid-cols-8 font-medium text-sm text-muted-foreground border-b pb-2 mb-2">
          <div><Checkbox /></div>
          <div className="col-span-1">Lead Name</div>
          <div className="col-span-2">Email ID</div>
          <div>Contact No.</div>
          <div>Coupon Code</div>
          <div>Status</div>
          <div>Actions</div>
        </div>
        {leadsData.map((lead, index) => (
          <div key={index} className="grid grid-cols-8 items-center py-2 border-b text-sm">
            <div>
              <Checkbox
                checked={selected.includes(index)}
                onCheckedChange={() => toggleSelect(index)}
              />
            </div>
            <div className="col-span-1 font-medium text-blue-600">{lead.name}</div>
            <div className="col-span-2 text-gray-600">{lead.email}</div>
            <div>{lead.contact}</div>
            <div>{lead.coupon}</div>
            <div>
              <span
                className={`px-2 py-1 text-xs rounded-md ${
                  lead.status === 'Completed'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-orange-100 text-orange-600'
                }`}
              >
                {lead.status}
              </span>
            </div>
            <div className="flex space-x-2 text-muted-foreground">
              <Eye className="w-4 h-4 cursor-pointer"/>
              <MessageSquare className="w-4 h-4 cursor-pointer" />
              <Send className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export const LeadsSkelton = ()=>{
  return <div className="p-6 animate-pulse">
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-xl font-semibold">Leads</h2>
    <div className="flex space-x-2">
      <div className="w-64 h-10 bg-gray-200 rounded-md"></div>
      <div className="w-32 h-10 bg-gray-200 rounded-md"></div>
      <div className="w-24 h-10 bg-gray-200 rounded-md"></div>
    </div>
  </div>
  <div className="rounded-xl border p-4">
    <div className="grid grid-cols-8 font-medium text-sm text-muted-foreground border-b pb-2 mb-2">
      <div><div className="w-4 h-4 bg-gray-200 rounded"></div></div>
      <div className="col-span-1">Lead Name</div>
      <div className="col-span-2">Email ID</div>
      <div>Contact No.</div>
      <div>Coupon Code</div>
      <div>Status</div>
      <div>Actions</div>
    </div>

    {/* Repeat this block to show multiple loading rows */}
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="grid grid-cols-8 items-center py-2 border-b text-sm">
        <div>
          <div className="w-4 h-4 bg-gray-200 rounded" />
        </div>
        <div className="col-span-1">
          <div className="h-4 bg-gray-200 rounded w-24" />
        </div>
        <div className="col-span-2">
          <div className="h-4 bg-gray-200 rounded w-32" />
        </div>
        <div>
          <div className="h-4 bg-gray-200 rounded w-20" />
        </div>
        <div>
          <div className="h-4 bg-gray-200 rounded w-20" />
        </div>
        <div>
          <div className="h-4 bg-gray-200 rounded w-16" />
        </div>
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-gray-200 rounded" />
          <div className="w-4 h-4 bg-gray-200 rounded" />
          <div className="w-4 h-4 bg-gray-200 rounded" />
        </div>
      </div>
    ))}
  </div>
</div>

}
