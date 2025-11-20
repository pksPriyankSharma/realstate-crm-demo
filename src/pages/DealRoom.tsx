import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageSquare,
  Upload,
  FileText,
  CheckCircle2,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  IndianRupee,
  Calendar,
  Users,
  Send,
  Paperclip,
  Download,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

const dealInfo = {
  id: "DEAL-2025-001",
  title: "Lodha Altamount - 3 BHK Apartment",
  stage: "negotiation",
  client: {
    name: "Amit Verma",
    phone: "+91 98765 43210",
    email: "amit.verma@email.com",
    budget: "₹2.5 - 3 Cr",
  },
  property: {
    name: "Lodha Altamount, Tower A",
    type: "3 BHK Apartment",
    size: "1850 sq.ft",
    price: "₹2.75 Cr",
    location: "Malabar Hill, Mumbai",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
  },
  participants: [
    {
      name: "You (Rajesh Kumar)",
      role: "Primary Agent",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    },
    {
      name: "Priya Sharma",
      role: "Co-broking Agent",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    {
      name: "Vikram Singh",
      role: "Builder Representative",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    },
  ],
  commissionSplit: {
    total: "₹4,12,500",
    yourShare: "₹2,06,250 (50%)",
    coAgent: "₹2,06,250 (50%)",
  },
};

const activities = [
  {
    id: 1,
    type: "comment",
    user: "Priya Sharma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    content: "Client has requested a site visit this weekend. I've coordinated with the builder for Saturday 11 AM.",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "status",
    user: "System",
    avatar: null,
    content: "Deal stage updated from 'Qualified' to 'Negotiation'",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    type: "document",
    user: "Vikram Singh",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    content: "Uploaded: Floor Plan - Tower A.pdf",
    timestamp: "1 day ago",
  },
  {
    id: 4,
    type: "comment",
    user: "You (Rajesh Kumar)",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    content: "Client is interested but concerned about parking availability. Can we check if we can get 2 parking spots?",
    timestamp: "1 day ago",
  },
  {
    id: 5,
    type: "ai_summary",
    user: "AI Assistant",
    avatar: null,
    content:
      "Summary: Client Amit Verma is highly interested in the 3 BHK unit. Main concerns are parking (needs 2 spots) and possession timeline. Budget is flexible up to ₹2.8 Cr. Next steps: Site visit scheduled for Saturday, confirm parking availability.",
    timestamp: "2 days ago",
  },
];

const documents = [
  { name: "Property Brochure.pdf", size: "2.4 MB", uploadedBy: "Vikram Singh", date: "Nov 18, 2025" },
  { name: "Floor Plan - Tower A.pdf", size: "1.8 MB", uploadedBy: "Vikram Singh", date: "Nov 17, 2025" },
  { name: "Client KYC - Amit Verma.pdf", size: "890 KB", uploadedBy: "You", date: "Nov 16, 2025" },
  { name: "Payment Schedule.xlsx", size: "156 KB", uploadedBy: "Vikram Singh", date: "Nov 15, 2025" },
];

const tasks = [
  { id: 1, title: "Schedule site visit", assignee: "Priya Sharma", completed: true },
  { id: 2, title: "Confirm parking availability", assignee: "Vikram Singh", completed: false },
  { id: 3, title: "Prepare offer letter", assignee: "You", completed: false },
  { id: 4, title: "Get loan pre-approval", assignee: "Amit Verma (Client)", completed: false },
];

const milestones = [
  { stage: "Prospect", completed: true },
  { stage: "Qualified", completed: true },
  { stage: "Negotiation", completed: false, current: true },
  { stage: "Agreement", completed: false },
  { stage: "Closed", completed: false },
];

export default function DealRoom() {
  const [newComment, setNewComment] = useState("");

  const handleSendComment = () => {
    if (newComment.trim()) {
      toast.success("Comment posted successfully");
      setNewComment("");
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage.toLowerCase()) {
      case "negotiation":
        return "bg-orange-100 text-orange-800";
      case "qualified":
        return "bg-blue-100 text-blue-800";
      case "closed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">{dealInfo.title}</h1>
              <Badge className={getStageColor(dealInfo.stage)}>
                {dealInfo.stage.charAt(0).toUpperCase() + dealInfo.stage.slice(1)}
              </Badge>
            </div>
            <p className="text-gray-600">Deal ID: {dealInfo.id}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Users className="w-4 h-4" />
              Invite
            </Button>
            <Button className="gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Update Status
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Deal Info & Documents */}
          <div className="lg:col-span-1 space-y-6">
            {/* Client Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Client Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{dealInfo.client.name}</div>
                    <div className="text-sm text-gray-500">Client</div>
                  </div>
                </div>
                <div className="space-y-2 pt-2 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{dealInfo.client.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{dealInfo.client.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <IndianRupee className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Budget: {dealInfo.client.budget}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Property Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <img
                  src={dealInfo.property.image}
                  alt={dealInfo.property.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div>
                  <div className="font-medium text-gray-900">{dealInfo.property.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{dealInfo.property.type}</div>
                </div>
                <div className="space-y-2 pt-2 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-medium">{dealInfo.property.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium text-green-600">{dealInfo.property.price}</span>
                  </div>
                  <div className="flex items-start justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium text-right">{dealInfo.property.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Participants */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Participants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dealInfo.participants.map((participant, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={participant.avatar} />
                      <AvatarFallback>
                        <User className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-gray-900">{participant.name}</div>
                      <div className="text-sm text-gray-500">{participant.role}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Commission Split */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Commission Split</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Commission:</span>
                  <span className="font-semibold text-gray-900">{dealInfo.commissionSplit.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Your Share:</span>
                  <span className="font-semibold text-green-600">{dealInfo.commissionSplit.yourShare}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Co-Agent Share:</span>
                  <span className="font-semibold text-blue-600">{dealInfo.commissionSplit.coAgent}</span>
                </div>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Documents</CardTitle>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Upload className="w-4 h-4" />
                    Upload
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{doc.name}</div>
                          <div className="text-xs text-gray-500">
                            {doc.size} • {doc.date}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div key={task.id} className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        className="mt-1 w-4 h-4 text-blue-600 rounded"
                        readOnly
                      />
                      <div className="flex-1">
                        <div className={`text-sm ${task.completed ? "line-through text-gray-500" : "text-gray-900"}`}>
                          {task.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{task.assignee}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Activity Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Timeline/Milestones */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Deal Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center flex-1">
                      <div className="flex flex-col items-center flex-1">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                            milestone.completed
                              ? "bg-green-500 text-white"
                              : milestone.current
                              ? "bg-blue-600 text-white"
                              : "bg-gray-200 text-gray-500"
                          }`}
                        >
                          {milestone.completed ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            <Clock className="w-5 h-5" />
                          )}
                        </div>
                        <span
                          className={`text-xs font-medium ${
                            milestone.current
                              ? "text-blue-600"
                              : milestone.completed
                              ? "text-green-600"
                              : "text-gray-500"
                          }`}
                        >
                          {milestone.stage}
                        </span>
                      </div>
                      {index < milestones.length - 1 && (
                        <div
                          className={`h-1 flex-1 ${milestone.completed ? "bg-green-500" : "bg-gray-200"}`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activity Feed */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Activity Feed</CardTitle>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Sparkles className="w-4 h-4" />
                    AI Summary
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="flex gap-3">
                      {activity.avatar ? (
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={activity.avatar} />
                          <AvatarFallback>
                            <User className="w-5 h-5" />
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            activity.type === "ai_summary" ? "bg-purple-100" : "bg-gray-100"
                          }`}
                        >
                          {activity.type === "ai_summary" ? (
                            <Sparkles className="w-5 h-5 text-purple-600" />
                          ) : activity.type === "status" ? (
                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                          ) : (
                            <FileText className="w-5 h-5 text-gray-600" />
                          )}
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-gray-900">{activity.user}</span>
                          <span className="text-xs text-gray-500">{activity.timestamp}</span>
                        </div>
                        <div
                          className={`text-sm ${
                            activity.type === "ai_summary"
                              ? "bg-purple-50 border border-purple-200 rounded-lg p-3"
                              : "text-gray-700"
                          }`}
                        >
                          {activity.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comment Box */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Add Comment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Textarea
                    placeholder="Type your message here..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={4}
                  />
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Paperclip className="w-4 h-4" />
                      Attach File
                    </Button>
                    <Button onClick={handleSendComment} className="gap-2">
                      <Send className="w-4 h-4" />
                      Send Comment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
