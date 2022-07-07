import React, { useState } from 'react';
import "./textArea.scss"



const BoardCreate = () =>{
    const [category, setCategory] = useState()
    const [title, setTitle] = useState()
    const [content, setContent] = useState()


    const handleChange = (e) => {
        setCategory(e.target.value)
      }

    return (
        <>
        <br></br>
    <div className="textArea-wrapper">
        <div>
        <div style={{ display: "flex",  justifyContent: "space-between"}}>
        <h3>글작성</h3>
        <label>카테고리 &nbsp;
        <select onChange={(e) => handleChange(e)}>
        <option value="free">자유게시판</option>
        <option value="customer">고객센터</option>
        </select>
        </label>

        </div>
        </div>
        <br></br>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="title"
        placeholder="제목을 입력하세요"
        value={title}
      />
      <textarea
        onChange={(e) => {
          setContent(e.target.value);
        }}
        className="text"
        placeholder="내용을 입력하세요"
        value={content}
      />
      
          <button>등록</button>
      </div>
        
        </>
        )
}





export default BoardCreate;

