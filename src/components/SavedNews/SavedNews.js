import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import MainApi from "../../utils/MainApi";

function SavedNews(props) {
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
