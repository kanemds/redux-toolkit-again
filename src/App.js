import './App.css'
import Layout from './components/Layout'
import NewPostForm from './redux/features/posts/NewPostForm'
import PostsList from './redux/features/posts/PostsList'
import { Routes, Route } from 'react-router-dom'
import SinglePost from './redux/features/posts/SinglePost'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path='post'>
          <Route index element={<NewPostForm />} />
          <Route path=':postId' element={<SinglePost />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App
