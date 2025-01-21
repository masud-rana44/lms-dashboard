"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { GoogleIcon, MetaIcon } from "./icons";
import { Github, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface LoginFormProps extends React.ComponentProps<"div"> {
  className?: string;
}

const socialProviders = [
  {
    name: "Google",
    icon: <GoogleIcon />,
    provider: "google",
  },
  {
    name: "Meta",
    icon: <MetaIcon />,
    provider: "facebook",
  },
  {
    name: "Github",
    icon: <Github />,
    provider: "github",
  },
];

export function LoginForm({ className, ...props }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      callbackUrl: "/dashboard",
    });
  };

  const handleSocialLogin = (provider: string) => {
    signIn(provider, { callbackUrl: "/dashboard" });
  };

  return (
    <div className={cn("w-full max-w-[900px] mx-auto", className)} {...props}>
      <Card className="overflow-hidden shadow-lg">
        <CardContent className="grid p-0 md:grid-cols-2">
          {/* Login Form */}
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">
                  Welcome back
                </h1>
                <p className="text-muted-foreground">
                  Login to your Softmax account to continue learning
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    className="h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline underline-offset-4"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="h-11 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <Button type="submit" className="w-full h-11 text-base">
                  Sign in
                </Button>
              </div>

              <div className="relative">
                <Separator className="my-4" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-sm text-muted-foreground">
                  Or continue with
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {socialProviders.map((social) => (
                  <Button
                    key={social.provider}
                    onClick={() => handleSocialLogin(social.provider)}
                    variant="outline"
                    className="h-11 hover:bg-muted"
                  >
                    {social.icon}
                    <span className="sr-only">Sign in with {social.name}</span>
                  </Button>
                ))}
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <a
                  href="#"
                  className="text-primary hover:underline underline-offset-4"
                >
                  Create an account
                </a>
              </p>
            </form>
          </div>

          {/* Image Section */}
          <div className="relative hidden md:block">
            <Image
              src="/assets/cover-image.jpg"
              alt="Login background"
              layout="fill"
              objectFit="cover"
              className="brightness-[0.9] transition-all duration-300 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </CardContent>
      </Card>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        By continuing, you agree to our{" "}
        <a href="#" className="hover:text-primary underline underline-offset-4">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="hover:text-primary underline underline-offset-4">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
