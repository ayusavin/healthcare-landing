import Article from "../models/article";

// Mock article images
import first_article from "/pages/homepage/cards/images/ic_first_article.png";
import second_article from "/pages/homepage/cards/images/ic_second_article.png";
import third_article from "/pages/homepage/cards/images/ic_third_article.png";

const mockArticles: Article[] = [
  {
    image: first_article,
    title: "Disease detection, check up in the laboratory",
    description:
      "In this case, the role of the health laboratory is very important to do a disease detection...",
    url: "",
  },
  {
    image: second_article,
    title: "Herbal medicines that are safe for consumption",
    description:
      "Herbal medicine is very widely used at this time because of its very good for your health...",
    url: "",
  },
  {
    image: third_article,
    title: "Natural care for healthy facial skin",
    description:
      "A healthy lifestyle should start from now and also for your skin health. There are some...",
    url: "",
  },
];

function listAll(): Iterable<Article> {
  return mockArticles;
}

export default { listAll };
