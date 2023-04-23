import React from 'react';
import Container from '@mui/material/Container';
import './NewsContent.css';
import NewsCard from '../NewsCard/NewsCard';

const NewsContent = ({ newsArray, newsResults, loadmore, setLoadmore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app
          </span>
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            height="80%"
          />
          <img
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            height="80%"
          />
        </div>
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {loadmore <= newsResults && (
          <>
            {' '}
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadmore(loadmore + 20)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
