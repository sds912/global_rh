
import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function PostEditor(props) {
  const [value, setValue] = useState('');

  return (
      <div style={{marginBottom: "4em"}}>
            <lab>Descripttion</lab>
            <ReactQuill style={{height: "250px"}} theme="snow" value={value}  onChange={(v) =>{
              setValue(v);
              props.action(v)
              }} />
      </div>
  );
}