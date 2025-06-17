import PageButton from "./PageButton";
import {
  ExclamationCircleIcon,
  DocumentIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import InsertButton from "./InsertButton";

export default function PageList() {
  const [activeIndex, setActiveIndex] = useState(0);

  const pages = [
    { title: "Info", icon: <ExclamationCircleIcon /> },
    { title: "Details", icon: <DocumentIcon /> },
    { title: "Other", icon: <DocumentIcon /> },
    { title: "Ending", icon: <CheckCircleIcon /> },
  ];

  return (
    <div className="flex w-64 p-4">
      {pages.map((page, idx) => (
        <div key={idx} className="flex items-center">
          <PageButton
            key={idx}
            title={page.title}
            icon={page.icon}
            isActive={idx === activeIndex}
            onClick={() => setActiveIndex(idx)}
          />
          {idx < pages.length - 1 && <InsertButton onClick={() => console.log('insert after', idx)} />}
        </div>
      ))}
    </div>
  );
}
