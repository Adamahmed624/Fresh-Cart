'use server'

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function getTokenData() {
  const cookie = await cookies();
  const nextAuthToken = cookie.get("next-auth.session-token")?.value;

  const decodedToken = await decode({
    secret: process.env.NEXTAUTH_SECRET!,
    token: nextAuthToken,
  });

  return decodedToken?.accessToken as string | undefined;
}
