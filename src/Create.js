import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Mario')

  return (  
    <div className="create">
      <h2>Create new blog view</h2>
      <form>

        <label>Blog title: </label>
        <input 
          required 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        />

        <label>Blog body: </label>
        <textarea 
          required
          value={body}
          onChange={(e) => setBody(e.target.value)} 
        ></textarea>

        <label>Blog author: </label>
        {/* <select name="" id=""> */}
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Mario">Mario</option>
          <option value="Luigi">Luigi</option>
        </select>

        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>

      </form>
    </div>
  );
}
 
export default Create;