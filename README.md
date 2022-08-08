# Vercel Integration

This Next.js app serves as the UI for a bare minimal [Vercel Integration](https://vercel.com/docs/integrations) that utilizes [Webhooks](https://vercel.com/docs/integrations/webhooks-overview).

To show a simple Webhook in action, we are console logging the `body.payload` in `/api/webhook`.

## Important requirements to mention

- The [Callback page](https://github.com/samsisle/vercel-integration/blob/main/pages/callback.tsx) is important so that you can redirect back to Vercel and finish the integration installation process. The `router.query.next` is essentially the correct Redirect URL that you need to go to in order to finish installing the integration on a Vercel project.
- The [Webhook API Route](https://github.com/samsisle/vercel-integration/blob/main/pages/api/webhook.ts) is important so Vercel can make a HTTP POST request with a JSON payload for each event. The [`verifyWebhookSignature`](https://github.com/samsisle/vercel-integration/blob/main/utils/verify-webhook-signature.ts) function is important so that only Vercel can make a POST request to your Webhook.
- This Vercel Integration is essentially a Next.js project + an API route. This is separate from the Vercel project you intend to use the integration with.

## How to set up and run this integration

1. Fork this repository and deploy to Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/samsisle/vercel-integration)

1. Create a new Vercel Integration in the [integration console](https://vercel.com/dashboard/integrations/console).

2. Set the Redirect URL to `https://<your_production_domain>/callback`.

3. Set the Webhook URL to `https://<your_production_domain>/api/webhook`.

4. Set any remaining required inputs until you are able to successfully create your integration.

5. Set the `CLIENT_SECRET`, the value you see in the integration console if you edit your integration, to your project's [**Environment Variables**](https://vercel.com/docs/concepts/projects/environment-variables) settings.

6. Your integration is ready to be installed to any existing Vercel project. To install your newly created integration, go to this URL (External Flow) → `https://vercel.com/integrations/:slug/new` (https://vercel.com/docs/integrations/install-integration#external).

7. Once successfully installed, which you can verify was successful by going to your projects **Integration** settings (e.g. `https://vercel.com/<account_slug>/<project_slug>/settings/integrations`), try triggering your Webhook. E.g. if you have selected **deployment_ready**, try triggering a new Deployment and have a browser tab open to your integration project's [Function Logs](https://vercel.com/docs/concepts/deployments/logs#function-logs).

The screenshot below was taken in Function logs of the integration project.

![webhook_function_log](https://integration.msisle.im/webhook_function_log.jpg)
