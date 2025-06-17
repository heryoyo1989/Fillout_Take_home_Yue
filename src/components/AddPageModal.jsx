import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import { ExclamationCircleIcon, DocumentIcon, CheckCircleIcon, PlusIcon } from '@heroicons/react/24/outline'

const ICON_OPTIONS = [
  { name: 'info', icon: <ExclamationCircleIcon className="w-5 h-5" /> },
  { name: 'detail', icon: <DocumentIcon className="w-5 h-5" /> },
  { name: 'ending', icon: <CheckCircleIcon className="w-5 h-5" /> },
]

export default function AddPageModal({ isOpen, onClose, onConfirm }) {
  const [title, setTitle] = useState('')
  const [selectedIcon, setSelectedIcon] = useState('info')

  const handleConfirm = () => {
    if (!title.trim()) return
    onConfirm({ title, icon: selectedIcon })
    setTitle('')
    setSelectedIcon('info')
    onClose()
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="bg-white rounded-lg p-6 z-50 w-80 space-y-4 shadow-xl">
        <Dialog.Title className="text-lg font-medium">Add New Page</Dialog.Title>

        <div>
          <label className="text-sm font-medium text-gray-700">Title</label>
          <input
            className="mt-1 w-full border rounded px-2 py-1 text-sm"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="e.g. Info Page"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Choose Icon</label>
          <div className="flex gap-2 mt-2">
            {ICON_OPTIONS.map(opt => (
              <button
                key={opt.name}
                onClick={() => setSelectedIcon(opt.name)}
                className={`p-2 border rounded ${selectedIcon === opt.name ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
              >
                {opt.icon}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button onClick={onClose} className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">Cancel</button>
          <button onClick={handleConfirm} className="text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">Confirm</button>
        </div>
      </div>
    </Dialog>
  )
}
