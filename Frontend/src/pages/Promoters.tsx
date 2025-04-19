import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, MessageCircle, Share2 } from 'lucide-react';

const promoterData = [
    {
      name: "Emery Dokidis",
      contact: "+979970717415",
      leads: 12,
      conversion: "50%",
      lastFollowUp: "28-4-2024",
      revenue: "$50",
      status: "Active",
    },
    {
      name: "Kadin Lipshutz",
      contact: "+971501948279",
      leads: 8,
      conversion: "30%",
      lastFollowUp: "27-5-2024",
      revenue: "$900",
      status: "Active",
    },
    {
      name: "Randy Culhane",
      contact: "+971501598978",
      leads: 15,
      conversion: "60%",
      lastFollowUp: "29-5-2024",
      revenue: "$1000",
      status: "Inactive",
    },
    {
      name: "Jaxson Vaccaro",
      contact: "+971522503635",
      leads: 10,
      conversion: "45%",
      lastFollowUp: "30-6-2024",
      revenue: "$500",
      status: "Completed",
    },
    {
      name: "Jocelyn Levin",
      contact: "+971554315300",
      leads: 6,
      conversion: "28%",
      lastFollowUp: "01-7-2024",
      revenue: "$1,500",
      status: "Inactive",
    },
    {
      name: "Maren Septimus",
      contact: "+971525620832",
      leads: 18,
      conversion: "65%",
      lastFollowUp: "03-7-2024",
      revenue: "$2,000",
      status: "Completed",
    },
    {
      name: "Haylie Saris",
      contact: "+971503328228",
      leads: 13,
      conversion: "58%",
      lastFollowUp: "05-7-2024",
      revenue: "$300",
      status: "Active",
    },
    {
      name: "Randy Herwitz",
      contact: "+971554231522",
      leads: 12,
      conversion: "50%",
      lastFollowUp: "10-7-2024",
      revenue: "$600",
      status: "Inactive",
    },
  ];
  

const statusColors = {
  Active: 'bg-blue-100 text-blue-600',
  Inactive: 'bg-orange-100 text-orange-600',
  Completed: 'bg-green-100 text-green-600',
};
type PromoterStatus = 'Active' | 'Inactive' | 'Completed';

export default function PromoterDashboard() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button className="bg-blue-600 text-white">+ New Promoter</Button>
        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
          Ask Past Customers For Referrals
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Total Customers</p>
            <p className="text-lg font-semibold">8</p>
            <p className="text-xs text-green-600">+12% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">New Customers</p>
            <p className="text-lg font-semibold">94</p>
            <p className="text-xs text-green-600">+8% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Average Conversion rate</p>
            <p className="text-lg font-semibold">64%</p>
            <p className="text-xs text-red-500">-3% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Total Revenue Generated</p>
            <p className="text-lg font-semibold">$23,900</p>
            <p className="text-xs text-green-600">+15% vs last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-xs uppercase text-gray-600">
              <tr>
                <th className="p-4">
                  <input type="checkbox" />
                </th>
                <th className="p-4">Promoter Name</th>
                <th className="p-4">Contact No.</th>
                <th className="p-4">Leads</th>
                <th className="p-4">Conversion Rate</th>
                <th className="p-4">Last Follow-Up</th>
                <th className="p-4">Revenue Generated</th>
                <th className="p-4">Referrer Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {promoterData.map((promoter, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50 transition-all">
                  <td className="p-4">
                    <input type="checkbox" />
                  </td>
                  <td className="p-4 font-medium text-gray-800">{promoter.name}</td>
                  <td className="p-4">{promoter.contact}</td>
                  <td className="p-4">{promoter.leads}</td>
                  <td className="p-4">{promoter.conversion}</td>
                  <td className="p-4">{promoter.lastFollowUp}</td>
                  <td className="p-4">{promoter.revenue}</td>
                  <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[promoter.status as PromoterStatus]
                    }`}
                    >
                    {promoter.status}
                   </span>
                  </td>
                  <td className="p-4 flex justify-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
