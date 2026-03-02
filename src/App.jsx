import PostsList from './components/posts/PostsList';
import AddPostForm from './components/posts/AddPostForm';
import SinglePagePost from './components/posts/SinglePagePost';
import EditPostForm from './components/posts/EditPostForm';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';

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

    </Route>
  </Routes>
  );
}

export default App;
