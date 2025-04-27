'use client'; 
import React, { createContext, useContext, useState } from 'react';

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const setArticlesArray = (articleItems) => {
    setArticles(articleItems);
  };
  return (
    <ArticleContext.Provider value={{ articles, setArticlesArray }}>
      {children}
    </ArticleContext.Provider>
  );
};
export const useArticleContext = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error('useArticleContext must be used within an ArticleProvider');
  }
  return context;
};
