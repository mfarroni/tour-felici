import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { queryOne } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await queryOne<{
          id: string;
          nome: string;
          cognome: string;
          email: string;
          password_hash: string;
          ruolo: string;
        }>(
          "SELECT * FROM utenti WHERE email = $1",
          [credentials.email as string]
        );

        if (!user) return null;

        // DECISIONE: per l'MVP usiamo bcryptjs semplice
        // In produzione valutare Argon2
        const bcrypt = await import("bcryptjs");
        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password_hash
        );

        if (!isValid) return null;

        return {
          id: user.id,
          name: `${user.nome} ${user.cognome}`,
          email: user.email,
          role: user.ruolo,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role: string }).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { role?: string }).role = token.role as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 giorni
  },
});