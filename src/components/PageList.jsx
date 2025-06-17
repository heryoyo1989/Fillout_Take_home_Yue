import PageButton from "./PageButton";
import { useState } from "react";
import { nanoid } from 'nanoid';
import InsertButton from "./InsertButton";
import AddPageButton from "./AddPageButton";
import AddPageModal from "./AddPageModal";

import {
    DndContext,
    closestCenter,
    useSensor,
    useSensors,
    PointerSensor,
  } from '@dnd-kit/core'
  import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
  } from '@dnd-kit/sortable'
import SortablePageButton from "./SortablePageButton";
import PageContextMenu from "./SettingMenu";

const initialPages = [
    { id: nanoid(), title: 'Info', icon: 'info' },
    { id: nanoid(), title: 'Details', icon: 'detail' },
    { id: nanoid(), title: 'Other', icon: 'other' },
    { id: nanoid(), title: 'Ending', icon: 'ending' }
  ]

export default function PageList() {
  const [pages, setPages] = useState(initialPages)
  const [activeIndex, setActiveIndex] = useState(initialPages[0].id);
  const [showModalAt, setShowModalAt] = useState(null);
  const [contextMenuInfo, setContextMenuInfo] = useState({ open: false, x: 0, y: 0, pageId: null });

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

  const sensors = useSensors(useSensor(PointerSensor))

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (active.id !== over.id) {
      const oldIndex = pages.findIndex(p => p.id === active.id)
      const newIndex = pages.findIndex(p => p.id === over.id)

      setPages(prev => arrayMove(prev, oldIndex, newIndex))
    }
  }

  const handleMenuClick = (e, pageId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    console.log(e.currentTarget, rect);
    
    setContextMenuInfo({
      open: true,
      x: rect.left - 100,
      y: rect.top - 260, // 提高一点点
      pageId,
    });
  };
  
  const closeContextMenu = () => {
    setContextMenuInfo({ ...contextMenuInfo, open: false });
  };

  return (
    <div className="flex w-64 p-4">
     <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={pages.map((p) => p.id)} strategy={verticalListSortingStrategy}>
          {pages.map((page, index) => (
            <div key={index} className="flex items-center">
              <SortablePageButton
                page={page}
                isActive={page.id === activeIndex}
                onSelect={(id) => {
                    setActiveIndex(id)
                }}
                onMenuClick={(e) => handleMenuClick(e, page.id)}
              />
              
              <InsertButton onClick={() => setShowModalAt(index)} />
             
            </div>
          ))}
        </SortableContext>
      </DndContext>
      <AddPageButton onClick={() => setShowModalAt(pages.length - 1) } />
      <AddPageModal 
        isOpen={showModalAt !== null}
        onClose={() => setShowModalAt(null)}
        onConfirm={handleAddPage}
      />
      {contextMenuInfo.open && (
        <PageContextMenu
            style={{ position: 'absolute', left: contextMenuInfo.x, top: contextMenuInfo.y }}
            onClose={closeContextMenu}
        />
      )}
    </div>
  );
}
