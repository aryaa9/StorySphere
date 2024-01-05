import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

export default function CreatePost(){
    const [title,setTitle]=useState('');
    const [summary,setSummary]=useState('');
    const [content,setContent]=useState('');
    
    return(
        <form>
            <input type="title" placeholder={"Title"}/>
            <input type="summary" placeholder={"Summary"}/>
            <input type="file"/>
        <ReactQuill/>
        <button style={{marginTop:'5px'}}>
            Create Post
        </button>
        </form>
    )
}