import axios from "axios";
import { Article } from "../components/news/News";

export const getNewfeedData = async (
  page: number = 1
): Promise<{ articles: Article[]; totalResults: number }> => {
  const pageSize = 20;
  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: "Premier League",
        language: "en",
        sortBy: "publishedAt",
        apiKey: "0065f0ef01c941c7945bebedef2865ce",
        page: page,
        pageSize: pageSize,
      },
    });

    return {
      articles: response?.data?.articles,
      totalResults: response?.data?.totalResults,
    };
  } catch (error) {
    console.error("Error fetching newsfeed", error);
    throw error;
  }
};
