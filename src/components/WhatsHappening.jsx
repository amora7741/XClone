import { Link } from 'react-router-dom';

const WhatsHappening = () => {
  const trendingPosts = [
    { trendingCategory: 'Sports', title: 'LeBron James', posts: '324.6K' },
    { trendingCategory: 'Sports', title: 'Lakers', posts: '1.4M' },
    { trendingCategory: 'Sports', title: 'Lakers in 6', posts: '334K' },
    { trendingCategory: 'Politics', title: 'TikTok', posts: '70.3K' },
    { trendingCategory: 'Technology', title: '#TikTokBan', posts: '2,973' },
  ];

  return (
    <div className='asidecontainer trending'>
      <h1>What's happening</h1>
      <div className='trendingposts-container'>
        {trendingPosts.map((post, index) => (
          <Link to='#' key={index} className='link'>
            <TrendingPost post={post} />
          </Link>
        ))}
      </div>
      <button id='showmore'>Show more</button>
    </div>
  );
};

const TrendingPost = ({ post }) => {
  return (
    <div className='trending-post'>
      <div className='trending-post-top'>
        <p>Trending · {post.trendingCategory} </p>
        <button>
          <svg viewBox='0 0 24 24' aria-hidden='true'>
            <g>
              <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
            </g>
          </svg>
        </button>
      </div>
      <h2>{post.title}</h2>
      <p>{post.posts} posts</p>
    </div>
  );
};

export default WhatsHappening;
