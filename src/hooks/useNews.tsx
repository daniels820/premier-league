import { useState, useEffect } from "react";
import { getNewfeedData } from "../services/newsFeedService";
import { Article } from "../components/news/News";

const removedKey = "[Removed]";

const useNews = (page?: number) => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);


  useEffect(() => {
    const fetchNews = async (): Promise<void> => {
      try {
        const { articles, totalResults } = await getNewfeedData(page);
        const filteredNews: Article[] = filterRemovedNews(articles);

        setTotalResults(totalResults);
        setNews(filteredNews);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the news", error);
      }
    };

    fetchNews();
  }, [page]);

  return { news, totalResults, loading, error };
};

export default useNews;

const filterRemovedNews = (news: any): Article[] => {
  return news.filter((article: any) => article.title !== removedKey);
};
