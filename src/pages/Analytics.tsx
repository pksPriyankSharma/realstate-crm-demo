import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  Download,
  Calendar,
  DollarSign,
  Users,
  Building2,
  Target
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

export default function Analytics() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "₹42.5 Cr",
      change: "+18.2%",
      trend: "up",
      icon: DollarSign
    },
    {
      title: "Conversion Rate",
      value: "32.4%",
      change: "+5.1%",
      trend: "up",
      icon: Target
    },
    {
      title: "Avg. Deal Size",
      value: "₹1.8 Cr",
      change: "-2.3%",
      trend: "down",
      icon: TrendingUp
    },
    {
      title: "Active Clients",
      value: "1,284",
      change: "+12.5%",
      trend: "up",
      icon: Users
    }
  ];

  const leadSources = [
    { name: "MagicBricks", leads: 425, percentage: 33, color: "bg-blue-500" },
    { name: "99acres", leads: 312, percentage: 24, color: "bg-green-500" },
    { name: "Facebook", leads: 256, percentage: 20, color: "bg-purple-500" },
    { name: "Google Ads", leads: 198, percentage: 15, color: "bg-orange-500" },
    { name: "WhatsApp", leads: 93, percentage: 8, color: "bg-teal-500" }
  ];

  const topPerformers = [
    { name: "Rahul Mehta", deals: 28, revenue: "₹8.2 Cr", conversion: "38%" },
    { name: "Priya Singh", deals: 24, revenue: "₹6.8 Cr", conversion: "35%" },
    { name: "Amit Kumar", deals: 21, revenue: "₹5.9 Cr", conversion: "32%" },
    { name: "Sneha Patel", deals: 19, revenue: "₹5.2 Cr", conversion: "30%" }
  ];

  const monthlyData = [
    { month: "Jan", leads: 820, conversions: 245, revenue: 28.5 },
    { month: "Feb", leads: 950, conversions: 298, revenue: 32.8 },
    { month: "Mar", leads: 1100, conversions: 342, revenue: 38.2 },
    { month: "Apr", leads: 1280, conversions: 398, revenue: 42.5 }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
            <p className="text-muted-foreground mt-1">Track your performance and insights</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Last 30 Days
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
            return (
              <Card key={metric.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <Icon className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                  <div className={`flex items-center text-xs mt-1 ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendIcon className="h-3 w-3 mr-1" />
                    {metric.change} from last month
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Lead Sources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Lead Sources</CardTitle>
              <p className="text-sm text-muted-foreground">Distribution of leads by source</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leadSources.map((source) => (
                  <div key={source.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{source.name}</span>
                      <span className="text-muted-foreground">{source.leads} leads ({source.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${source.color} h-2 rounded-full transition-all`}
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Performers */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Top Performers</CardTitle>
              <p className="text-sm text-muted-foreground">Best performing sales agents this month</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={performer.name} className="flex items-center gap-4 p-3 rounded-lg border">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 flex-shrink-0">
                      <span className="font-bold text-primary">#{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{performer.name}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                        <span>{performer.deals} deals</span>
                        <span>•</span>
                        <span>{performer.revenue}</span>
                        <span>•</span>
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                          {performer.conversion}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Monthly Performance</CardTitle>
            <p className="text-sm text-muted-foreground">Leads, conversions, and revenue trends</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Simple bar chart representation */}
              <div className="grid grid-cols-4 gap-4">
                {monthlyData.map((data) => (
                  <div key={data.month} className="space-y-2">
                    <div className="text-center">
                      <p className="text-xs font-medium text-muted-foreground mb-2">{data.month}</p>
                      
                      {/* Leads bar */}
                      <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden">
                        <div 
                          className="absolute bottom-0 w-full bg-blue-500 transition-all"
                          style={{ height: `${(data.leads / 1500) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{data.leads} leads</p>
                    </div>
                    
                    <div className="text-center space-y-1 pt-2 border-t">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Conversions:</span>
                        <span className="font-medium text-foreground">{data.conversions}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Revenue:</span>
                        <span className="font-medium text-green-600">₹{data.revenue}Cr</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-blue-500" />
                  <span className="text-sm text-muted-foreground">Total Leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-green-600" />
                  <span className="text-sm text-muted-foreground">Revenue (Cr)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-3">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">AI-Powered Insights</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• MagicBricks is your top-performing lead source with 33% of total leads</li>
                  <li>• Conversion rate has improved by 5.1% this month - keep up the momentum!</li>
                  <li>• Weekend site visits have 12% higher conversion rates than weekday visits</li>
                  <li>• Consider increasing budget for Google Ads - it has the highest quality leads</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
