"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldContent, FieldTitle, FieldDescription } from "@/components/ui/field";

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

        <RadioGroup
          value={spacing}
          onValueChange={setSpacing}
          className="max-w-sm mt-10 space-y-3"
        >
          <Field
            orientation="horizontal"
            className="cursor-pointer rounded-xl border border-input p-4"
            onClick={() => setSpacing("plus")}
          >
            <FieldContent>
              <FieldTitle>Plus</FieldTitle>
              <FieldDescription>For individuals and small teams.</FieldDescription>
            </FieldContent>
            <RadioGroupItem value="plus" />
          </Field>

          <Field
            orientation="horizontal"
            className="cursor-pointer rounded-xl border border-input p-4"
            onClick={() => setSpacing("pro")}
          >
            <FieldContent>
              <FieldTitle>Pro</FieldTitle>
              <FieldDescription>For growing businesses.</FieldDescription>
            </FieldContent>
            <RadioGroupItem value="pro" />
          </Field>

          <Field
            orientation="horizontal"
            className="cursor-pointer rounded-xl border border-input p-4"
            onClick={() => setSpacing("enterprise")}
          >
            <FieldContent>
              <FieldTitle>Enterprise</FieldTitle>
              <FieldDescription>For large teams and enterprises.</FieldDescription>
            </FieldContent>
            <RadioGroupItem value="enterprise" />
          </Field>
        </RadioGroup>
      </main>
    </div>
  );
}
