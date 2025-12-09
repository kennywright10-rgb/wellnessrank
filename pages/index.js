import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Globe, Star, Clock, Award } from 'lucide-react';

// Sample data structure for Alpharetta providers
const alpharettaProviders = [
  {
    id: 1,
    name: "Restore Hyper Wellness",
    rank: 1,
    address: "Avalon, Alpharetta, GA",
    phone: "(770) 555-0001",
    website: "https://www.restore.com",
    rating: 4.8,
    reviewCount: 156,
    services: ["IV Drip Therapy", "Cryotherapy", "Red Light Therapy", "Infrared Sauna", "Compression"],
    priceRange: "$$$",
    hours: "Mon-Fri: 8am-8pm, Sat-Sun: 9am-6pm",
    description: "Full-service wellness center offering IV therapy with membership options. Features a variety of core therapies and specialty services.",
    specialties: ["Energy Boost", "Recovery", "Immune Support", "NAD+ Therapy"],
    membershipAvailable: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Activate IV and Cryotherapy",
    rank: 2,
    address: "210 S Main St, Ste B, Alpharetta, GA 30009",
    phone: "(833) 879-2796",
    website: "https://stationhydration.com",
    rating: 4.7,
    reviewCount: 89,
    services: ["IV Therapy", "Cryotherapy", "Myers Cocktail", "Custom IV Blends"],
    priceRange: "$$",
    hours: "Mon-Thu: 10am-7pm, Fri-Sat: 10am-4pm, Sun: 12pm-4pm",
    description: "Boutique wellness spa offering personalized IV therapy and cryotherapy in historic downtown Alpharetta.",
    specialties: ["Myers Cocktail", "Hangover Relief", "Athletic Recovery", "Immune Boost"],
    membershipAvailable: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Mobile IV Medics",
    rank: 3,
    address: "Mobile Service - Serves All Alpharetta",
    phone: "(404) 555-0003",
    website: "https://mobileivmedics.com",
    rating: 4.9,
    reviewCount: 234,
    services: ["Mobile IV Therapy", "NAD+ IV", "Vitamin Drips", "At-Home Service"],
    priceRange: "$$$$",
    hours: "Daily: 8am-8pm (Mobile appointments)",
    description: "Premium mobile IV therapy service delivering wellness directly to your home, office, or hotel in Alpharetta.",
    specialties: ["NAD+ Therapy", "Mobile Service", "Concierge Medicine", "Event Services"],
    membershipAvailable: false,
    featured: true,
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Youthtopia Med Spa",
    rank: 4,
    address: "Alpharetta, GA",
    phone: "(770) 555-0004",
    website: "https://youthtopiamedspa.com",
    rating: 4.6,
    reviewCount: 67,
    services: ["Myers Mix IV", "Wellness IV", "Beauty IV", "Performance IV"],
    priceRange: "$$",
    hours: "Mon-Sat: 9am-6pm, Sun: Closed",
    description: "Medical spa combining IV therapy with aesthetic treatments for comprehensive wellness and beauty solutions.",
    specialties: ["Myers Mix", "Anti-Aging", "Hydration", "Wellness Boost"],
    membershipAvailable: false,
    featured: false,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Vida-Flo Alpharetta",
    rank: 5,
    address: "Near North Point Mall, Alpharetta, GA",
    phone: "(770) 555-0005",
    website: "https://vida-flo.com",
    rating: 4.5,
    reviewCount: 45,
    services: ["IV Hydration", "Vitamin Therapy", "Wellness Packages"],
    priceRange: "$$$",
    hours: "Mon-Fri: 9am-7pm, Sat: 10am-5pm, Sun: Closed",
    description: "IV hydration therapy center focused on wellness, recovery, and preventative health through customized nutrient delivery.",
    specialties: ["Hydration", "Energy", "Immunity", "Recovery"],
    membershipAvailable: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=300&fit=crop"
  }
];

export default function Home() {
  const [providers, setProviders] = useState(alpharettaProviders);
  const [filterService, setFilterService] = useState('all');
  const [userLocation, setUserLocation] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingProvider, setEditingProvider] = useState(null);

  const allServices = [...new Set(providers.flatMap(p => p.services))];

  const filteredProviders = filterService === 'all' 
    ? providers 
    : providers.filter(p => p.services.includes(filterService));

  const sortedProviders = [...filteredProviders].sort((a, b) => a.rank - b.rank);

  useEffect(() => {
    setUserLocation('Alpharetta, GA');
  }, []);

  const handleEdit = (provider) => {
    setEditingProvider({...provider});
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedProviders = providers.map(p => 
      p.id === editingProvider.id ? editingProvider : p
    );
    setProviders(updatedProviders);
    setIsEditing(false);
    setEditingProvider(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingProvider(null);
  };

  const updateEditingField = (field, value) => {
    setEditingProvider(prev => ({...prev, [field]: value}));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">WellnessRank</h1>
              <p className="text-sm text-gray-600 mt-1">Your Guide to Top IV Therapy & Wellness Centers</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{userLocation}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Top IV Therapy Centers in Alpharetta, GA</h2>
          <p className="text-xl mb-8 text-blue-100">Expertly ranked and reviewed by local wellness experts</p>
          <div className="flex justify-center gap-4 text-sm">
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <span className="font-semibold">{providers.length}</span> Verified Centers
            </div>
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <span className="font-semibold">Expert</span> Rankings
            </div>
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <span className="font-semibold">Real</span> Reviews
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Service:</label>
          <select 
            value={filterService}
            onChange={(e) => setFilterService(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Services</option>
            {allServices.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {/* Admin Note */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-yellow-800">
            <strong>Admin Mode:</strong> Click "Edit" on any provider to customize rankings, descriptions, and details. Changes save to browser state.
          </p>
        </div>

        {/* Provider Listings */}
        <div className="space-y-6">
          {sortedProviders.map((provider) => (
            <div key={provider.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              {provider.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 text-sm font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  FEATURED PROVIDER
                </div>
              )}
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-64 flex-shrink-0">
                    <img 
                      src={provider.image} 
                      alt={provider.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                            #{provider.rank}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900">{provider.name}</h3>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {provider.address}
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            {provider.phone}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleEdit(provider)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < Math.floor(provider.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">{provider.rating}</span>
                      <span className="text-gray-500">({provider.reviewCount} reviews)</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{provider.priceRange}</span>
                    </div>

                    <p className="text-gray-700 mb-4">{provider.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Services Offered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {provider.services.map(service => (
                          <span key={service} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {provider.specialties.map(specialty => (
                          <span key={specialty} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {provider.hours}
                      </div>
                      {provider.membershipAvailable && (
                        <div className="flex items-center gap-1 text-green-600 font-medium">
                          <Award className="w-4 h-4" />
                          Membership Available
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <a 
                        href={provider.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                      >
                        <Globe className="w-4 h-4" />
                        Visit Website
                      </a>
                      <a 
                        href={`tel:${provider.phone}`}
                        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 bg-gray-50 p-4 text-center text-sm text-gray-500">
                [ Google AdSense Ad Space ]
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && editingProvider && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-6">Edit Provider: {editingProvider.name}</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rank</label>
                  <input 
                    type="number"
                    value={editingProvider.rank}
                    onChange={(e) => updateEditingField('rank', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text"
                    value={editingProvider.name}
                    onChange={(e) => updateEditingField('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    value={editingProvider.description}
                    onChange={(e) => updateEditingField('description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="text"
                    value={editingProvider.phone}
                    onChange={(e) => updateEditingField('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input 
                    type="text"
                    value={editingProvider.address}
                    onChange={(e) => updateEditingField('address', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                  <input 
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={editingProvider.rating}
                    onChange={(e) => updateEditingField('rating', parseFloat(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={editingProvider.featured}
                    onChange={(e) => updateEditingField('featured', e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <label className="text-sm font-medium text-gray-700">Featured Provider</label>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSave}
                  className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">WellnessRank</h3>
              <p className="text-gray-400">Your trusted guide to the best IV therapy and wellness centers in Alpharetta, GA.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Submit Your Business</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Coverage Area</h4>
              <p className="text-gray-400">Currently serving Alpharetta, GA</p>
              <p className="text-sm text-gray-500 mt-2">More cities coming soon!</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 WellnessRank. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
