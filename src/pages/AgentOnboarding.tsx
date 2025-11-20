import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ShieldCheck, Upload, CheckCircle2, User, Briefcase, MapPin, DollarSign, GraduationCap } from "lucide-react";
import { useLocation } from "wouter";

export default function AgentOnboarding() {
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const steps = [
    { number: 1, title: "Basic Info", icon: User },
    { number: 2, title: "Credentials", icon: ShieldCheck },
    { number: 3, title: "Specialization", icon: Briefcase },
    { number: 4, title: "Commission", icon: DollarSign },
    { number: 5, title: "Training", icon: GraduationCap },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Simulate completion
      setLocation("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container max-w-4xl py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Agent Onboarding</h1>
          <p className="text-gray-600">Complete your profile to start receiving leads</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = step.number < currentStep;
              const isCurrent = step.number === currentStep;
              
              return (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                        isCompleted
                          ? "bg-green-500 text-white"
                          : isCurrent
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        isCurrent ? "text-blue-600" : isCompleted ? "text-green-600" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 flex-1 mx-2 rounded ${
                        isCompleted ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Card */}
        <Card>
          <CardHeader>
            <CardTitle>{steps[currentStep - 1].title}</CardTitle>
            <CardDescription>Step {currentStep} of {totalSteps}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="Rajesh Kumar" defaultValue="Rajesh Kumar" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="rajesh@example.com" defaultValue="rajesh@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile Number *</Label>
                    <Input id="phone" placeholder="+91 98765 43210" defaultValue="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City/Location *</Label>
                    <Input id="city" placeholder="Mumbai" defaultValue="Mumbai" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="photo">Profile Photo</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Professional Credentials */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">RERA Verification Required</p>
                    <p className="text-xs text-blue-700 mt-1">
                      All agents must be registered with RERA to comply with regulations
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reraId">RERA Registration Number *</Label>
                  <div className="flex gap-2">
                    <Input id="reraId" placeholder="MH12345678" defaultValue="MH12345678" className="flex-1" />
                    <Button variant="outline">Verify</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reraCert">RERA Certificate Upload *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600">Upload RERA Certificate</p>
                    <p className="text-xs text-gray-500 mt-1">PDF or Image file</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Input id="experience" type="number" placeholder="5" defaultValue="5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="previousAgency">Previous Agency (Optional)</Label>
                    <Input id="previousAgency" placeholder="ABC Realty" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN Card Number *</Label>
                    <Input id="pan" placeholder="ABCDE1234F" defaultValue="ABCDE1234F" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="panUpload">PAN Card Upload *</Label>
                    <div className="border border-gray-300 rounded-lg p-3 text-center hover:border-blue-500 transition-colors cursor-pointer">
                      <Upload className="w-5 h-5 mx-auto text-gray-400" />
                      <p className="text-xs text-gray-600 mt-1">Upload PAN</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Markets & Specialization */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Primary Markets Served *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Mumbai", "Delhi NCR", "Bangalore", "Pune", "Hyderabad", "Chennai"].map((city) => (
                      <div key={city} className="flex items-center space-x-2">
                        <Checkbox id={city} defaultChecked={city === "Mumbai"} />
                        <label htmlFor={city} className="text-sm font-medium cursor-pointer">
                          {city}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Property Types *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Residential", "Commercial", "Plots/Land", "Luxury", "Affordable", "Rental"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={type} defaultChecked={["Residential", "Commercial"].includes(type)} />
                        <label htmlFor={type} className="text-sm font-medium cursor-pointer">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Client Segments *</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {["First-time Buyers", "Investors", "NRIs", "Corporate Clients"].map((segment) => (
                      <div key={segment} className="flex items-center space-x-2">
                        <Checkbox id={segment} defaultChecked={segment === "First-time Buyers"} />
                        <label htmlFor={segment} className="text-sm font-medium cursor-pointer">
                          {segment}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Languages Spoken *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Hindi", "English", "Marathi", "Tamil", "Telugu", "Kannada", "Bengali", "Gujarati"].map((lang) => (
                      <div key={lang} className="flex items-center space-x-2">
                        <Checkbox id={lang} defaultChecked={["Hindi", "English"].includes(lang)} />
                        <label htmlFor={lang} className="text-sm font-medium cursor-pointer">
                          {lang}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Commission Preferences */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="commissionRate">Standard Commission Rate (%) *</Label>
                    <Input id="commissionRate" type="number" placeholder="1.5" defaultValue="1.5" step="0.1" />
                    <p className="text-xs text-gray-500">Typical range: 1-2%</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="referralRate">Referral Commission Rate (%) *</Label>
                    <Input id="referralRate" type="number" placeholder="0.5" defaultValue="0.5" step="0.1" />
                    <p className="text-xs text-gray-500">For leads you refer to others</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Co-broking Split Preference *</Label>
                  <div className="space-y-2">
                    {[
                      { label: "50-50 Split", value: "50-50" },
                      { label: "60-40 Split (You get 60%)", value: "60-40" },
                      { label: "70-30 Split (You get 70%)", value: "70-30" },
                    ].map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id={option.value}
                          name="split"
                          defaultChecked={option.value === "50-50"}
                          className="w-4 h-4 text-blue-600"
                        />
                        <label htmlFor={option.value} className="text-sm font-medium cursor-pointer">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Payment Preference *</Label>
                  <div className="space-y-2">
                    {["Bank Transfer", "UPI"].map((method) => (
                      <div key={method} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id={method}
                          name="payment"
                          defaultChecked={method === "Bank Transfer"}
                          className="w-4 h-4 text-blue-600"
                        />
                        <label htmlFor={method} className="text-sm font-medium cursor-pointer">
                          {method}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account Number *</Label>
                    <Input id="accountNumber" placeholder="1234567890" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ifsc">IFSC Code *</Label>
                    <Input id="ifsc" placeholder="HDFC0001234" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Training & Verification */}
            {currentStep === 5 && (
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Welcome to the Platform!</h3>
                      <p className="text-sm text-gray-600">Complete your training to get started</p>
                    </div>
                  </div>
                  <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
                      </div>
                      <p className="text-sm">CRM Platform Tutorial</p>
                      <p className="text-xs text-gray-300 mt-1">Duration: 5 minutes</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Download Quick Start Guide (PDF)
                  </Button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="terms" defaultChecked />
                    <label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                      I agree to the <span className="text-blue-600 hover:underline">Terms & Conditions</span> and{" "}
                      <span className="text-blue-600 hover:underline">Privacy Policy</span>
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox id="rera-code" defaultChecked />
                    <label htmlFor="rera-code" className="text-sm cursor-pointer leading-relaxed">
                      I acknowledge and agree to follow the{" "}
                      <span className="text-blue-600 hover:underline">RERA Code of Conduct</span>
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox id="data-sharing" defaultChecked />
                    <label htmlFor="data-sharing" className="text-sm cursor-pointer leading-relaxed">
                      I consent to data sharing with builders and agencies for lead distribution
                    </label>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-900">
                    <strong>Note:</strong> Your application will be reviewed within 24-48 hours. You'll receive an email
                    and SMS notification once approved.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
                Back
              </Button>
              <Button onClick={handleNext}>
                {currentStep === totalSteps ? "Submit Application" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Success State (shown after submission) */}
        {currentStep > totalSteps && (
          <Card className="mt-6">
            <CardContent className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted Successfully!</h2>
              <p className="text-gray-600 mb-6">
                Your application is under review. You'll receive a notification within 24-48 hours.
              </p>
              <Badge variant="secondary" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Verification in Progress
              </Badge>
              <div className="mt-6">
                <Button onClick={() => setLocation("/dashboard")}>Go to Dashboard</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
