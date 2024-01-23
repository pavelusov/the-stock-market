import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

import appConfig from '@/config/app-config';

const a = getApps()
const serviceAccount = appConfig.GOOGLE_FIREBASE_ADMIN_SDK;

if (a.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
