import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  Building2,
  DollarSign,
  Phone,
  Calendar,
  MapPin,
  Sparkles
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Leads",
      value: "1,284",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Properties",
      value: "156",
      change: "+8.2%",
      trend: "up",
      icon: Building2,
      color: "text-green-600"
    },
    {
      title: "Deals Closed",
      value: "42",
      change: "+23.1%",
      trend: "up",
      icon: DollarSign,
      color: "text-purple-600"
    },
    {
      title: "Site Visits",
      value: "89",
      change: "+5.4%",
      trend: "up",
      icon: MapPin,
      color: "text-orange-600"
    }
  ];

  const recentLeads = [
    {
      name: "Rajesh Kumar",
      property: "Prestige Lakeside",
      score: 92,
      status: "hot",
      phone: "+91 98765 43210",
      lastContact: "2 hours ago"
    },
    {
      name: "Priya Sharma",
      property: "Brigade Orchards",
      score: 85,
      status: "warm",
      phone: "+91 98765 43211",
      lastContact: "5 hours ago"
    },
    {
      name: "Amit Patel",
      property: "Sobha Dream Acres",
      score: 78,
      status: "warm",
      phone: "+91 98765 43212",
      lastContact: "1 day ago"
    },
    {
      name: "Sneha Reddy",
      property: "Godrej Aqua",
      score: 65,
      status: "cold",
      phone: "+91 98765 43213",
      lastContact: "3 days ago"
    }
  ];

  const upcomingActivities = [
    {
      type: "Site Visit",
      client: "Rajesh Kumar",
      property: "Prestige Lakeside",
      time: "Today, 2:00 PM"
    },
    {
      type: "Follow-up Call",
      client: "Priya Sharma",
      property: "Brigade Orchards",
      time: "Today, 4:30 PM"
    },
    {
      type: "Site Visit",
      client: "Vikram Singh",
      property: "Sobha Dream Acres",
      time: "Tomorrow, 10:00 AM"
    },
    {
      type: "Meeting",
      client: "Anita Desai",
      property: "Godrej Aqua",
      time: "Tomorrow, 3:00 PM"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="flex items-center text-xs text-green-600 mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.change} from last month
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI Insights Banner */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-3">
                <Sparkles className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">AI-Powered Insights</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Your top 3 leads have shown increased engagement. Consider prioritizing follow-ups with Rajesh Kumar, Priya Sharma, and Amit Patel this week.
                </p>
                <Badge className="bg-blue-600 text-white">View Recommendations</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Leads */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Recent Leads</CardTitle>
              <p className="text-sm text-muted-foreground">AI-scored leads from the last 24 hours</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentLeads.map((lead) => (
                  <div key={lead.name} className="flex items-center gap-4 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-foreground truncate">{lead.name}</p>
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
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{lead.property}</p>
                      <p className="text-xs text-muted-foreground">{lead.lastContact}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1">
                        <Sparkles className="h-3 w-3 text-yellow-500" />
                        <span className="text-sm font-semibold text-foreground">{lead.score}</span>
                      </div>
                      <Phone className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Upcoming Activities</CardTitle>
              <p className="text-sm text-muted-foreground">Your schedule for the next 48 hours</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-lg border">
                    <div className="rounded-full bg-blue-100 p-2 mt-1">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-foreground">{activity.type}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{activity.client}</p>
                      <p className="text-xs text-muted-foreground">{activity.property}</p>
                      <p className="text-xs text-blue-600 mt-1 font-medium">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
