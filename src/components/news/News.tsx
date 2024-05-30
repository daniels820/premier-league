import "./News.css";
import Loader from "../loader/Loader";
import useNews from "../../hooks/useNews";
import Pagination from "../pagination/Pagination";
import React, { ElementRef, createRef, useRef, useState } from "react";

export interface Article {
  title: string;
  url: string;
  urlToImage: string;
  description: string;
}

const NewsFeed: React.FC = () => {
  const [page, setPage] = useState(1);
  const { news: articles, totalResults, loading, error } = useNews(page);
  let ref = useRef<HTMLDivElement>(null);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const pageSize = 20; // You can adjust this number (maximum is 100)
  const totalPages = Math.ceil(totalResults / pageSize);

  const limitDescription = (description: string): string => {
    return description.length > 250
      ? `${description.substring(0, 250)}...`
      : description;
  };
  const goToArticle = (articleUrl: string): void => {
    window.open(articleUrl, "_blank");
  };

  const handleNewPage = (page: number): void => {
    setPage(page);
    ref.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="newsfeed">
      <h1>Latest Premier League News</h1>
      <div className="articles-container" ref={ref}>
        {articles.length > 0 ? (
          <ul className="articles-list">
            {articles.map((article: Article, index: number) => (
              <li
                className="article"
                key={index}
                onClick={() => goToArticle(article.url)}
                style={{
                  backgroundImage: `url(${article.urlToImage})`,
                  backgroundColor: "#00B1E1",
                }}
              >
                <div className="main">
                  <h1>{article.title}.</h1>
                  <p>{limitDescription(article.description)}.</p>
                  <div className="source-link"></div>
                  <div className="info">
                    <span>BBC WORLD NEWS</span>
                    <i className="fas fa-thumbs-up"></i>
                    <i className="fas fa-share"></i>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handleNewPage}
      />
    </div>
  );
};

export default NewsFeed;
