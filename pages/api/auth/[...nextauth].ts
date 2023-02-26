import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import type { NextAuthOptions } from "next-auth"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "Enter your google id",
      clientSecret: process.env.GOOGLE_SECRET || "enter your google secret key" ,
    }),
  ],
}

export default NextAuth(authOptions)