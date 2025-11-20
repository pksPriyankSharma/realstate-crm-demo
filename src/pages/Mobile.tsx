import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  MapPin,
  Camera,
  Mic,
  Wifi,
  WifiOff,
  Bell,
  MessageSquare,
  Phone,
  Calendar
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

export default function Mobile() {
  const features = [
    {
      icon: MapPin,
      title: "GPS Check-in",
      description: "Automatically log site visits with GPS location tracking",
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      icon: Camera,
      title: "Instant Photo Capture",
      description: "Take and attach photos directly to leads and properties",
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      icon: Mic,
      title: "Voice-to-Text Notes",
      description: "Speak your notes and let AI convert them to text instantly",
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    {
      icon: WifiOff,
      title: "Offline Mode",
      description: "Work without internet, sync automatically when online",
      color: "text-orange-600",
      bg: "bg-orange-100"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Integration",
      description: "Send messages and track conversations from the app",
      color: "text-teal-600",
      bg: "bg-teal-100"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get AI-powered reminders for follow-ups and site visits",
      color: "text-red-600",
      bg: "bg-red-100"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mobile App</h1>
          <p className="text-muted-foreground mt-1">Mobile-first CRM for field agents</p>
        </div>

        {/* Hero Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Work Anywhere, Anytime</h2>
                <p className="text-blue-100 mb-6">
                  Our mobile app is designed specifically for real estate field agents. 
                  Capture leads, log site visits, and close deals on the go with powerful 
                  mobile-first features.
                </p>
                <div className="flex gap-4">
                  <Badge className="bg-white text-blue-600 hover:bg-white">
                    iOS App Coming Soon
                  </Badge>
                  <Badge className="bg-white text-blue-600 hover:bg-white">
                    Android App Coming Soon
                  </Badge>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="relative">
                  {/* Phone mockup */}
                  <div className="w-64 h-[500px] bg-white rounded-3xl shadow-2xl p-3">
                    <div className="h-full bg-gradient-to-b from-blue-50 to-white rounded-2xl overflow-hidden">
                      {/* Status bar */}
                      <div className="h-8 bg-blue-600 flex items-center justify-between px-4">
                        <span className="text-xs text-white">9:41</span>
                        <div className="flex gap-1">
                          <Wifi className="h-3 w-3 text-white" />
                          <div className="w-4 h-3 bg-white rounded-sm" />
                        </div>
                      </div>
                      
                      {/* App content */}
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-800">Today's Tasks</h3>
                          <Bell className="h-5 w-5 text-gray-600" />
                        </div>
                        
                        {/* Task cards */}
                        <div className="space-y-2">
                          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-2 mb-1">
                              <Phone className="h-4 w-4 text-blue-600" />
                              <span className="text-xs font-medium text-gray-800">Follow-up Call</span>
                            </div>
                            <p className="text-xs text-gray-600">Rajesh Kumar - 2:00 PM</p>
                          </div>
                          
                          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-2 mb-1">
                              <MapPin className="h-4 w-4 text-green-600" />
                              <span className="text-xs font-medium text-gray-800">Site Visit</span>
                            </div>
                            <p className="text-xs text-gray-600">Prestige Lakeside - 4:30 PM</p>
                          </div>
                          
                          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-2 mb-1">
                              <Calendar className="h-4 w-4 text-purple-600" />
                              <span className="text-xs font-medium text-gray-800">Meeting</span>
                            </div>
                            <p className="text-xs text-gray-600">Priya Sharma - Tomorrow</p>
                          </div>
                        </div>
                        
                        {/* Quick stats */}
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          <div className="bg-blue-100 rounded-lg p-2">
                            <p className="text-xs text-gray-600">Hot Leads</p>
                            <p className="text-lg font-bold text-blue-600">12</p>
                          </div>
                          <div className="bg-green-100 rounded-lg p-2">
                            <p className="text-xs text-gray-600">This Week</p>
                            <p className="text-lg font-bold text-green-600">8</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`rounded-full ${feature.bg} p-3 w-fit mb-4`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Use Cases */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Perfect for Field Agents</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">On-Site Lead Capture</h3>
                    <p className="text-sm text-muted-foreground">
                      Capture lead details instantly during property visits. Take photos, 
                      record voice notes, and log GPS location automatically.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-green-600">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Quick Follow-ups</h3>
                    <p className="text-sm text-muted-foreground">
                      Get smart reminders for follow-ups. Make calls, send WhatsApp messages, 
                      and update lead status right from your phone.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-purple-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Offline Capability</h3>
                    <p className="text-sm text-muted-foreground">
                      Work seamlessly even without internet. All data syncs automatically 
                      when you're back online.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-orange-600">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Real-time Updates</h3>
                    <p className="text-sm text-muted-foreground">
                      Stay in sync with your team. See real-time property availability, 
                      pricing updates, and lead assignments instantly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-teal-600">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Performance Tracking</h3>
                    <p className="text-sm text-muted-foreground">
                      View your daily, weekly, and monthly performance metrics. Track your 
                      targets and commissions on the go.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-red-600">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">AI Assistance</h3>
                    <p className="text-sm text-muted-foreground">
                      Get AI-powered suggestions for next best actions, lead prioritization, 
                      and optimal follow-up times.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
          <CardContent className="p-8 text-center">
            <Smartphone className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Coming Soon</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our mobile app is currently in development. Sign up to be notified when it launches 
              and get early access to exclusive features.
            </p>
            <Badge className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-2 text-base">
              Notify Me
            </Badge>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
