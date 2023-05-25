import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = (props) => {
  function incrementDisplayedCards() {
    if (props.cards.length > props.visibleCards) {
      props.setShowMore(true);
      const newVisibleCards = props.visibleCards + 3;
      props.setVisibleCards(newVisibleCards);
      console.log(newVisibleCards, props.cards.length);
    }
    if (props.visibleCards + 3 > props.cards.length) {
      props.setShowMore(false);
    }
  }

  function renderCardList() {
    if (props.cards) {
      return props.cards
        .slice(0, props.visibleCards)
        .map((card, i) => (
          <NewsCard
            isSavedNews={props.isSavedNews}
            isLoggedIn={props.isLoggedIn}
            key={card._id}
            card={card}
            index={i}
          />
        ));
    }
  }

  return (
    <section className="news-card-list">
      <div className="news-card-list__wrapper">
        {!props.isSavedNews ? (
          <div>
            <h2 className="news-card-list__title">Search results</h2>
            <ul className="news-card-list__container">{renderCardList()}</ul>
          </div>
        ) : (
          <div>
            <ul className="news-card-list__container">
              {props.cards &&
                props.cards.map((card, i) => (
                  <NewsCard
                    isSavedNews={props.isSavedNews}
                    isLoggedIn={props.isLoggedIn}
                    key={card._id}
                    card={card}
                    index={i}
                  />
                ))}
            </ul>
          </div>
        )}

        {!props.isSavedNews && props.showMore ? (
          <button
            className="news-card-list__show-more"
            onClick={incrementDisplayedCards}
          >
            Show more
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default NewsCardList;
