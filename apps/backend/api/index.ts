import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createApp } from '../src/app';
import { connectToDatabase } from '../src/db/connection';

let app = createApp();
let dbReady: Promise<unknown> | null = null;

async function ensureReady() {
  if (!dbReady) dbReady = connectToDatabase().catch(e => { dbReady = null; throw e; });
  await dbReady;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await ensureReady();
  // @ts-expect-error express handler signature matches Node req/res
  return app(req, res);
}


