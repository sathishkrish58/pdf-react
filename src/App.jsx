import { useState } from 'react'
import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

function App() {
    const [count, setCount] = useState(0)

    const [editorContent, setEditorContent] = React.useState("");

    const [formData, setFormData] = React.useState({
        title: "",
        description: "",
    });

    return (
        <div className="flex flex-col h-screen">
            <Header
                productTitle="PDF Generator"
            />
            <Main
                editorContent={editorContent}
                onEditorChange={setEditorContent}
                formData={formData}
                onFormChange={setFormData}
            />
            {/* <Footer onSave={handleSave} /> */}
        </div>
    );
}

export default App
