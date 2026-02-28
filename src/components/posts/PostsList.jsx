import {useSelector} from 'react-redux';
import { selectAllPosts } from '../../features/posts/postsSlice';
import PostAuthor from './PostAuthor';

const PostsList = () => {

    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className='postsCredit'>
              <PostAuthor userId = {post.userId}/>
            </p>
        </article>
    ));


  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList;