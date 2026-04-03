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

interface FieldChoiceCardProps {
  quesname: string;
  quesdesc: string;
  ans1: string;
  ans2: string;
  ans3: string;
  ans4: string;
  ansdes1?: string;
  ansdes2?: string;
  ansdes3?: string;
  ansdes4?: string;
  imga?: string;
}

interface fieldChoiceCardGroupProps {
  fccprops: FieldChoiceCardProps[]
}

const FieldChoiceCardGroup = (
  { fccprops }: fieldChoiceCardGroupProps
) => {
  return (
    <div className="w-full p-6 pt-5 rounded-lg border">
      <FieldGroup className="w-full">
        <FieldSet>
          <FieldLegend variant="label">{quesname}</FieldLegend>
          <FieldDescription className="text-lg hover:text-zinc-700 ">
            {quesdesc}
            {imga && (
              <img
                className="inline-block rounded-md mt-4 mb-4 active:scale-99 hover:scale-102 transition-transform"
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

export default FieldChoiceCardGroup