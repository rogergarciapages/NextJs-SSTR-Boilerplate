'use client';

import { signIn } from "next-auth/react";
import { Button } from "@nextui-org/react";
import { Github, Mail } from "lucide-react";

export default function SignInForm({ providers }: { providers: any }) {
  return (
    <div className="mt-8 space-y-4">
      {providers?.github && (
        <Button
          className="w-full"
          onClick={() => signIn('github', { callbackUrl: '/' })}
          startContent={<Github className="w-5 h-5" />}
        >
          Continue with GitHub
        </Button>
      )}
      {providers?.google && (
        <Button
          className="w-full"
          onClick={() => signIn('google', { callbackUrl: '/' })}
          startContent={<Mail className="w-5 h-5" />}
        >
          Continue with Google
        </Button>
      )}
    </div>
  );
}