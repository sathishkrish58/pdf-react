import { FaPlus } from "react-icons/fa";

function Main({ editorContent, onEditorChange, formData, onFormChange }) {
    return (
        <main className="flex flex-1 p-4 gap-4">
            {/* Left: Editor */}
            <div className="w-1/2">
                <textarea
                    value={editorContent}
                    onChange={(e) => onEditorChange(e.target.value)}
                    className="w-full h-64 border rounded p-2"
                    placeholder="Write HTML here..."
                />
            </div>

            {/* Center: Plus Icon */}
            <div className="flex justify-center items-center">
                <FaPlus className="text-3xl text-gray-400" />
            </div>

            {/* Right: Form */}
            <form className="w-1/2 border rounded p-4 bg-gray-50 flex flex-col gap-6 justify-between h-64">
                <div className="flex items-center gap-4">
                    <label className="block font-semibold w-1/3 text-left">Title</label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => onFormChange({ ...formData, title: e.target.value })}
                        className="w-2/3 border rounded p-2"
                        placeholder="Enter title"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <label className="block font-semibold w-1/3 text-left">Description</label>
                    <textarea
                        value={formData.description}
                        onChange={(e) =>
                            onFormChange({ ...formData, description: e.target.value })
                        }
                        className="w-2/3 border rounded p-2"
                        placeholder="Enter description"
                    />
                </div>
                <button
                    type="submit"
                    className="self-end px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>
        </main>
    );
}

export default Main;
