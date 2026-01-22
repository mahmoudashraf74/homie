"use server";

import { cookies } from "next/headers";

export async function getTokenFromCookies() {
  const cookieStore = await cookies();
  return cookieStore.get("token")?.value || "";
}