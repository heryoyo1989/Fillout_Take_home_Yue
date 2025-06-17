import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function PageButton({ title, icon, isActive, onClick }) {
  const [isFocused, setIsFocused] = useState(false)

  const baseStyle = `flex items-center justify-between w-full px-4 py-2 rounded-lg border text-sm font-medium transition-colors duration-150`

  const stateStyle = isActive
    ? `bg-white border-gray-300`
    : `bg-gray-100 hover:bg-gray-300 border-transparent`

  const focusRing = isFocused ? `ring-2 ring-blue-500 ring-offset-2` : ``

  return (
    <button
      onClick={onClick}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`${baseStyle} ${stateStyle} ${focusRing}`}
    >
      <div className="flex items-center">
        <div className="w-5 h-5 text-white-500 mr-2 shrink-0">{icon}</div>
        <span className="truncate">{title}</span>
      </div>
      {isActive && (
        <EllipsisVerticalIcon className="w-5 h-5 text-gray-400 ml-2" />
      )}
    </button>
  )
}