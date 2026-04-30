import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      email?: string | null
      provider?: string
      uid?: string
    }
  }

  interface User {
    provider?: string
    uid?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    provider?: string
    uid?: string
  }
}