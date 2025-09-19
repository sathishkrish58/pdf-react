function Main({ editorContent, onEditorChange, formData, onFormChange }) {
    return (
        <main className="flex flex-1 p-4 gap-4">
            {/* Left: Editor */}
            <div className="flex-1">
                <textarea
                    value={editorContent}
                    onChange={(e) => onEditorChange(e.target.value)}
                    className="w-full h-full border rounded p-2"
                    placeholder="Write HTML here..."
                />
            </div>


            {/* Right: Form */}
            <div className="w-1/3 border rounded p-4 bg-gray-50">
                <label className="block mb-2 font-semibold">Title</label>
                <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => onFormChange({ ...formData, title: e.target.value })}
                    className="w-full border rounded p-2 mb-4"
                    placeholder="Enter title"
                />


                <label className="block mb-2 font-semibold">Description</label>
                <textarea
                    value={formData.description}
                    onChange={(e) =>
                        onFormChange({ ...formData, description: e.target.value })
                    }
                    className="w-full border rounded p-2"
                    placeholder="Enter description"
                />
            </div>
        </main>
    );
}

export default Main;
