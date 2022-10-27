import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { allUsers } from './userSlice'

const UserList = () => {

  const users = useSelector(allUsers)

  const renderUsers = users.map(user =>
    <li key={user.id}>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </li>
  )

  return (
    <section>
      <h2>Users</h2>
      <ul>
        {renderUsers}
      </ul>
    </section>
  )
}

export default UserList


