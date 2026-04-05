"use client"

import * as React from "react"
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"


export function TestFormTanstackRadioGroup(
    {
        test,
        testname,
        testdesc
    }:
        {
         test: {
          quesname: string;
          quesdesc: string;
          quesid: string;
          opt: {
              ans: string;
              ansdes: string;
              id: string;
          }[];
        }[],
        testname: string;
        testdesc: string;
        
    }
) {
  const defaultValues = Object.fromEntries(
    test.map((question) => [question.quesid, ""]),
  ) as Record<string, string>

  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: ({ value }) => {
        const fieldErrors = Object.fromEntries(
          test
            .filter((question) => !value[question.quesid])
            .map((question) => [
              question.quesid,
              [{ message: "You must select an answer to continue." }],
            ]),
        )

        return Object.keys(fieldErrors).length
          ? { fields: fieldErrors }
          : undefined
      },
    },

    onSubmit: async ({ value }) => {
      toast("You submitted the following values:", {
        description: (
          <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      })
    },
  })

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>{testname}</CardTitle>
        <CardDescription>
          {testdesc}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="form-tanstack-radiogroup"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            {test.map((question) => (
            <form.Field
              key={question.quesname}
              name={question.quesid}
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                    <FieldSet key={question.quesname}>
                      <FieldLegend>{question.quesname}</FieldLegend>
                      <FieldDescription>
                        {question.quesdesc}
                      </FieldDescription>
                      <RadioGroup
                        name={field.name}
                        value={field.state.value}
                        onValueChange={field.handleChange}
                      >
                      {question.opt.map((option) => (
                        <FieldLabel htmlFor={option.id} key={option.id}>
                          <Field orientation="horizontal" data-invalid={isInvalid}>
                            <RadioGroupItem
                              value={option.ans.toLowerCase()}
                              id={option.id}
                              aria-invalid={isInvalid}
                            />
                            <FieldContent>
                              <FieldTitle>{option.ans}</FieldTitle>
                              <FieldDescription>
                                {option.ansdes}
                              </FieldDescription>
                            </FieldContent>
                          </Field>
                        </FieldLabel>
                      ))}
                      </RadioGroup>
                      {isInvalid ? (
                        <FieldError errors={field.state.meta.errors} />
                      ) : null}
                    </FieldSet>
                )
              }}
            />))}
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-tanstack-radiogroup">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
