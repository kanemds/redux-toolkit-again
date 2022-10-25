import './App.css'
import NewPostForm from './redux/features/posts/NewPostForm'
import PostsList from './redux/features/posts/PostsList'


function App() {
  return (
    <div className="App">
      <NewPostForm />
      <PostsList />
    </div>
  )
}

export default App
