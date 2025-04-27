import { useRouter } from "next/navigation";
import styles from "./index.module.scss";
import ArticleCard from "../ArticleCard";
import React from "react";

const ArticlesList = ({ articlesData }) => {
  const { push } = useRouter();
  return (
    <div className={styles["articles_list_container"]}>
      {(articlesData || []).map((article) => {
        return (
          <div
            role="article"
            data-testid="article-item"
            key={article?.id}
            className={styles["article_item"]}
            onClick={() => push(`/article/${article?.id}`)}
          >
            <ArticleCard article={article} />
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesList;
