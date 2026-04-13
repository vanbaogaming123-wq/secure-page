// Import and initialize Vercel Speed Insights
import { injectSpeedInsights } from '../node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights when the page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    injectSpeedInsights({
      debug: true // Enable debug mode for development
    });
  });
} else {
  // DOM is already ready
  injectSpeedInsights({
    debug: true // Enable debug mode for development
  });
}
