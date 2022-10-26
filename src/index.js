import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from 'react-redux'
import { store } from "./redux/store"
import { fetchUsers } from "./redux/features/users/userSlice"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// run fetchUser right away
store.dispatch(fetchUsers())

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>

  </Provider>
  // </React.StrictMode>
)

