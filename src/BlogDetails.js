import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
  const { id } = useParams()
  const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)
  const history = useHistory()

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, { // also I can say `id` or `blog.id`
      method: 'DELETE',
    })
    .then(() => {
      console.log('blog removed');
      history.push('/')
    })
  }

  return (  
    <div className="blog-details">

      <h2>Blog detail - { id }</h2>

      { isPending && <div>Loading ...</div> }
      { error && <div>{ error }</div> }

      { blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <button onClick={ handleDelete } >Delete</button>
        </article>
      ) }
      
    </div>
  );
}
 
export default BlogDetails