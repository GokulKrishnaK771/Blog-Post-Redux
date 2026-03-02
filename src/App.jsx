import PostsList from './components/posts/PostsList';
import AddPostForm from './components/posts/AddPostForm';
import SinglePagePost from './components/posts/SinglePagePost';
import EditPostForm from './components/posts/EditPostForm';
import UserPage from './components/users/UserPage';
import UsersList from './components/users/UsersList';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePagePost />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />

      </Route>
    </Routes>
  );
}

export default App;
