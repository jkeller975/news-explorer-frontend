import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNewsHeader(props) {
  const currentUser = useContext(CurrentUserContext);
  const [keywordList, setKeywordList] = React.useState([]);
  React.useEffect(() => {
    const allKeywordsArray = props.cards.map((value) => value.keyword);
    var countKeywords = allKeywordsArray.reduce(function (keyword, value) {
      keyword[value] = (keyword[value] || 0) + 1;
      return keyword;
    }, {});
    var sortedArray = Object.keys(countKeywords).sort(function (a, b) {
      return countKeywords[b] - countKeywords[a];
    });
    const finalArray = sortedArray;
    setKeywordList(finalArray);
  }, [props.cards]);

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__container">
        <p className="saved-news-header__label">Saved articles</p>
        <h2 className="saved-news-header__title">
          {currentUser.name}, you have {props.cards.length} saved articles
        </h2>
        <p className="saved-news-header__keyword-text">
          By keywords:{" "}
          <span className="saved-news-header__keywords">
            {keywordList.length > 3
              ? `${keywordList[0]}, ${keywordList[1]}, and ${
                  keywordList.length - 2
                } others`
              : keywordList.join(", ")}
          </span>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
