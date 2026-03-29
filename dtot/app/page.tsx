"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlanRadioGroup } from "@/components/ui/choice-card";

export default function Home() {
  const [spacing, setSpacing] = useState("plus");

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-6xl font-bold text-center sm:text-left">
          Welcome to{" "}
          <a href="https://dtot.dev" className="text-blue-600">
            DTOT
          </a>
        </h1>
        <p className="mt-4 text-lg text-center my-8 sm:text-left">
          Your ultimate task and project management tool.
        </p>
        <p className="mt-4 text-2xl text-center sm:text-left">
          A tool to help you manage your tasks and projects efficiently.
        </p>
        <Card className="mt-10 mx-auto w-full max-w-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Small Card</CardTitle>
            <CardDescription>
              This card uses the small size variant.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-lg">
            <p>
              The card component supports a size prop that can be set to
              &quot;sm&quot; for a more compact appearance.
            </p>
          </CardContent>
          <CardFooter className="w-full gap-4">
            <Button variant="outline" size="sm">
              Action
            </Button>
          </CardFooter>
        </Card>
        <PlanRadioGroup/>
      </main>
    </div>
  );
}
