"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useArticleContext } from "../../context/ArticleContext";
import styles from "./index.module.scss";
import Image from "next/image";
import { format } from "date-fns";

const ArticleDetailPage = () => {
  const id = Number(useParams()?.id);
  const { articles } = useArticleContext();
  const currentArticle = articles?.find((article) => article?.id === id);
  console.log("article test: ", currentArticle, articles);
  const mediaObject = currentArticle?.media?.[0]?.["media-metadata"];
  const secondImageSrc = mediaObject?.[2]?.url;
  const firstImageSrc = mediaObject?.[0]?.url;
  const imageSrc = secondImageSrc ? secondImageSrc : firstImageSrc;
  const formattedDate = currentArticle?.published_date ? format(
    new Date(currentArticle?.published_date),
    "dd MMMM yyyy"
  ) : "";
  return (
    <div className={styles["main_container"]}>
      <h1 data-testid="article-title">{currentArticle?.title}</h1>
      <div className={styles["details_container"]}>
        <div className={styles["image_container"]}>
          <Image
            src={imageSrc ? imageSrc : "/placeholder.png"}
            alt={currentArticle?.title}
            className={styles["article_image"]}
            fill
            onError={(e) => {
              e.target.src = "/placeholder.png";
            }}
          />
        </div>
        <div className={styles["information_container"]}>
          <h2 data-testid="article-date">
            Published Date: <span>{formattedDate ? formattedDate : "-"}</span>
          </h2>
          <p className={styles["label"]}>
            Section: {currentArticle?.section || "-"}
          </p>
          <p className={styles["label"]}>
            Subsection: {currentArticle?.subsection || "-"}
          </p>
          <p className={styles["label"]}>
            Source: {currentArticle?.source || "-"}
          </p>
          <p className={styles["label"]} data-testid="article-abstract">
            Abstract: <br /> {currentArticle?.abstract || "-"}
          </p>
          <p className={styles["label"]}>
            Keywords: <br /> {currentArticle?.adx_keywords || "-"}
          </p>
          <p className={styles["label"]}>{currentArticle?.byline || "-"}</p>
          {currentArticle?.url && (
            <a href={currentArticle?.url} target="_blank">
              <button className={styles["button"]}>More Information</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
