import { FlagIcon, PencilIcon, ClipboardIcon, DocumentDuplicateIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function PageContextMenu({ style, onClose }) {
  return (
    <div
      className="absolute z-50 w-56 rounded-md shadow-lg border border-gray-100 bg-white text-sm"
      style={style}
      onMouseLeave={onClose}
    >
      <div className="px-4 py-2 font-semibold text-gray-700 border-b">Settings</div>
      <ul className="py-1">
        <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700">
          <FlagIcon className="w-4 h-4" />
          Set as first page
        </li>
        <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700">
          <PencilIcon className="w-4 h-4" />
          Rename
        </li>
        <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700">
          <ClipboardIcon className="w-4 h-4" />
          Copy
        </li>
        <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700">
          <DocumentDuplicateIcon className="w-4 h-4" />
          Duplicate
        </li>
        <li className="h-px bg-gray-200 my-1" />
        <li className="flex items-center gap-2 px-4 py-2 hover:bg-red-100 cursor-pointer text-red-600">
          <TrashIcon className="w-4 h-4" />
          Delete
        </li>
      </ul>
    </div>
  );
}
