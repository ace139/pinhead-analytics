import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Basic validation - only email is required now
    if (!data.email) {
      return new Response(JSON.stringify({ error: 'Email address is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(JSON.stringify({ error: 'Please enter a valid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // In a real implementation, you would:
    // 1. Send data to HubSpot, Salesforce, or your CRM
    // 2. Send notification emails
    // 3. Store in database
    
    // Example HubSpot integration (commented out):
    /*
    const hubspotResponse = await fetch('https://api.hubapi.com/contacts/v1/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`
      },
      body: JSON.stringify({
        properties: [
          { property: 'email', value: data.email },
          { property: 'message', value: data.message || 'No message provided' }
        ]
      })
    });
    */

    // For demo purposes, we'll just log the data and return success
    console.log('Contact form submission:', {
      email: data.email,
      message: data.message || 'No message provided',
      timestamp: new Date().toISOString()
    });

    // The emailData constant was here, but it's not used. 
    // It's likely a placeholder for a future email integration.

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Thank you for your interest! We will get back to you soon.' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};