import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
const modules={toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ align: [] }],

    [{ list: 'ordered'}, { list: 'bullet' }],
    [{ indent: '-1'}, { indent: '+1' }],

    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['link', 'image', 'video'],
    [{ color: [] }, { background: [] }],

    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },};
  const formats={formats:[
    [
        'bold', 'italic', 'underline', 'strike',
        'align', 'list', 'indent',
        'size', 'header',
        'link', 'image', 'video',
        'color', 'background',
        'clean',
      ]
    ]
  
};
export default function CreatePost(){
    const [title,setTitle]=useState('');
    const [summary,setSummary]=useState('');
    const [content,setContent]=useState('');    
    return(
        <form>
            <input type="title" 
            placeholder={"Title"} 
            value={title} 
            onChange={ev=>setTitle(ev.target.value)}/>
            <input type="summary" placeholder={"Summary"}
            value={summary}
            onChange={ev=>setSummary(ev.target.value)}/>
            <input type="file"/>
        <ReactQuill value={content} 
        onChange={newValue=>setContent(newValue)}
            modules={modules} 
        formats={formats}/>
        <button style={{marginTop:'5px'}}>
            Create Post
        </button>
        </form>
    )
}