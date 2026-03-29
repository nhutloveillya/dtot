"use client"

import * as React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function PlanRadioGroup() {
  const [selectedPlan, setSelectedPlan] = React.useState("plus")

  const plans = [
    { id: "plus", title: "Plus", desc: "For individuals and small teams." },
    { id: "pro", title: "Pro", desc: "For growing businesses." },
    { id: "enterprise", title: "Enterprise", desc: "For large teams and enterprises." },
  ]

  return (
    <RadioGroup
      value={selectedPlan}
      onValueChange={setSelectedPlan}
      className="grid gap-4 w-full max-w-md"
    >
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="flex items-center justify-between p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors [&:has([data-state=checked])]:border-black [&:has([data-state=checked])]:bg-slate-50"
          onClick={() => setSelectedPlan(plan.id)}
        >
          <div className="flex flex-col gap-1">
            <span id={`plan-${plan.id}-label`} className="font-bold text-base text-black">
              {plan.title}
            </span>
            <span className="font-normal text-sm text-muted-foreground">{plan.desc}</span>
          </div>

          <RadioGroupItem
            value={plan.id}
            aria-labelledby={`plan-${plan.id}-label`}
            className="h-5 w-5 border-2"
          />
        </div>
      ))}
    </RadioGroup>
  )
}
