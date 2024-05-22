import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          required: true,
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          required: true,
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      authorize: async (credentials, req) => {
        console.log({ credentials, req });
        console.log("calling from authorize function");
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ ...signInArgs }) {
      console.log({ signInArgs });
      return true;
    },
    async redirect(params) {
      const { url, baseUrl } = params;
      console.log({ url, baseUrl });
      return baseUrl;
    },
  },
};

export default authOptions;
