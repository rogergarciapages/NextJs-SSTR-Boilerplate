import { Metadata } from "next";
import { getProviders } from "next-auth/react";
import SignInForm from "./signin-form";

export const metadata: Metadata = {
  title: "Sign In - SSR",
  description: "Sign in to your account",
};

export default async function SignInPage() {
  const providers = await getProviders();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>
        <SignInForm providers={providers} />
      </div>
    </div>
  );
}