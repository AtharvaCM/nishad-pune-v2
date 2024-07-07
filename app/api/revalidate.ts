import { NextApiRequest, NextApiResponse } from 'next';

// Map document types to their corresponding paths in your Next.js app
const pathMap: Record<string, string> = {
  homepage: '/',
  events: '/events',
  shows: '/shows',
  // Add more mappings as needed
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { secret } = req.query;
  const { _type } = req.body;

  // Check for secret to confirm this is a valid request
  if (secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Determine the path to revalidate based on the document type
  const path = pathMap[_type];

  if (!path) {
    return res.status(400).json({ message: 'Invalid document type' });
  }

  try {
    // Trigger revalidation for the specified path
    await res.revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: 'Error revalidating' });
  }
}
