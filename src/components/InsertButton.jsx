import { PlusIcon } from '@heroicons/react/24/outline'

function InsertButton({ onClick }) {
  return (
    <div className="relative group">
      <div className="w-10 border-t-2 border-dashed border-gray-400 mx-2" />
      <button
        onClick={onClick}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   hidden group-hover:flex items-center justify-center
                   w-6 h-6 rounded-full bg-white border border-gray-300 shadow cursor-pointer
                   "
      >
        <PlusIcon className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  )
}

export default InsertButton;