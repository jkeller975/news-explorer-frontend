import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import MainApi from "../../utils/MainApi";

function SavedNews(props) {
  // function handleRemoveArticle(data) {
  //   const articleId = data._id;
  //   MainApi.removeArticle(articleId, localStorage.getItem("jwt"))
  //     .then(() => {
  //       MainApi.getArticles().then((articles) => {
  //         props.setSavedArticles(articles.data);
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <div className="saved-news">
      <NewsCardList
        savedArticles={props.savedArticles}
        isLoggedIn={props.isLoggedIn}
        isSavedNews={true}
        onRemoveArticle={props.handleRemoveArticle}
      />
    </div>
  );
}

export default SavedNews;
