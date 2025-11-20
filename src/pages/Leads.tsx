import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  Filter,
  Plus,
  MessageSquare
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

export default function Leads() {
  const leads = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.k@email.com",
      phone: "+91 98765 43210",
      property: "Prestige Lakeside, 3BHK",
      location: "Whitefield, Bangalore",
      score: 92,
      status: "hot",
      source: "MagicBricks",
      lastContact: "2 hours ago",
      budget: "₹1.2 - 1.5 Cr",
      nextAction: "Site visit scheduled"
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.s@email.com",
      phone: "+91 98765 43211",
      property: "Brigade Orchards, 2BHK",
      location: "Devanahalli, Bangalore",
      score: 85,
      status: "warm",
      source: "99acres",
      lastContact: "5 hours ago",
      budget: "₹80L - 1 Cr",
      nextAction: "Follow-up call pending"
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.p@email.com",
      phone: "+91 98765 43212",
      property: "Sobha Dream Acres, 4BHK",
      location: "Panathur, Bangalore",
      score: 78,
      status: "warm",
      source: "Facebook",
      lastContact: "1 day ago",
      budget: "₹1.5 - 2 Cr",
      nextAction: "Send brochure"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha.r@email.com",
      phone: "+91 98765 43213",
      property: "Godrej Aqua, 3BHK",
      location: "Bagalur, Bangalore",
      score: 65,
      status: "cold",
      source: "WhatsApp",
      lastContact: "3 days ago",
      budget: "₹90L - 1.1 Cr",
      nextAction: "Nurture campaign"
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram.s@email.com",
      phone: "+91 98765 43214",
      property: "Prestige Lakeside, 2BHK",
      location: "Whitefield, Bangalore",
      score: 88,
      status: "hot",
      source: "Google Ads",
      lastContact: "4 hours ago",
      budget: "₹1 - 1.2 Cr",
      nextAction: "Site visit tomorrow"
    },
    {
      id: 6,
      name: "Anita Desai",
      email: "anita.d@email.com",
      phone: "+91 98765 43215",
      property: "Brigade Orchards, 3BHK",
      location: "Devanahalli, Bangalore",
      score: 72,
      status: "warm",
      source: "Instagram",
      lastContact: "1 day ago",
      budget: "₹1.1 - 1.3 Cr",
      nextAction: "Send pricing details"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Leads</h1>
            <p className="text-muted-foreground mt-1">Manage and track your sales leads</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Lead
            </Button>
          </div>
        </div>

        {/* AI Insights */}
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">AI Insight:</span> 3 high-priority leads need immediate attention. Rajesh Kumar and Vikram Singh are ready for site visits.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-foreground">1,284</div>
              <p className="text-xs text-muted-foreground">Total Leads</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-red-600">156</div>
              <p className="text-xs text-muted-foreground">Hot Leads</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-600">428</div>
              <p className="text-xs text-muted-foreground">Warm Leads</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">32%</div>
              <p className="text-xs text-muted-foreground">Conversion Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Leads List */}
        <div className="space-y-4">
          {leads.map((lead) => (
            <Card key={lead.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  {/* Lead Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-semibold text-primary">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{lead.name}</h3>
                        <Badge 
                          variant={lead.status === 'hot' ? 'default' : 'secondary'}
                          className={
                            lead.status === 'hot' ? 'bg-red-100 text-red-700 hover:bg-red-100' :
                            lead.status === 'warm' ? 'bg-orange-100 text-orange-700 hover:bg-orange-100' :
                            'bg-blue-100 text-blue-700 hover:bg-blue-100'
                          }
                        >
                          {lead.status}
                        </Badge>
                        <div className="flex items-center gap-1 ml-auto lg:ml-0">
                          <Sparkles className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-semibold text-foreground">AI Score: {lead.score}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <span>{lead.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span className="truncate">{lead.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span className="truncate">{lead.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{lead.lastContact}</span>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">
                          {lead.property}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {lead.budget}
                        </Badge>
                        <Badge variant="outline" className="text-xs bg-blue-50">
                          Source: {lead.source}
                        </Badge>
                      </div>

                      <p className="mt-2 text-sm text-blue-600 font-medium">
                        Next: {lead.nextAction}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex lg:flex-col gap-2">
                    <Button size="sm" className="flex-1 lg:flex-none">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 lg:flex-none">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
