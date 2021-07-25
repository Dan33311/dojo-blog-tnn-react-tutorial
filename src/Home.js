import { useState } from 'react'
import BlogList from './Blog-list'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'web development fundamentals', body: 'lorem ipsum...', teacher: 'William', id: 1},
    { title: 'fullstack', body: 'lorem ipsum...', teacher: 'Jose', id: 2},
    { title: 'Nodejs tutorial', body: 'lorem ipsum...', teacher: 'Shaun', id: 3}
  ])
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
    </div>
  )
}

export default Home;

// add a button that delete a blog