import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  MapPin,
  Bed,
  Bath,
  Square,
  Plus,
  Filter,
  TrendingUp
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

export default function Properties() {
  const properties = [
    {
      id: 1,
      name: "Prestige Lakeside",
      developer: "Prestige Group",
      location: "Whitefield, Bangalore",
      type: "Apartment",
      totalUnits: 450,
      availableUnits: 87,
      soldUnits: 363,
      configurations: ["2BHK", "3BHK", "4BHK"],
      priceRange: "₹1.2 - 2.5 Cr",
      possession: "Dec 2025",
      amenities: ["Clubhouse", "Pool", "Gym", "Park"],
      status: "selling",
      leads: 156
    },
    {
      id: 2,
      name: "Brigade Orchards",
      developer: "Brigade Group",
      location: "Devanahalli, Bangalore",
      type: "Villa",
      totalUnits: 280,
      availableUnits: 42,
      soldUnits: 238,
      configurations: ["3BHK", "4BHK"],
      priceRange: "₹1.5 - 3.2 Cr",
      possession: "Ready to Move",
      amenities: ["Clubhouse", "Pool", "Sports Complex"],
      status: "selling",
      leads: 98
    },
    {
      id: 3,
      name: "Sobha Dream Acres",
      developer: "Sobha Limited",
      location: "Panathur, Bangalore",
      type: "Apartment",
      totalUnits: 520,
      availableUnits: 124,
      soldUnits: 396,
      configurations: ["2BHK", "3BHK", "4BHK", "5BHK"],
      priceRange: "₹90L - 3.5 Cr",
      possession: "Jun 2026",
      amenities: ["Clubhouse", "Pool", "Gym", "Tennis Court"],
      status: "selling",
      leads: 203
    },
    {
      id: 4,
      name: "Godrej Aqua",
      developer: "Godrej Properties",
      location: "Bagalur, Bangalore",
      type: "Apartment",
      totalUnits: 380,
      availableUnits: 15,
      soldUnits: 365,
      configurations: ["2BHK", "3BHK"],
      priceRange: "₹80L - 1.5 Cr",
      possession: "Mar 2025",
      amenities: ["Clubhouse", "Pool", "Gym"],
      status: "limited",
      leads: 67
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Properties</h1>
            <p className="text-muted-foreground mt-1">Manage your property inventory</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Property
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-foreground">156</div>
              <p className="text-xs text-muted-foreground">Total Properties</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">1,630</div>
              <p className="text-xs text-muted-foreground">Total Units</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">268</div>
              <p className="text-xs text-muted-foreground">Available Units</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-purple-600">83.6%</div>
              <p className="text-xs text-muted-foreground">Occupancy Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Properties Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {properties.map((property) => {
            const occupancyRate = ((property.soldUnits / property.totalUnits) * 100).toFixed(1);
            return (
              <Card key={property.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  {/* Property Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <Building2 className="h-16 w-16 text-blue-600/30" />
                  </div>

                  {/* Property Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{property.name}</h3>
                          <p className="text-sm text-muted-foreground">{property.developer}</p>
                        </div>
                        <Badge 
                          variant={property.status === 'selling' ? 'default' : 'secondary'}
                          className={
                            property.status === 'selling' ? 'bg-green-100 text-green-700 hover:bg-green-100' :
                            'bg-orange-100 text-orange-700 hover:bg-orange-100'
                          }
                        >
                          {property.status === 'selling' ? 'Selling' : 'Limited Stock'}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{property.location}</span>
                      </div>
                    </div>

                    {/* Configurations */}
                    <div className="flex flex-wrap gap-2">
                      {property.configurations.map((config) => (
                        <Badge key={config} variant="outline" className="text-xs">
                          <Bed className="h-3 w-3 mr-1" />
                          {config}
                        </Badge>
                      ))}
                      <Badge variant="outline" className="text-xs">
                        {property.type}
                      </Badge>
                    </div>

                    {/* Price and Possession */}
                    <div className="grid grid-cols-2 gap-4 py-3 border-y">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Price Range</p>
                        <p className="font-semibold text-foreground">{property.priceRange}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Possession</p>
                        <p className="font-semibold text-foreground">{property.possession}</p>
                      </div>
                    </div>

                    {/* Inventory Status */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Inventory Status</span>
                        <span className="text-sm font-semibold text-foreground">{occupancyRate}% Sold</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full transition-all"
                          style={{ width: `${occupancyRate}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                        <span>{property.availableUnits} available</span>
                        <span>{property.soldUnits} sold</span>
                      </div>
                    </div>

                    {/* Leads */}
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-foreground">{property.leads} Active Leads</span>
                      </div>
                      <Button size="sm" variant="outline">View</Button>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button className="flex-1">View Details</Button>
                      <Button variant="outline" className="flex-1">Edit</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
