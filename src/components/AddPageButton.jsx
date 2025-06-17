import { PlusIcon } from '@heroicons/react/24/outline'

export default function AddPageButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 px-3 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-100 transition-colors cursor-pointer"
      title="Add Page"
    >
      <PlusIcon className="w-5 h-5 text-gray-600" />
      <span className="text-sm text-gray-800 whitespace-nowrap">Add Page</span>
    </button>
  )
}
