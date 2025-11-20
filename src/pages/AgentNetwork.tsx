import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Briefcase,
  TrendingUp,
  Share2,
  User,
  ShieldCheck,
  IndianRupee,
  Clock,
} from "lucide-react";
import { toast } from "sonner";

const sampleAgents = [
  {
    id: 1,
    name: "Priya Sharma",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    location: "Mumbai, Andheri",
    specializations: ["Residential", "Luxury"],
    rating: 4.8,
    reviews: 124,
    dealsClosed: 45,
    referrals: 23,
    reraVerified: true,
    availability: "online",
    experience: "8 years",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    location: "Delhi NCR, Gurgaon",
    specializations: ["Commercial", "Plots"],
    rating: 4.9,
    reviews: 156,
    dealsClosed: 67,
    referrals: 34,
    reraVerified: true,
    availability: "available",
    experience: "12 years",
  },
  {
    id: 3,
    name: "Anjali Patel",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
    location: "Bangalore, Whitefield",
    specializations: ["Residential", "Affordable"],
    rating: 4.7,
    reviews: 98,
    dealsClosed: 38,
    referrals: 19,
    reraVerified: true,
    availability: "online",
    experience: "6 years",
  },
  {
    id: 4,
    name: "Vikram Singh",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    location: "Pune, Hinjewadi",
    specializations: ["Commercial", "Luxury"],
    rating: 4.6,
    reviews: 87,
    dealsClosed: 32,
    referrals: 15,
    reraVerified: true,
    availability: "busy",
    experience: "5 years",
  },
  {
    id: 5,
    name: "Sneha Reddy",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
    location: "Hyderabad, HITEC City",
    specializations: ["Residential", "Rental"],
    rating: 4.9,
    reviews: 142,
    dealsClosed: 56,
    referrals: 28,
    reraVerified: true,
    availability: "online",
    experience: "10 years",
  },
  {
    id: 6,
    name: "Amit Desai",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    location: "Mumbai, Bandra",
    specializations: ["Luxury", "NRI Clients"],
    rating: 4.8,
    reviews: 119,
    dealsClosed: 41,
    referrals: 22,
    reraVerified: true,
    availability: "available",
    experience: "9 years",
  },
];

const availableLeads = [
  {
    id: 1,
    requirements: "3 BHK Apartment in South Mumbai",
    budget: "₹2.5 - 3 Cr",
    location: "South Mumbai",
    postedBy: "Priya Sharma",
    referralCommission: "0.5%",
    timePosted: "2 hours ago",
    urgency: "high",
  },
  {
    id: 2,
    requirements: "Commercial Office Space",
    budget: "₹50 L - 1 Cr",
    location: "Gurgaon, Cyber City",
    postedBy: "Rajesh Kumar",
    referralCommission: "0.75%",
    timePosted: "5 hours ago",
    urgency: "medium",
  },
  {
    id: 3,
    requirements: "Plot for Villa Construction",
    budget: "₹1 - 1.5 Cr",
    location: "Bangalore, Sarjapur Road",
    postedBy: "Anjali Patel",
    referralCommission: "0.6%",
    timePosted: "1 day ago",
    urgency: "low",
  },
];

export default function AgentNetwork() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleShareLead = (agentName: string) => {
    toast.success(`Lead sharing request sent to ${agentName}`);
  };

  const handleClaimLead = (requirements: string) => {
    toast.success(`Lead claimed: ${requirements}`);
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "online":
        return "bg-green-500";
      case "available":
        return "bg-blue-500";
      case "busy":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Agent Network</h1>
            <p className="text-gray-600 mt-1">Connect, collaborate, and share leads with agents</p>
          </div>
          <Button className="gap-2">
            <Share2 className="w-4 h-4" />
            Share Lead
          </Button>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search agents by name, location, or specialization..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex gap-6 overflow-x-auto">
            {[
              { id: "all", label: "All Agents", count: sampleAgents.length },
              { id: "referrals", label: "My Referrals", count: 12 },
              { id: "referred", label: "Referred to Me", count: 8 },
              { id: "cobroking", label: "Co-broking", count: 5 },
              { id: "favorites", label: "Favorites", count: 6 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 px-1 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600 font-medium"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
                <span className="ml-2 text-sm text-gray-500">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleAgents.map((agent) => (
            <Card key={agent.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Agent Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={agent.photo} alt={agent.name} />
                      <AvatarFallback>
                        <User className="w-8 h-8" />
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${getAvailabilityColor(
                        agent.availability
                      )}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 truncate">{agent.name}</h3>
                      {agent.reraVerified && (
                        <ShieldCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                      <span className="truncate">{agent.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{agent.rating}</span>
                      <span className="text-sm text-gray-500">({agent.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Specializations */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.specializations.map((spec) => (
                    <Badge key={spec} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{agent.dealsClosed}</div>
                    <div className="text-xs text-gray-600">Deals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{agent.referrals}</div>
                    <div className="text-xs text-gray-600">Referrals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{agent.experience.split(" ")[0]}</div>
                    <div className="text-xs text-gray-600">Years</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Profile
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => handleShareLead(agent.name)}
                  >
                    Share Lead
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lead Sharing Marketplace */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Available Leads for Collaboration</h2>
              <p className="text-gray-600 mt-1">Claim leads shared by network agents</p>
            </div>
            <Badge variant="secondary" className="text-sm">
              {availableLeads.length} Active Leads
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {availableLeads.map((lead) => (
              <Card key={lead.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{lead.requirements}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <IndianRupee className="w-4 h-4 mr-2 text-green-600" />
                          <span className="font-medium">Budget:</span>
                          <span className="ml-2">{lead.budget}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                          <span className="font-medium">Location:</span>
                          <span className="ml-2">{lead.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <User className="w-4 h-4 mr-2 text-purple-600" />
                          <span className="font-medium">Posted by:</span>
                          <span className="ml-2">{lead.postedBy}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={getUrgencyColor(lead.urgency)}>
                      {lead.urgency.charAt(0).toUpperCase() + lead.urgency.slice(1)}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center text-green-600 font-medium">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {lead.referralCommission}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {lead.timePosted}
                      </div>
                    </div>
                    <Button size="sm" onClick={() => handleClaimLead(lead.requirements)}>
                      Claim Lead
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
