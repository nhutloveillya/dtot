"use client";

import { Button } from "@/components/ui/button";
import FieldChoiceCard from "@/components/ui/choice-card";
import { FormTanstackRadioGroup } from "@/components/ui/testform";
import { ModeToggle } from "@/components/ui/toggle-dm";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("option-one");

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
        <FieldChoiceCard
          quesname="Bạn có muốn trở thành femboi không?"
          quesdesc="Nếu bạn chọn có thì bạn sẽ trở thành femboi trong 3 ngày, nếu bạn chọn không thì thôi đừng edit nữa"
          opt={[
            {
              ans: "Có",
              ansdes: "Bạn sẽ trở thành femboi trong 3 ngày",
              id: "option-one"
            },
            {
              ans: "Không",
              ansdes: "Bạn sẽ không trở thành femboi",
              id: "option-two"
            },
          ]}
        />
        <Button className="m-3 scale-120" variant="outline">Xác nhận</Button>
          <FormTanstackRadioGroup />
      </main>
    </div>
  );
}
