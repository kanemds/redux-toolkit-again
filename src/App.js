import './App.css'
import Layout from './components/Layout'
import NewPostForm from './redux/features/posts/NewPostForm'
import PostsList from './redux/features/posts/PostsList'
import { Routes, Route, Navigate } from 'react-router-dom'
import SinglePost from './redux/features/posts/SinglePost'
import EditPost from './redux/features/posts/EditPost'
import UserPage from './redux/features/users/UserPage'
import UserList from './redux/features/users/UserList'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path='post'>
          <Route index element={<NewPostForm />} />
          <Route path=':postId' element={<SinglePost />} />
          <Route path='edit/:postId' element={<EditPost />} />
        </Route>

        <Route path='user'>
          <Route index element={<UserList />} />
          <Route path=':userId' element={<UserPage />} />
        </Route>

        {/* or 404 page not found */}
        <Route path='*' element={<Navigate to='/' replace />} />

      </Route>
    </Routes>
  )
}

export default App
