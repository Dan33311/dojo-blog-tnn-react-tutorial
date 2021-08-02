const BlogList = ({ blogs, title, handleDelete }) => {
  
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p><b>Written by: </b>{blog.author}</p>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;