import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
  interface User {
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    id: string;
  }
}