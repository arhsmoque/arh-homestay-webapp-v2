import React, { useState, useEffect } from 'react';

export default function BookingWidget({ whatsappNumber }) {
  const [bookingMode, setBookingMode] = useState('stay'); // 'stay', 'event', 'corporate'
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(4);
  const [cars, setCars] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const [nights, setNights] = useState(0);
  const [surcharge, setSurcharge] = useState(0);
  const [nightlyRate, setNightlyRate] = useState(200);
  const [total, setTotal] = useState(0);
  const [deposit, setDeposit] = useState(200);
  const [errorMessage, setErrorMessage] = useState('');
  const [handoffMessage, setHandoffMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Compute nights and rates
  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn + 'T00:00:00');
      const end = new Date(checkOut + 'T00:00:00');
      const diff = Math.round((end - start) / 86400000);
      setNights(diff > 0 ? diff : 0);
    } else {
      setNights(0);
    }
  }, [checkIn, checkOut]);

  // Adjust rate and surcharges based on mode
  useEffect(() => {
    let modeSurcharge = 0;
    if (bookingMode === 'event') modeSurcharge = 150;
    if (bookingMode === 'corporate') modeSurcharge = 200;
    
    setSurcharge(modeSurcharge);
    
    // Simple logic: Weekend rates if checking in on Friday/Saturday
    if (checkIn) {
      const day = new Date(checkIn + 'T00:00:00').getDay();
      setNightlyRate(day === 5 || day === 6 ? 240 : 200);
    } else {
      setNightlyRate(200);
    }
  }, [bookingMode, checkIn]);

  // Compute final estimate
  useEffect(() => {
    if (nights > 0) {
      setTotal((nights * nightlyRate) + surcharge + deposit);
    } else {
      setTotal(0);
    }
  }, [nights, nightlyRate, surcharge, deposit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validations
    if (!checkIn) {
      setErrorMessage('Please select a check-in date.');
      return;
    }
    if (!checkOut) {
      setErrorMessage('Please select a check-out date.');
      return;
    }
    if (nights <= 0) {
      setErrorMessage('Check-out must be after check-in.');
      return;
    }

    const maxOvernight = 6;
    const maxEvent = 20;

    if (bookingMode === 'stay' && guests > maxOvernight) {
      setErrorMessage(`Maximum capacity for overnight stays is ${maxOvernight} guests.`);
      return;
    }
    if ((bookingMode === 'event' || bookingMode === 'corporate') && guests > maxEvent) {
      setErrorMessage(`Maximum visitor limit for gatherings is ${maxEvent} pax.`);
      return;
    }

    // Build WhatsApp Message Payload
    const modeLabels = {
      stay: 'Standard Overnight Stay',
      event: 'Private Pool Event / Party',
      corporate: 'Corporate Retreat'
    };

    const messageLines = [
      `Hi Adrian, I want to check availability for Ellamin Courtyard Retreat.`,
      `*Inquiry Purpose:* ${modeLabels[bookingMode]}`,
      `*Check-in:* ${checkIn}`,
      `*Check-out:* ${checkOut}`,
      `*Nights:* ${nights}`,
      `*Guests:* ${guests} pax`,
      `*Cars:* ${cars} vehicles`,
      `*Name:* ${name || '-'}`,
      `*Phone:* ${phone || '-'}`,
      `*Notes:* ${notes || '-'}`,
      ``,
      `*Estimated Rates Summary:*`,
      `- Nightly rate: RM ${nightlyRate} x ${nights} nights`,
      surcharge > 0 ? `- Mode surcharge: RM ${surcharge}` : '',
      `- Refundable deposit: RM ${deposit}`,
      `*Total Estimate:* RM ${total}`,
      ``,
      `Please confirm availability and booking instructions.`
    ].filter(line => line !== '');

    const messageText = messageLines.join('\n');
    setHandoffMessage(messageText);

    // Redirect to WhatsApp
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(messageText)}`;
    
    // Attempt popup redirect
    const popup = window.open(waUrl, '_blank');
    if (!popup) {
      // Fallback if browser blocked popup
      window.location.href = waUrl;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(handoffMessage);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Inquiry Form */}
      <form onSubmit={handleSubmit} className="lg:col-span-8 v3-card p-6 sm:p-8 flex flex-col gap-6">
        <div>
          <h3 className="font-display text-2xl font-bold text-[color:var(--ink)]">Structured Inquiry Builder</h3>
          <p className="text-[color:var(--muted)] text-xs mt-1">Select your stay mode and dates to estimate pricing and send details to the host.</p>
        </div>

        {/* Booking Mode Selector (Aesthetic Tabs) */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[color:var(--muted)] uppercase">1. Booking Purpose</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'stay', label: 'Overnight Stay', icon: 'Stay', activeClass: 'bg-[color:var(--deep-pool)] border-[color:var(--deep-pool)] text-white' },
              { id: 'event', label: 'Pool Event', icon: 'Event', activeClass: 'bg-[color:var(--clay-action)] border-[color:var(--clay-action)] text-white' },
              { id: 'corporate', label: 'Corporate', icon: 'Team', activeClass: 'bg-[color:var(--evening)] border-[color:var(--evening)] text-white' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setBookingMode(tab.id)}
                className={`py-3 rounded-xl flex flex-col items-center gap-1 border font-bold text-xs transition-all duration-200 cursor-pointer ${
                  bookingMode === tab.id
                    ? `${tab.activeClass} shadow-sm`
                    : 'bg-[color:var(--paper)] border-[color:var(--line)] text-[color:var(--muted)] hover:bg-[color:var(--warm)]/50'
                }`}
              >
                <span className="text-[10px] uppercase tracking-[0.16em]">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Date Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[color:var(--muted)] uppercase">Check-in Date</label>
            <input 
              type="date" 
              required
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="px-4 py-2.5 rounded-lg border border-[color:var(--line)] bg-[color:var(--surface-card)] text-[color:var(--ink)] focus:outline-none focus:border-[color:var(--lamp)]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[color:var(--muted)] uppercase">Check-out Date</label>
            <input 
              type="date" 
              required
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn || new Date().toISOString().split('T')[0]}
              className="px-4 py-2.5 rounded-lg border border-[color:var(--line)] bg-[color:var(--surface-card)] text-[color:var(--ink)] focus:outline-none focus:border-[color:var(--lamp)]"
            />
          </div>
        </div>

        {/* Quantities (Guests, Cars) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[color:var(--muted)] uppercase">Total Guests</label>
            <input 
              type="number" 
              min="1"
              required
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value, 10))}
              className="px-4 py-2.5 rounded-lg border border-[color:var(--line)] bg-[color:var(--surface-card)] text-[color:var(--ink)] focus:outline-none focus:border-[color:var(--lamp)]"
            />
            <p className="text-[10px] text-[color:var(--muted)]">
              {bookingMode === 'stay' ? 'Up to 6 guests overnight' : 'Up to 20 daytime visitors'}
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[color:var(--muted)] uppercase">Vehicles (Cars)</label>
            <input 
              type="number" 
              min="0"
              value={cars}
              onChange={(e) => setCars(parseInt(e.target.value, 10))}
              className="px-4 py-2.5 rounded-lg border border-[color:var(--line)] bg-[color:var(--surface-card)] text-[color:var(--ink)] focus:outline-none focus:border-[color:var(--lamp)]"
            />
            <p className="text-[10px] text-[color:var(--muted)]">1 dedicated carport slot included</p>
          </div>
        </div>

        {/* Guest Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[color:var(--muted)] uppercase">Your Name</label>
            <input 
              type="text" 
              placeholder="e.g. Adrian"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-[color:var(--line)] bg-[color:var(--surface-card)] text-[color:var(--ink)] focus:outline-none focus:border-[color:var(--lamp)]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[color:var(--muted)] uppercase">Contact Phone</label>
            <input 
              type="tel" 
              placeholder="e.g. +60123456789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-[color:var(--line)] bg-[color:var(--surface-card)] text-[color:var(--ink)] focus:outline-none focus:border-[color:var(--lamp)]"
            />
          </div>
        </div>

        {/* Special Notes */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-[color:var(--muted)] uppercase">Inquiry Notes</label>
          <textarea 
            placeholder="Special decoration needs, preferred keyless PIN, check-in questions..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows="3"
            className="px-4 py-2.5 rounded-lg border border-[color:var(--line)] bg-[color:var(--surface-card)] text-[color:var(--ink)] focus:outline-none focus:border-[color:var(--lamp)] text-xs resize-none"
          />
        </div>

        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 font-bold">
            ⚠️ {errorMessage}
          </div>
        )}

        {/* Submit Button */}
        <button 
          type="submit" 
          className="v3-button v3-button-primary w-full cursor-pointer flex items-center justify-center gap-2"
        >
          <span>💬</span> Send WhatsApp Inquiry
        </button>
      </form>

      {/* Live Commercial Engine Surcharge breakdown */}
      <div className="lg:col-span-4 v3-card p-6 flex flex-col gap-6">
        <div>
          <h4 className="font-display text-lg font-bold text-[color:var(--ink)]">Commercial Quote</h4>
          <p className="text-[10px] text-[color:var(--muted)]">Auto-computed pricing factors based on selections.</p>
        </div>

        {nights > 0 ? (
          <div className="flex flex-col gap-3 text-xs border-b border-[color:var(--line)] pb-4 text-[color:var(--muted)]">
            <div className="flex justify-between">
              <span>Stay nights</span>
              <strong className="text-[color:var(--ink)]">{nights} nights</strong>
            </div>
            <div className="flex justify-between">
              <span>Nightly Rate</span>
              <strong className="text-[color:var(--ink)]">RM {nightlyRate} / night</strong>
            </div>
            {surcharge > 0 && (
              <div className="flex justify-between text-[color:var(--pool)] font-bold">
                <span>Event surcharge</span>
                <span>+ RM {surcharge}</span>
              </div>
            )}
            <div className="flex justify-between text-stone-500">
              <span>Security Deposit</span>
              <span>+ RM {deposit} (Refundable)</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 text-[color:var(--muted)] text-xs">
            Select check-in & check-out dates to compute the stay estimate.
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-[color:var(--muted)] uppercase">Total Estimate</span>
          <strong className="text-xl font-black text-[color:var(--deep-pool)]">
            {total > 0 ? `RM ${total}` : 'RM 0'}
          </strong>
        </div>

        <div className="p-3.5 bg-[color:var(--warm)]/20 border border-[color:var(--line)] rounded-xl text-[10px] text-[color:var(--muted)] leading-normal flex flex-col gap-1">
          <strong>Direct Booking Exemption</strong>
          <p>Quotes omit standard OTA commissions (Airbnb/Booking.com). Rate is verified once Adrian reviews dates.</p>
        </div>
      </div>

      {/* Manual Handoff Fallback Modal */}
      {handoffMessage && (
        <div className="fixed inset-0 z-50 bg-[color:var(--ink)]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="v3-card max-w-lg w-full p-6 shadow-2xl flex flex-col gap-4">
            <div>
              <h3 className="font-display text-xl font-bold text-[color:var(--ink)]">Booking Handoff</h3>
              <p className="text-xs text-[color:var(--muted)] mt-1 leading-normal">
                We are opening WhatsApp for you. If the application does not launch automatically, please copy the details below to send a manual message.
              </p>
            </div>

            <textarea 
              readOnly 
              value={handoffMessage} 
              className="w-full h-48 border border-[color:var(--line)] rounded-lg p-3 font-mono text-[10px] bg-[color:var(--surface-card)] text-[color:var(--ink)] resize-none focus:outline-none"
            />

            <div className="flex justify-end gap-3 mt-2">
              <button 
                type="button" 
                onClick={() => setHandoffMessage('')}
                className="v3-button v3-button-secondary text-xs"
              >
                Close
              </button>
              <button 
                type="button" 
                onClick={handleCopy}
                className={`v3-button v3-button-primary text-xs ${isCopied ? 'bg-emerald-700' : ''}`}
              >
                {isCopied ? 'Copied! ✓' : 'Copy Message'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
