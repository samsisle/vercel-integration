# Vercel Integration (+Webhooks)

This Next.js app serves as the UI + API for a bare minimal [Vercel Integration](https://vercel.com/docs/integrations) that utilizes [Webhooks](https://vercel.com/docs/integrations/webhooks-overview).

To easily see the Webhook in action, we are simply console logging the `body.payload` in `/api/webhook`.

## Important requirements to mention

- The [Callback page](https://github.com/samsisle/vercel-integration/blob/main/pages/callback.tsx) is important so that you can redirect back to Vercel and finish the integration installation process. The `router.query.next` is essentially the correct Redirect URL that you need to go to in order to finish installing the integration on a Vercel project.
- The [Webhook API Route](https://github.com/samsisle/vercel-integration/blob/main/pages/api/webhook.ts) is important so Vercel can make a HTTP POST request with a JSON payload for each event. The [`verifyWebhookSignature`](https://github.com/samsisle/vercel-integration/blob/main/utils/verify-webhook-signature.ts) function is important so that only Vercel can make a POST request to your Webhook.
- This Vercel Integration is essentially a Next.js project + an API route. This is separate from the existing Vercel project you intend to use the integration with.

## How to set up and run this integration

1. Fork this repository and deploy to Vercel. This repository serves as the integration project.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/samsisle/vercel-integration)

2. Create a new Vercel Integration in the [integration console](https://vercel.com/dashboard/integrations/console).

3. Set the Redirect URL to `https://<your_production_domain>/callback`.

4. Set the Webhook URL to `https://<your_production_domain>/api/webhook`.

5. Set any remaining required inputs until you are able to successfully create your integration.

6. Set the `CLIENT_SECRET`, the value you see in the integration console if you edit your integration, to your project's [**Environment Variables**](https://vercel.com/docs/concepts/projects/environment-variables) settings.

7. Your integration is ready to be installed to any existing Vercel project. To install your newly created integration, go to this URL (External Flow) → `https://vercel.com/integrations/:slug/new` (https://vercel.com/docs/integrations/install-integration#external). It should redirect to the Callback page. On the Callback page, click on the card to redirect back to Vercel.

8. Once successfully installed, which you can verify was successful by going to your existing project's **Integration** settings (e.g. `https://vercel.com/<account_slug>/<project_slug>/settings/integrations`), try triggering your Webhook. For example, if you have selected **deployment_ready**, try triggering a new Deployment (existing project) and make sure to have another browser tab open to your integration project's [Function Logs](https://vercel.com/docs/concepts/deployments/logs#function-logs).

The screenshot below is was taken in the Function logs of the integration project. It is outputting the `body.payload` from the **deployment_ready** event.

![webhook_function_log](https://integration.msisle.im/webhook_function_log.jpg)

## Other helpful repositories

- https://github.com/vercel/example-integration
