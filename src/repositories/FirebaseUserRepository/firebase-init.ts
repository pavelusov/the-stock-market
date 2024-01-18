import admin from 'firebase-admin';
import { getApps } from "firebase-admin/app";

const a = getApps()
const serviceAccount = process.env.GOOGLE_FB || '';

if (a.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(serviceAccount)),
  });
}

export const db = admin.firestore();
