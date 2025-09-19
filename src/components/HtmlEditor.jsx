// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"

// HTML Editor Component
function HtmlEditor({ value, onChange }) {
    return (
        <section className="flex-1 border rounded p-4 bg-white shadow">
            <h2 className="font-semibold mb-2">HTML Editor</h2>
            {/* <ReactQuill theme="snow" value={value} onChange={onChange} /> */}
        </section>
    );
}

export default HtmlEditor;