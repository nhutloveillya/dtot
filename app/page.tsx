"use client";

import { Button } from "@/components/ui/button";
import { TestFormTanstackRadioGroup } from "@/components/ui/form";
import { ModeToggle } from "@/components/ui/toggle-dm";
import Image from "next/image";

const demotest = [
  {
    quesname: "What is the capital of France?",
    quesdesc: "Choose the correct answer from the options below.",
    quesid: "capital-france",
    opt: [
      {
        ans: "Paris",
        ansdes: "The capital city of France.",
        id: "paris",
      },
      {
        ans: "London",
        ansdes: "The capital city of the United Kingdom.",
        id: "london",
      },
      {
        ans: "Rome",
        ansdes: "The capital city of Italy.",
        id: "rome",
      },
    ]
  },
  {
    quesname: "What is the largest planet in our solar system?",
    quesdesc: "Choose the correct answer from the options below.",
    quesid: "largest-planet",
    opt: [
      {
        ans: "Jupiter",
        ansdes: "The largest planet in our solar system.",
        id: "jupiter",
      },
      {
        ans: "Saturn",
        ansdes: "The second largest planet in our solar system.",
        id: "saturn",
      },
      {
        ans: "Earth",
        ansdes: "The third planet from the Sun.",
        id: "earth",
      },
    ]
  }
]

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ModeToggle />
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="mt-10 flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            trang sẽ biến bạn thành femboi trong 3 ngày, nếu bạn muốn trở thành femboi thì hãy edit file page.tsx ngay bây giờ, nếu không thì thôi đừng edit nữa
          </p>
        </div>
        <Button className="m-3 scale-120" variant="outline">Xác nhận</Button>
        <TestFormTanstackRadioGroup
        test={demotest}
        testname="Demo Test"
        testdesc="This is a demo test to showcase the functionality of the TestFormTanstackRadioGroup component." />
      </main>
    </div>
  );
}
