"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import axios from "axios";
import ArticlesList from "../../components/ArticleList";
import { useArticleContext } from "../../context/ArticleContext";

const ArticlesHomePage = () => {
  const [Loading, setLoading] = useState(true);
  const { articles, setArticlesArray } = useArticleContext();
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const fetchArticles = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`
    );
    setArticlesArray(response?.data?.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>NY Times Most Popular Articles</h1>
      {Loading ? (
        <h2>Loading...</h2>
      ) : !articles?.length ? (
        <h2>No articles found</h2>
      ) : (
        <ArticlesList articlesData={articles} />
      )}
    </div>
  );
};

export default ArticlesHomePage;
