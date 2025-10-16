import type { NextAuthOptions } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const authConfig: NextAuthOptions = {
  pages: { signIn: "/sign-in" },
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  // You can refine callbacks to control JWT contents if needed.
  // callbacks: { async jwt({ token }) { return token }, async session({ session, token }) { return session } },
  secret: process.env.NEXTAUTH_SECRET,
}
