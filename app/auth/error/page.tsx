import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Authentication Error - SSR",
  description: "An error occurred during authentication",
};

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Authentication Error
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          An error occurred during the authentication process.
        </p>
        <Button as={Link} href="/auth/signin" color="primary">
          Try Again
        </Button>
      </div>
    </div>
  );
}