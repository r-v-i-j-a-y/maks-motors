"use client";

import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
          is_open_faq ? "bg-[#404040] text-white" : "text-black"
        } + border p-4 m-5 rounded-xl flex cursor-pointer  transition ease-in-out `}
        onClick={() => set_is_open_faq(!is_open_faq)}
      >
        <div>
          <AddIcon
            sx={{ color: "#FFB800", fontSize: 32 }}
            className={`${is_open_faq ? "hidden" : "block"}`}
          />
          <RemoveIcon
            sx={{ color: "#FFB800", fontSize: 32 }}
            className={`${is_open_faq ? "block" : "hidden"}`}
          />
        </div>
        <div className="ms-3 ease-in-out">
          <h6 className="font-semibold mt-1">{title}</h6>
          <p className={`${is_open_faq ? "block" : "hidden"} text-sm mt-2`}>
            {content}
          </p>
        </div>
      </li>
    </>
  );
}
