import PageButton from "./PageButton";
import { useState } from "react";
import { nanoid } from 'nanoid';
import InsertButton from "./InsertButton";
import AddPageButton from "./AddPageButton";
import AddPageModal from "./AddPageModal";

const initialPages = [
    { id: nanoid(), title: 'Info', icon: 'info' },
    { id: nanoid(), title: 'Details', icon: 'detail' },
    { id: nanoid(), title: 'Other', icon: 'other' },
    { id: nanoid(), title: 'Ending', icon: 'ending' }
  ]

export default function PageList() {
  const [pages, setPages] = useState(initialPages)
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModalAt, setShowModalAt] = useState(null);

  const handleAddPage = ({ title, icon }) => {
    const newPage = {
        id: nanoid(),
        title,
        icon,
    }
    const newPages = [...pages]
    newPages.splice(showModalAt + 1, 0, newPage)
    setPages(newPages)
    setShowModalAt(null)
  }

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
          <InsertButton onClick={() => setShowModalAt(idx)} />
        </div>
      ))}
      <AddPageButton onClick={() => setShowModalAt(pages.length - 1) } />
      <AddPageModal 
        isOpen={showModalAt !== null}
        onClose={() => setShowModalAt(null)}
        onConfirm={handleAddPage}
      />
    </div>
  );
}
