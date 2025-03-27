import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Posts, { loader as postsLoader } from './Routes/Posts.jsx'
import NewPost, { action as newPostAction } from './Routes/NewPost.jsx';
import RootLayout from './Routes/RootLayout.jsx';
import PostDetails, { loader as postDetailsLoader } from './Routes/PostDetails.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/created-posts', element: <NewPost />, action: newPostAction },
          { path: '/:postId', element: <PostDetails />, loader: postDetailsLoader }
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
