import BlogList from './Blog-list'
import useFetch from './useFetch'

const Home = () => {
  // I have to run the port 8000 localy
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{error}</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  )
}

export default Home;
