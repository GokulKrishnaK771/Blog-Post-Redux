import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';
import { fetchPosts } from './features/posts/postsSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>

)