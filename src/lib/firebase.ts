import { getApp, getApps, initializeApp } from "firebase/app";
import type { FirebaseApp, FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import type { Firestore } from "firebase/firestore";

const cleanFirebaseEnvValue = (value: string | undefined) =>
  value
    ?.trim()
    .replace(/,$/, "")
    .replace(/^["']|["']$/g, "");

const firebaseEnv = {
  NEXT_PUBLIC_FIREBASE_API_KEY: cleanFirebaseEnvValue(process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: cleanFirebaseEnvValue(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: cleanFirebaseEnvValue(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: cleanFirebaseEnvValue(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: cleanFirebaseEnvValue(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID),
  NEXT_PUBLIC_FIREBASE_APP_ID: cleanFirebaseEnvValue(process.env.NEXT_PUBLIC_FIREBASE_APP_ID)
} as const;

export const missingFirebaseEnv = Object.entries(firebaseEnv)
  .filter(([, value]) => !value)
  .map(([key]) => key);

const firebaseConfig: FirebaseOptions = {
  apiKey: firebaseEnv.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: firebaseEnv.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: firebaseEnv.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: firebaseEnv.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: firebaseEnv.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: firebaseEnv.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: cleanFirebaseEnvValue(process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID)
};

export const firebaseApp: FirebaseApp | null = missingFirebaseEnv.length
  ? null
  : getApps().length
    ? getApp()
    : initializeApp(firebaseConfig);

export const db: Firestore | null = firebaseApp ? getFirestore(firebaseApp) : null;
