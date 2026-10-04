import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET ,
  providers: [
    Credentials({
      name: "Login now",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Enter your email",
          type: "email",
        },
        password: {
          label: "password",
          placeholder: "Enter your password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        const res = await fetch(`${process.env.API}auth/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        if (!res.ok) throw new Error("Error");
        const data = await res.json();

        const userData: { id: string } = jwtDecode(data.token);

        return {
          id: userData.id,
          email: data.user.email,
          name: data.user.name,
          accessToken: data.token,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        
      }        
      return session;
    },
  },
};

