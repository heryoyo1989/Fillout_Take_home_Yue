import { EllipsisVerticalIcon, ExclamationCircleIcon, DocumentIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const ICON_MAP = {
  info: <ExclamationCircleIcon className="w-5 h-5" />,
  detail: <DocumentIcon className="w-5 h-5" />,
  other: <DocumentIcon className="w-5 h-5" />,
  ending: <CheckCircleIcon className="w-5 h-5" />,
}

export default function PageButton({ page, isActive, onClick, onMenuClick, dragHandleProps }) {
  const [isFocused, setIsFocused] = useState(false)

  const baseStyle = `flex items-center justify-between w-full px-4 py-2 rounded-lg border text-sm font-medium transition-colors duration-150`

  const stateStyle = isActive
    ? `bg-white border-gray-300`
    : `bg-gray-100 hover:bg-gray-300 border-transparent`

  const focusRing = isFocused ? `ring-2 ring-blue-500 ring-offset-2` : ``

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.()
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`${baseStyle} ${stateStyle} ${focusRing}`}
    >
      <div className="flex items-center" {...dragHandleProps}>
        <span>
            {ICON_MAP[page.icon]}
        </span>       
        <span className="ml-2 truncate">{page.title}</span>
      </div>
      {isActive && (
        <EllipsisVerticalIcon 
            onClick={(e) => {
                e.stopPropagation(); // 避免触发 select
                console.log("ellipse hk")
                onMenuClick(e);
            }}
            className="w-5 h-5 text-gray-400 ml-2" 
        />
      )}
    </button>
  )
}