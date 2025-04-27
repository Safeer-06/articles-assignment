import React from "react";
import styles from "./index.module.scss";
import { format } from 'date-fns';
import Image from "next/image";

const ArticleCard = ({ article }) => {
  const mediaObject = article?.media?.[0]?.["media-metadata"];
  const secondImageSrc = mediaObject?.[2]?.url;
  const firstImageSrc = mediaObject?.[0]?.url;
  const imageSrc = secondImageSrc ? secondImageSrc : firstImageSrc;
  const formattedDate = article?.published_date ? format(
    new Date(article?.published_date),
    "dd MMMM yyyy"
  ) : "";
  return (
    <div className={styles["article_container"]}>
      <div className={styles["article_img_container"]}>
        <Image
          src={imageSrc ? imageSrc : '/placeholder.png'}
          alt={article?.title}
          fill
          className={styles["article_img"]}
          onError={(e) => {
            e.target.src = '/placeholder.png';
          }}
        />
      </div>
      <div className={styles["article_information_container"]}>
        <p className={styles["article_date"]}>{formattedDate}</p>
        <p className={styles["article_title"]} data-testid="article-card-title">{article?.title}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
