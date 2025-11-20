import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  IndianRupee,
  TrendingUp,
  Clock,
  CheckCircle2,
  Download,
  Calculator,
  ChevronDown,
  ChevronUp,
  Calendar,
} from "lucide-react";
import { useState } from "react";

const commissionData = [
  {
    id: "TXN001",
    property: "Lodha Altamount, 3 BHK",
    client: "Amit Verma",
    closeDate: "2025-11-15",
    salePrice: 25000000,
    commissionRate: 1.5,
    grossCommission: 375000,
    splits: [
      { type: "Co-broking", agent: "Priya Sharma", amount: 187500 },
      { type: "Your Share", agent: "You", amount: 187500 },
    ],
    deductions: [
      { type: "Brokerage Fee", amount: 18750 },
      { type: "TDS", amount: 7500 },
    ],
    netCommission: 161250,
    status: "paid",
    paymentDate: "2025-11-20",
  },
  {
    id: "TXN002",
    property: "DLF Cyber City, Office Space",
    client: "TechCorp Solutions",
    closeDate: "2025-11-10",
    salePrice: 50000000,
    commissionRate: 2.0,
    grossCommission: 1000000,
    splits: [],
    deductions: [
      { type: "Brokerage Fee", amount: 100000 },
      { type: "TDS", amount: 20000 },
    ],
    netCommission: 880000,
    status: "pending",
    paymentDate: null,
  },
  {
    id: "TXN003",
    property: "Prestige Lakeside, Villa",
    client: "Rajesh Khanna",
    closeDate: "2025-11-05",
    salePrice: 35000000,
    commissionRate: 1.8,
    grossCommission: 630000,
    splits: [
      { type: "Referral", agent: "Anjali Patel", amount: 63000 },
      { type: "Your Share", agent: "You", amount: 567000 },
    ],
    deductions: [
      { type: "Brokerage Fee", amount: 56700 },
      { type: "TDS", amount: 11340 },
    ],
    netCommission: 498960,
    status: "processing",
    paymentDate: null,
  },
];

const summaryStats = {
  thisMonth: 1540210,
  pending: 1378960,
  referralEarnings: 245000,
  avgCommission: 513403,
};

export default function CommissionManagement() {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-orange-100 text-orange-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle2 className="w-3 h-3" />;
      case "pending":
        return <Clock className="w-3 h-3" />;
      case "processing":
        return <TrendingUp className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Commission Management</h1>
            <p className="text-gray-600 mt-1">Track your earnings and payment status</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Calculator className="w-4 h-4" />
              Calculator
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Total Earnings</span>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <IndianRupee className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                ₹{summaryStats.thisMonth.toLocaleString("en-IN")}
              </div>
              <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>+12.5% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Pending Commissions</span>
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                ₹{summaryStats.pending.toLocaleString("en-IN")}
              </div>
              <div className="text-sm text-gray-600 mt-2">2 transactions</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Referral Earnings</span>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                ₹{summaryStats.referralEarnings.toLocaleString("en-IN")}
              </div>
              <div className="text-sm text-gray-600 mt-2">From 15 referrals</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Average Commission</span>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                ₹{summaryStats.avgCommission.toLocaleString("en-IN")}
              </div>
              <div className="text-sm text-gray-600 mt-2">Per transaction</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="w-4 h-4" />
                This Month
              </Button>
              <Button variant="outline" size="sm">
                All Transactions
              </Button>
              <Button variant="outline" size="sm">
                Paid
              </Button>
              <Button variant="outline" size="sm">
                Pending
              </Button>
              <Button variant="outline" size="sm">
                Referrals Only
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Commission Table */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {commissionData.map((transaction) => (
                <div key={transaction.id} className="border rounded-lg overflow-hidden">
                  {/* Main Row */}
                  <div className="p-4 bg-white hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-5 gap-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{transaction.id}</div>
                          <div className="text-sm text-gray-600 mt-1">{transaction.property}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Client</div>
                          <div className="text-sm font-medium text-gray-900 mt-1">{transaction.client}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Sale Price</div>
                          <div className="text-sm font-medium text-gray-900 mt-1">
                            ₹{(transaction.salePrice / 10000000).toFixed(2)} Cr
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Net Commission</div>
                          <div className="text-sm font-bold text-green-600 mt-1">
                            ₹{transaction.netCommission.toLocaleString("en-IN")}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Status</div>
                          <Badge className={`${getStatusColor(transaction.status)} gap-1`}>
                            {getStatusIcon(transaction.status)}
                            {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleRow(transaction.id)}
                        className="ml-4"
                      >
                        {expandedRow === transaction.id ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedRow === transaction.id && (
                    <div className="p-4 bg-gray-50 border-t">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Commission Breakdown</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Sale Price:</span>
                                <span className="font-medium">
                                  ₹{transaction.salePrice.toLocaleString("en-IN")}
                                </span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Commission Rate:</span>
                                <span className="font-medium">{transaction.commissionRate}%</span>
                              </div>
                              <div className="flex justify-between text-sm font-semibold border-t pt-2">
                                <span className="text-gray-900">Gross Commission:</span>
                                <span className="text-gray-900">
                                  ₹{transaction.grossCommission.toLocaleString("en-IN")}
                                </span>
                              </div>
                            </div>
                          </div>

                          {transaction.splits.length > 0 && (
                            <div>
                              <h4 className="text-sm font-semibold text-gray-900 mb-3">Commission Splits</h4>
                              <div className="space-y-2">
                                {transaction.splits.map((split, index) => (
                                  <div key={index} className="flex justify-between text-sm">
                                    <span className="text-gray-600">
                                      {split.type} - {split.agent}:
                                    </span>
                                    <span className="font-medium">₹{split.amount.toLocaleString("en-IN")}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Deductions</h4>
                            <div className="space-y-2">
                              {transaction.deductions.map((deduction, index) => (
                                <div key={index} className="flex justify-between text-sm">
                                  <span className="text-gray-600">{deduction.type}:</span>
                                  <span className="text-red-600">-₹{deduction.amount.toLocaleString("en-IN")}</span>
                                </div>
                              ))}
                              <div className="flex justify-between text-sm font-bold border-t pt-2">
                                <span className="text-gray-900">Net Commission:</span>
                                <span className="text-green-600">
                                  ₹{transaction.netCommission.toLocaleString("en-IN")}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Payment Details</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Close Date:</span>
                                <span className="font-medium">
                                  {new Date(transaction.closeDate).toLocaleDateString("en-IN")}
                                </span>
                              </div>
                              {transaction.paymentDate && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">Payment Date:</span>
                                  <span className="font-medium">
                                    {new Date(transaction.paymentDate).toLocaleDateString("en-IN")}
                                  </span>
                                </div>
                              )}
                              {!transaction.paymentDate && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">Expected Payment:</span>
                                  <span className="font-medium text-orange-600">Within 7 days</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex gap-2 pt-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              <Download className="w-4 h-4 mr-2" />
                              Invoice
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Commission Calculator Widget */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Quick Commission Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Sale Price (₹)</label>
                <input
                  type="number"
                  placeholder="25000000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Commission Rate (%)</label>
                <input
                  type="number"
                  placeholder="1.5"
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Co-broking Split (%)</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="100">None (100%)</option>
                  <option value="50">50-50</option>
                  <option value="60">60-40</option>
                  <option value="70">70-30</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Calculate</label>
                <Button className="w-full">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate
                </Button>
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Estimated Net Commission:</span>
                <span className="text-2xl font-bold text-green-600">₹3,75,000</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
