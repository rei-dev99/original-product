import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { signInSchema } from "./app/lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
	secret: process.env.AUTH_SECRET,
	providers: [
		Google,
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				try {
					const { email, password } =
						await signInSchema.parseAsync(credentials);

					const res = await fetch("http://localhost:3001/login_email", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ email, password }),
					});

					if (!res.ok) return null;

					const data = await res.json();

					return {
						id: data.user.id,
						email: credentials.email as string,
					};
				} catch {
					return null;
				}
			},
		}),
	],
	session: {
		strategy: "jwt",
		maxAge: 60 * 60 * 24 * 3,
		updateAge: 60 * 60 * 24 * 365,
	},
	callbacks: {
		async jwt({ token, user, account, profile }) {
			if (user) {
				token.email = user.email;
			}

			if (account?.provider === "google") {
				token.provider = account.provider;
				token.uid = profile?.sub;
			}

			if (account?.provider === "credentials" && user) {
				token.provider = "email";
				token.uid = user.email;
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				session.user.email = token.email as string;
				session.user.provider = token.provider as string;
				session.user.uid = token.uid as string;
			}
			return session;
		},
	},
});
