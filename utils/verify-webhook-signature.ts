import type { NextApiRequest } from 'next';
import crypto from 'node:crypto';

export const verifyWebhookSignature = (
  req: NextApiRequest,
  secret: string
): boolean => {
  const payload = JSON.stringify(req.body);

  const signature = crypto
    .createHmac('sha1', secret)
    .update(payload)
    .digest('hex');

  return signature === req.headers['x-vercel-signature'];
};
