import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  User,
  Bell,
  Shield,
  Zap,
  Users,
  Building2,
  MessageSquare,
  Globe,
  Check
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

export default function Settings() {
  const integrations = [
    {
      name: "WhatsApp Business",
      description: "Send and receive messages directly from CRM",
      icon: MessageSquare,
      status: "connected",
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      name: "MagicBricks",
      description: "Auto-capture leads from property portal",
      icon: Building2,
      status: "connected",
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      name: "99acres",
      description: "Sync property listings and leads",
      icon: Building2,
      status: "connected",
      color: "text-orange-600",
      bg: "bg-orange-100"
    },
    {
      name: "Google Ads",
      description: "Track ad performance and lead sources",
      icon: Globe,
      status: "not-connected",
      color: "text-gray-600",
      bg: "bg-gray-100"
    }
  ];

  const features = [
    {
      title: "AI Lead Scoring",
      description: "Automatically prioritize leads based on conversion probability",
      enabled: true
    },
    {
      title: "Voice-to-Text",
      description: "Convert voice notes to text for easy documentation",
      enabled: true
    },
    {
      title: "Automated Follow-ups",
      description: "Send automatic reminders and follow-up messages",
      enabled: true
    },
    {
      title: "Smart Notifications",
      description: "Get AI-powered alerts for important activities",
      enabled: true
    },
    {
      title: "WhatsApp Auto-reply",
      description: "Automatically respond to common queries",
      enabled: false
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your CRM configuration</p>
        </div>

        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <User className="h-5 w-5" />
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">DM</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Demo User</h3>
                <p className="text-sm text-muted-foreground">demo@realestate.com</p>
                <p className="text-xs text-muted-foreground mt-1">Sales Manager • Bangalore Team</p>
              </div>
              <Button variant="outline">Edit Profile</Button>
            </div>
          </CardContent>
        </Card>

        {/* Integrations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Zap className="h-5 w-5" />
              Integrations
            </CardTitle>
            <p className="text-sm text-muted-foreground">Connect your favorite tools and platforms</p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {integrations.map((integration) => {
                const Icon = integration.icon;
                return (
                  <div key={integration.name} className="flex items-center gap-4 p-4 rounded-lg border">
                    <div className={`rounded-full ${integration.bg} p-3`}>
                      <Icon className={`h-6 w-6 ${integration.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{integration.name}</h3>
                      <p className="text-xs text-muted-foreground">{integration.description}</p>
                    </div>
                    {integration.status === "connected" ? (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        <Check className="h-3 w-3 mr-1" />
                        Connected
                      </Badge>
                    ) : (
                      <Button size="sm" variant="outline">Connect</Button>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* AI Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Zap className="h-5 w-5" />
              AI Features
            </CardTitle>
            <p className="text-sm text-muted-foreground">Configure AI-powered automation</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                  <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${feature.enabled ? 'bg-blue-600' : 'bg-gray-300'}`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${feature.enabled ? 'translate-x-6' : 'translate-x-1'}`} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Users className="h-5 w-5" />
              Team Management
            </CardTitle>
            <p className="text-sm text-muted-foreground">Manage team members and permissions</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600">RM</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Rahul Mehta</p>
                    <p className="text-xs text-muted-foreground">rahul.m@realestate.com</p>
                  </div>
                </div>
                <Badge variant="outline">Sales Agent</Badge>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-sm font-semibold text-purple-600">PS</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Priya Singh</p>
                    <p className="text-xs text-muted-foreground">priya.s@realestate.com</p>
                  </div>
                </div>
                <Badge variant="outline">Sales Agent</Badge>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-sm font-semibold text-green-600">AK</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Amit Kumar</p>
                    <p className="text-xs text-muted-foreground">amit.k@realestate.com</p>
                  </div>
                </div>
                <Badge variant="outline">Team Lead</Badge>
              </div>

              <Button variant="outline" className="w-full">
                <Users className="h-4 w-4 mr-2" />
                Invite Team Member
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Bell className="h-5 w-5" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">New Lead Notifications</p>
                  <p className="text-sm text-muted-foreground">Get notified when new leads are assigned</p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                  <span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Follow-up Reminders</p>
                  <p className="text-sm text-muted-foreground">Remind me about pending follow-ups</p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                  <span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Site Visit Alerts</p>
                  <p className="text-sm text-muted-foreground">Alert me 30 minutes before site visits</p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                  <span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Shield className="h-5 w-5" />
              Security & Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <Button variant="outline">Enable</Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Change Password</p>
                <p className="text-sm text-muted-foreground">Update your account password</p>
              </div>
              <Button variant="outline">Change</Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Data Export</p>
                <p className="text-sm text-muted-foreground">Download your CRM data</p>
              </div>
              <Button variant="outline">Export</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
