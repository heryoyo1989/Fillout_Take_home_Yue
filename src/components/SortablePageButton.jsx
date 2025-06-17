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
  
  function SortablePageButton({ page, isActive, onSelect, onMenuClick }) {
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
      <div ref={setNodeRef} style={style}>
        <PageButton
          page={page}
          isActive={isActive}
          onClick={() => {
            onSelect(page.id);
          }}
          onMenuClick={(e) => onMenuClick(e)}
          dragHandleProps={{ ...attributes, ...listeners }}
        />
      </div>
    )
  }

export default SortablePageButton;
  