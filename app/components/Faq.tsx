"use client";

import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { HiMinusSmall } from "react-icons/hi2";


export default function Faq({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [is_open_faq, set_is_open_faq] = useState(false);
  return (
    <>
      <li
        className={`${
          is_open_faq ? "bg-why_maks_color_1" : "text-black"
        } + border p-4 m-5 rounded-xl  mx-auto flex cursor-pointer faq_container transition ease-in-out `}
        onClick={() => set_is_open_faq(!is_open_faq)}
      >
        <div>
          <IoAdd
            size={32}
            color="#FFB800"
            className={`${is_open_faq ? "hidden" : "block"}`}
          />
          <HiMinusSmall
            size={32}
            color="#FFB800"
            className={`${is_open_faq ? "block" : "hidden"}`}
          />
        </div>
        <div className="ms-3 ease-in-out">
          <h1 className="font-semibold mt-1">{title}</h1>
          <p className={`${is_open_faq ? "block" : "hidden"} text-sm pt-3 `}>
            {content}
          </p>
        </div>
      </li>
    </>
  );
}
