import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews(props) {
  return (
    <div className="saved-news">
      <NewsCardList
        cards={props.cards}
        isLoggedIn={props.isLoggedIn}
        isSavedNews={true}
      />
    </div>
  );
}

export default SavedNews;
