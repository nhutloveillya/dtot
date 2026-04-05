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

function FieldChoiceCardOption({
  ans,
  ansdes,
  id
}: {
  ans: string
  ansdes: string
  id: string
}) {
  return (
    <FieldLabel htmlFor={id}>
      <Field orientation="horizontal">
        <RadioGroupItem value={ans.toLowerCase()} id={id} />
        <FieldContent>
          <FieldTitle>{ans}</FieldTitle>
          <FieldDescription>
            {ansdes}
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldLabel>
  )
}


export default function FieldChoiceCard(
  {
    quesname,
    quesdesc,
    opt,
    imga
  }
    : {
      quesname: string;
      quesdesc: string;
      opt: {
        ans: string;
        ansdes: string;
        id: string;
      }[];
      imga?: string
    }

) {

  return (
    <div className="w-full p-6 pt-5 rounded-lg border">
      <FieldGroup className="w-full">
        <FieldSet>
          <FieldLegend variant="label">{quesname}</FieldLegend>
          <FieldDescription className="hover:text-zinc-700 ">
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
            {opt.map((option) => (
              <FieldChoiceCardOption key={option.id} ans={option.ans} ansdes={option.ansdes} id={option.id} />
            ))}
          </RadioGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  )
}