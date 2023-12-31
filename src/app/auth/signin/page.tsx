"use client";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import GoogleIcon from "@/components/icons/GoogleIcon";

interface Props {}

const page = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast.error("Something went wrong with your login.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            logo
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <Button
            type="button"
            className="max-w-sm mx-auto w-full"
            onClick={loginWithGoogle}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <GoogleIcon />
            )}
            Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
