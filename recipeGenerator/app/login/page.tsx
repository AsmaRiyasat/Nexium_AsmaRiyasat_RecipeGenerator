// // app/login/page.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MailIcon, XIcon } from "lucide-react";
import { supabase } from "@/utils/supabaseClient";

export default function MagicLogin() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`, // adjust path if needed
      },
    });

    if (error) {
      setMessage("Failed to send magic link");
      console.error(error);
    } else {
      setMessage("Magic link sent! Check your email.");
    }
  };

  return (
    <div className="min-h-screen bg-[url('/powder-7976081_1280.jpg')] bg-cover bg-center flex items-center justify-center relative">
      <div className="absolute top-4 left-4 text-white font-bold text-2xl">Recipe Generator AI</div>

      <Card className="w-full max-w-sm bg-white/10 backdrop-blur-md shadow-lg border-none text-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Login</h2>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <XIcon />
            </Button>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="flex items-center gap-2">
                Email <MailIcon className="w-4 h-4" />
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="mt-1 bg-white/20 border-white/30 text-white placeholder-white/70"
              />
            </div>
            <Button
              className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold"
              onClick={handleLogin}
            >
              Send Magic Link
            </Button>
            {message && (
              <p className="text-sm text-center text-white/90">{message}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
