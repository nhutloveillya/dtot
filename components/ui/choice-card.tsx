import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function FieldChoiceCard(
  { quesname,
    quesdesc,
    ans1,
    ans2,
    ans3,
    ans4,
    ansdes1,
    ansdes2,
    ansdes3,
    ansdes4,
    imga
    }:
    {
      quesname: string;
      quesdesc: string;
      ans1: string;
      ans2: string;
      ans3: string;
      ans4: string;
      ansdes1?: string;
      ansdes2?: string;
      ansdes3?: string;
      ansdes4?: string,
      imga?: string;
    }) {
  return (
    <div className="w-full p-6 pt-5 rounded-lg border">
      <FieldGroup className="w-full">
        <FieldSet>
          <FieldLegend variant="label">{quesname}</FieldLegend>
          <FieldDescription className="text-md">
            {quesdesc}
            {imga && (
              <img
                className="inline-block rounded-md mt-4 mb-4 hover:scale-102 transition-transform"
                src={imga}
                alt="Question image"
              />
            )}
          </FieldDescription>
          <RadioGroup>
            <FieldLabel htmlFor="option-one">
              <Field orientation="horizontal">
                <RadioGroupItem value={ans1.toLowerCase()} id="option-one" />
                <FieldContent>
                  <FieldTitle>{ans1}</FieldTitle>
                  <FieldDescription>
                    {ansdes1}
                  </FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="option-two">
              <Field orientation="horizontal">
                <RadioGroupItem value={ans2.toLowerCase()} id="option-two" />
                <FieldContent>
                  <FieldTitle>{ans2}</FieldTitle>
                  <FieldDescription>
                    {ansdes2}
                  </FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="option-three">
              <Field orientation="horizontal">
                <RadioGroupItem value={ans3.toLowerCase()} id="option-three" />
                <FieldContent>
                  <FieldTitle>{ans3}</FieldTitle>
                  <FieldDescription>
                    {ansdes3}
                  </FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="option-four">
              <Field orientation="horizontal">
                <RadioGroupItem value={ans4.toLowerCase()} id="option-four" />
                <FieldContent>
                  <FieldTitle>{ans4}</FieldTitle>
                  <FieldDescription>
                    {ansdes4}
                  </FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  )
}
