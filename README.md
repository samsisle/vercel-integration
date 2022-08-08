# Vercel Integration

This Next.js app serves as the UI for a bare minimal (Vercel Integration)[https://vercel.com/docs/integrations] that utilizes (Webhooks)[https://vercel.com/docs/integrations/webhooks-overview].

To show a simple Webhook in action, we are console logging the `body.payload` in `/api/webhook`.

## How to run this example

1. Fork this repository and deploy to Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/samsisle/vercel-integration)

1. Create a new integration in the [integration console](https://vercel.com/dashboard/integrations/console).

2. Set the Redirect URL to `https://<your_production_domain>/callback`.

3. Set the Webhook URL to `https://<your_production_domain>/api/webhook`.

4. Set any remaining required inputs until you are able to successfully create your Vercel Integration.

5. Set the `CLIENT_SECRET`, the value you see in the integration console if you edit your integration, to your project's (**Environment Variables**)[https://vercel.com/docs/concepts/projects/environment-variables] settings.

6. Your integration is ready to be installed to any Vercel project. To install your newly created integration, go to this URL → `https://vercel.com/integrations/:slug/new` (https://vercel.com/docs/integrations/install-integration#external).
