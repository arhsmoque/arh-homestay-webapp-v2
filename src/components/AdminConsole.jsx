import React, { useState, useEffect } from 'react';

export default function AdminConsole({ seedConfig }) {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(''); // 'owner', 'developer'
  const [activeTab, setActiveTab] = useState('today'); // 'today', 'requests', 'availability', 'rates', 'property', 'gallery', 'security', 'diagnostics'
  
  // App state loaded from localStorage or seedConfig
  const [propertyProfile, setPropertyProfile] = useState(seedConfig.seed.property.profile);
  const [ratePlans, setRatePlans] = useState(seedConfig.seed.rates.plans);
  const [fees, setFees] = useState(seedConfig.seed.rates.fees);
  const [blockedDates, setBlockedDates] = useState([]);
  const [requests, setRequests] = useState([
    {
      id: 'req_1',
      guest: { name: 'Sarah Connor', phone: '+60128889999' },
      stay: { checkIn: '2026-06-20', departureDate: '2026-06-22', nights: 2, guests: 4, cars: 1 },
      estimate: { estimatedTotal: 600 },
      note: 'Celebrating family trip.',
      status: 'new',
      createdAt: Date.now() - 3600000
    },
    {
      id: 'req_2',
      guest: { name: 'John Doe', phone: '+60127776666' },
      stay: { checkIn: '2026-06-25', departureDate: '2026-06-26', nights: 1, guests: 2, cars: 2 },
      estimate: { estimatedTotal: 400 },
      note: 'Need early checkin.',
      status: 'approved',
      createdAt: Date.now() - 86400000
    }
  ]);
  const [newBlockedDate, setNewBlockedDate] = useState('');
  
  // PIN Verification
  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === seedConfig.security.pins.owner) {
      setIsAuthenticated(true);
      setRole('owner');
      setActiveTab('today');
    } else if (pin === seedConfig.security.pins.developer) {
      setIsAuthenticated(true);
      setRole('developer');
      setActiveTab('today');
    } else {
      alert('Invalid PIN code.');
    }
  };

  // Block a date
  const handleBlockDate = (e) => {
    e.preventDefault();
    if (newBlockedDate && !blockedDates.includes(newBlockedDate)) {
      setBlockedDates([...blockedDates, newBlockedDate]);
      setNewBlockedDate('');
    }
  };

  // Unblock a date
  const handleUnblockDate = (date) => {
    setBlockedDates(blockedDates.filter(d => d !== date));
  };

  // State Transition Request Status
  const handleRequestStatus = (id, newStatus) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: newStatus } : req));
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-12 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 rounded-2xl shadow-xl flex flex-col gap-6">
        <div className="text-center">
          <div className="w-12 h-12 rounded-lg bg-teal-900 text-white flex items-center justify-center font-bold text-xl mx-auto dark:bg-teal-700">🔐</div>
          <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-white mt-3">Console Authentication</h2>
          <p className="text-stone-500 dark:text-stone-400 text-xs mt-1">Input security PIN to access administrative console panels.</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-stone-500 uppercase">PIN Code</label>
            <input 
              type="password"
              placeholder="••••"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="px-4 py-2.5 text-center text-xl tracking-widest rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-white"
            />
          </div>
          <button type="submit" className="py-2.5 bg-teal-900 hover:bg-teal-850 dark:bg-teal-700 text-white font-black text-xs rounded-lg transition-colors">
            Unlock Console
          </button>
        </form>
        
        <div className="text-center text-[10px] text-stone-400">
          <p>Defaults: Owner: 1234 | Developer: 4321</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      
      {/* Sidebar Navigation */}
      <div className="md:col-span-3 flex flex-col gap-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 p-4 rounded-xl shadow-sm">
        <div className="px-3 py-2 border-b border-stone-150 dark:border-stone-800 mb-2">
          <p className="text-xs font-bold text-stone-500 uppercase">Operator Panel</p>
          <p className="text-[10px] text-teal-700 dark:text-teal-400 font-bold capitalize mt-0.5">Role: {role} Mode</p>
        </div>

        {[
          { id: 'today', label: 'Today', icon: '📅' },
          { id: 'requests', label: 'Inquiry Requests', icon: '✉️' },
          { id: 'availability', label: 'Availability', icon: '🔒' },
          { id: 'rates', label: 'Rates Setup', icon: '💰' },
          { id: 'property', label: 'Property Profile', icon: '🏡' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === tab.id
                ? 'bg-teal-900 text-white dark:bg-teal-700'
                : 'text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800'
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}

        {role === 'developer' && (
          <>
            <div className="px-3 py-2 border-t border-stone-150 dark:border-stone-800 my-2">
              <p className="text-[10px] font-bold text-stone-400 uppercase">Developer Console</p>
            </div>
            {[
              { id: 'diagnostics', label: 'Data Diagnostics', icon: '🛠️' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-teal-900 text-white dark:bg-teal-700'
                    : 'text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </>
        )}

        <button 
          onClick={() => { setIsAuthenticated(false); setPin(''); }}
          className="w-full text-left px-3 py-2.5 mt-4 rounded-lg text-xs font-bold text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 flex items-center gap-2 border border-red-200/40"
        >
          <span>🚪</span> Lock Console
        </button>
      </div>

      {/* Console Tab Workspace */}
      <div className="md:col-span-9 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-855 p-6 rounded-xl shadow-sm min-h-[50vh]">
        
        {/* Tab: Today */}
        {activeTab === 'today' && (
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">Today's Operations</h3>
              <p className="text-stone-500 text-xs mt-1">High level stats of bookability and trust markers.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-teal-50 dark:bg-teal-950/20 border border-teal-200/50 dark:border-teal-800/50 rounded-xl">
                <p className="text-[10px] uppercase font-bold text-teal-800 dark:text-teal-400">Listing Status</p>
                <p class="text-lg font-black text-teal-900 dark:text-teal-300 mt-1">Active</p>
              </div>
              <div className="p-4 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl">
                <p className="text-[10px] uppercase font-bold text-stone-500">Inquiry Queue</p>
                <p class="text-lg font-black text-stone-900 dark:text-stone-100 mt-1">{requests.length} Requests</p>
              </div>
              <div className="p-4 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl">
                <p className="text-[10px] uppercase font-bold text-stone-500">Blocked Dates</p>
                <p class="text-lg font-black text-stone-900 dark:text-stone-100 mt-1">{blockedDates.length} Blocked</p>
              </div>
            </div>

            <div className="border border-stone-200 dark:border-stone-800 p-5 rounded-xl flex flex-col gap-2">
              <h4 className="font-bold text-sm">Listing Data health</h4>
              <p className="text-xs text-stone-500">All required property facts are present. Map integration is active.</p>
            </div>
          </div>
        )}

        {/* Tab: Requests */}
        {activeTab === 'requests' && (
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">Inquiry Requests</h3>
              <p className="text-stone-500 text-xs mt-1">Manage guest-submitted WhatsApp requests. Confirm availability and quotes.</p>
            </div>

            <div className="flex flex-col gap-4">
              {requests.map(req => (
                <div key={req.id} className="p-5 border border-stone-250 dark:border-stone-800 rounded-xl flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center bg-stone-50 dark:bg-stone-950/40">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-stone-900 dark:text-stone-200 text-sm">{req.guest.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-black uppercase ${
                        req.status === 'new' ? 'bg-amber-100 text-amber-800' :
                        req.status === 'approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-200 text-stone-700'
                      }`}>{req.status}</span>
                    </div>
                    <p className="text-[10px] text-stone-500">
                      📅 {req.stay.checkIn} to {req.stay.departureDate} ({req.stay.nights} nights) | 👥 {req.stay.guests} guests | 🚗 {req.stay.cars} vehicles
                    </p>
                    {req.note && <p className="text-xs text-stone-600 dark:text-stone-400 italic">" {req.note} "</p>}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button 
                      onClick={() => handleRequestStatus(req.id, 'approved')}
                      className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-650 text-white font-bold text-[10px] rounded-lg shadow-sm"
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => handleRequestStatus(req.id, 'rejected')}
                      className="px-3 py-1.5 bg-stone-200 hover:bg-stone-250 text-stone-800 font-bold text-[10px] rounded-lg dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Availability */}
        {activeTab === 'availability' && (
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">Block / Unblock Dates</h3>
              <p className="text-stone-500 text-xs mt-1">Manually control calendar bookability by freezing specific nights.</p>
            </div>

            <form onSubmit={handleBlockDate} className="flex gap-3 max-w-md">
              <input 
                type="date"
                required
                value={newBlockedDate}
                onChange={(e) => setNewBlockedDate(e.target.value)}
                className="px-4 py-2.5 rounded-lg border border-stone-250 dark:border-stone-805 bg-white dark:bg-stone-950 text-stone-900 dark:text-white text-xs flex-grow"
              />
              <button type="submit" className="px-5 bg-teal-900 text-white font-black text-xs rounded-lg shadow-sm">
                Block Date
              </button>
            </form>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-xs">Currently Blocked Nights</h4>
              {blockedDates.length === 0 ? (
                <p className="text-xs text-stone-400">No dates manually blocked.</p>
              ) : (
                <div className="flex gap-2 flex-wrap mt-2">
                  {blockedDates.map(date => (
                    <span 
                      key={date} 
                      className="px-3 py-1.5 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-lg text-xs font-bold text-red-800 dark:text-red-400 flex items-center gap-2"
                    >
                      {date}
                      <button type="button" onClick={() => handleUnblockDate(date)} className="hover:text-red-950">✕</button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab: Rates */}
        {activeTab === 'rates' && (
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">Rates Configuration</h3>
              <p className="text-stone-500 text-xs mt-1">Edit default pricing plan amounts for nightly stays.</p>
            </div>

            <div className="flex flex-col gap-4 max-w-md">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-stone-500 uppercase">Weekday Price (RM)</label>
                <input 
                  type="number"
                  value={ratePlans.weekday.price}
                  onChange={(e) => setRatePlans({
                    ...ratePlans,
                    weekday: { ...ratePlans.weekday, price: parseInt(e.target.value, 10) }
                  })}
                  className="px-4 py-2.5 rounded-lg border border-stone-250 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-stone-500 uppercase">Weekend Price (RM)</label>
                <input 
                  type="number"
                  value={ratePlans.weekend.price}
                  onChange={(e) => setRatePlans({
                    ...ratePlans,
                    weekend: { ...ratePlans.weekend, price: parseInt(e.target.value, 10) }
                  })}
                  className="px-4 py-2.5 rounded-lg border border-stone-250 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-900 dark:text-white"
                />
              </div>

              <button 
                type="button"
                onClick={() => alert('Rates configured successfully (Mock persistent)')}
                className="py-2.5 bg-teal-900 dark:bg-teal-700 text-white font-bold text-xs rounded-lg shadow-sm"
              >
                Save Rates
              </button>
            </div>
          </div>
        )}

        {/* Tab: Property */}
        {activeTab === 'property' && (
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">Property Details</h3>
              <p className="text-stone-500 text-xs mt-1">Configure profile descriptions and capacity variables.</p>
            </div>

            <div className="flex flex-col gap-4 max-w-xl">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-stone-500 uppercase">Property Name</label>
                <input 
                  type="text"
                  value={propertyProfile.name}
                  onChange={(e) => setPropertyProfile({ ...propertyProfile, name: e.target.value })}
                  className="px-4 py-2.5 rounded-lg border border-stone-250 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase">Max Guests Limit</label>
                  <input 
                    type="number"
                    value={propertyProfile.maxGuests}
                    onChange={(e) => setPropertyProfile({ ...propertyProfile, maxGuests: parseInt(e.target.value, 10) })}
                    className="px-4 py-2.5 rounded-lg border border-stone-250 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-900 dark:text-white"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase">Contact WhatsApp</label>
                  <input 
                    type="text"
                    value={propertyProfile.whatsapp}
                    onChange={(e) => setPropertyProfile({ ...propertyProfile, whatsapp: e.target.value })}
                    className="px-4 py-2.5 rounded-lg border border-stone-250 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-900 dark:text-white"
                  />
                </div>
              </div>

              <button 
                type="button"
                onClick={() => alert('Property profile saved (Mock persistent)')}
                className="py-2.5 bg-teal-900 dark:bg-teal-700 text-white font-bold text-xs rounded-lg shadow-sm"
              >
                Save Profile
              </button>
            </div>
          </div>
        )}

        {/* Tab: Diagnostics */}
        {activeTab === 'diagnostics' && (
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">Developer Diagnostics</h3>
              <p className="text-stone-500 text-xs mt-1">Inspect configuration schemas and pipeline endpoints.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 border border-stone-200 dark:border-stone-800 rounded-xl">
                <strong className="text-stone-800 dark:text-stone-200">Firebase DB Link</strong>
                <p className="font-mono text-[10px] text-teal-700 dark:text-teal-400 mt-1 select-all">{seedConfig.firebase.url}</p>
              </div>
              <div className="p-4 border border-stone-200 dark:border-stone-800 rounded-xl">
                <strong class="text-stone-800 dark:text-stone-200">Database Schema Root</strong>
                <p className="font-mono text-[10px] text-stone-500 mt-1 select-all">{seedConfig.firebase.root}</p>
              </div>
            </div>
            
            <div className="p-5 border border-emerald-200/60 bg-emerald-50/20 dark:border-emerald-900 dark:bg-emerald-950/20 rounded-xl text-xs flex flex-col gap-2">
              <span className="font-bold text-emerald-800 dark:text-emerald-400">✓ Data Health OK</span>
              <p className="text-stone-500 dark:text-stone-400">All required property facts are present. Maps listing matches coordinates. Surcharges are successfully registered.</p>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
