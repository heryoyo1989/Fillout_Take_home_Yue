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
  import { CSS } from '@dnd-kit/utilities'
import PageButton from './PageButton'
  
  function SortablePageButton({ page, activePageId, onSelect }) {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
    } = useSortable({ id: page.id })
  
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    }
  
    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <PageButton
          page={page}
          isActive={page.id === activePageId}
          onClick={() => onSelect(page.id)}
        />
      </div>
    )
  }

export default SortablePageButton;
  