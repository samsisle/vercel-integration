// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { requireEnv } from '@utils/requireEnv'
import { verifyWebhookSignature } from '@utils/verify-webhook-signature'

const clientSecret = requireEnv('CLIENT_SECRET')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    if (!verifyWebhookSignature(req, clientSecret)) {
      return res.status(403).json({
        code: 'invalid-signature',
        message: 'Signature of payload did not match.',
      })
    }

    console.log('[test] payload =', req.body.payload)

    return res.status(200).send('Received.')
  }

  return res
    .status(405)
    .send('Request method not allowed. Please use a POST request.')
}
