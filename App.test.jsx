import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
// import { useRouter } from 'next/navigation';
// import { createMemoryHistory } from 'history';
import { ArticleProvider } from "./context/ArticleContext";
// import ArticlesList from './components/ArticleList';
import ArticlesHomePage from "./containers/home-page";
import ArticleDetailPage from "./containers/article-page";

// useRouter should return an object with a push method
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("axios", () => ({
  get: () =>
    Promise.resolve({
      data: {
        results: [
          {
            id: 1,
            title: "Article 1",
            abstract: "This is article 1",
            published_date: "2022-01-01",
            media: [
              {
                "media-metadata": [{ url: "https://example.com/article1.jpg" }],
              },
            ],
          },
          {
            id: 2,
            title: "Article 2",
            abstract: "This is article 2",
            published_date: "2022-01-02",
            media: [
              {
                "media-metadata": [{ url: "https://example.com/article2.jpg" }],
              },
            ],
          },
          {
            id: 3,
            title: "Article 3",
            abstract: "This is article 3",
            published_date: "2022-01-03",
            media: [
              {
                "media-metadata": [{ url: "https://example.com/article3.jpg" }],
              },
            ],
          },
          {
            id: 4,
            title: "Article 4",
            abstract: "This is article 4",
            published_date: "2022-01-04",
            media: [
              {
                "media-metadata": [{ url: "https://example.com/article4.jpg" }],
              },
            ],
          },
          {
            id: 5,
            title: "Article 5",
            abstract: "This is article 5",
            published_date: "2022-01-05",
            media: [
              {
                "media-metadata": [{ url: "https://example.com/article5.jpg" }],
              },
            ],
          },
        ],
      },
    }),
}));

describe("ArticlesHomePage", () => {
  it("renders 5 articles", async () => {
    const { getAllByRole } = render(
      <ArticleProvider>
        <ArticlesHomePage />
      </ArticleProvider>
    );
    // wait for the articles to be fetchhed and rendered
    await waitFor(() => expect(getAllByRole("article").length).toBe(5));
  });
});
