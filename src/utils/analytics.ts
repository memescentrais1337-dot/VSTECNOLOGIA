// Event tracking utility for VS Tecnologia e Automação
// Cleanly integrates with window.dataLayer (GTM/GA4) without hardcoding private keys or IDs

export type AnalyticsEventName =
  | 'diagnostic_start'
  | 'diagnostic_step'
  | 'diagnostic_complete'
  | 'diagnostic_whatsapp_click'
  | 'diagnostic_lead_submit'
  | 'matrix_interaction'
  | 'case_view'
  | 'segment_view'
  | 'technical_download'
  | 'whatsapp_click'
  | 'lead_submit';

export interface AnalyticsEventParams {
  [key: string]: string | number | boolean | undefined | null;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(eventName: AnalyticsEventName, params?: AnalyticsEventParams): void {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...params,
  };

  // Push to GTM / GA4 dataLayer if initialized
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventPayload);
  }

  // Dispatch standard CustomEvent on window for observability / debugging
  try {
    const customEvent = new CustomEvent('vs_analytics', { detail: eventPayload });
    window.dispatchEvent(customEvent);
  } catch {
    // Fail silently in non-standard environments
  }
}
