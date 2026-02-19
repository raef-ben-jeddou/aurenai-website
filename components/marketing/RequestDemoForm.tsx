'use client';

import { useState } from 'react';

export function RequestDemoForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Formspree endpoint
      const response = await fetch('https://formspree.io/f/xbdakedp', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div 
        role="alert" 
        aria-live="polite" 
        className="p-8 bg-accent/10 border border-accent rounded-lg text-center animate-fade-in"
      >
        <h3 className="text-xl font-display font-semibold text-primary mb-3">Request Confirmed</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Your details have been securely routed to the AurenAI engineering team. We will review your infrastructure requirements and reach out within 24 hours to schedule your technical briefing.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto w-full" aria-label="Request a demo form">
      {/* SECURITY: Formspree Honeypot - Bots fill this, humans don't see it */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
        <input 
          id="name" 
          name="name" 
          type="text"
          autoComplete="name"
          required 
          aria-required="true"
          className="w-full flex h-11 rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          placeholder="Jane Doe"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">Work Email</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          autoComplete="email"
          required 
          aria-required="true"
          className="w-full flex h-11 rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          placeholder="jane@enterprise.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-foreground">Company / Plant Name</label>
        <input 
          id="company" 
          name="company" 
          type="text"
          autoComplete="organization"
          required 
          aria-required="true"
          className="w-full flex h-11 rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          placeholder="Acme Industrial Solutions"
        />
      </div>

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        aria-disabled={status === 'submitting'}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md h-11 px-4 py-2 w-full mt-2"
      >
        {status === 'submitting' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : 'Request Pilot Demo'}
      </button>

      {status === 'error' && (
        <div role="alert" className="text-sm text-destructive mt-3 text-center bg-destructive/10 border border-destructive/20 p-2 rounded-md">
          Connection error. Please try again or email us directly.
        </div>
      )}
    </form>
  );
}