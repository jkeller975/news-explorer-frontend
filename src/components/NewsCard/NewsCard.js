import React, { useState } from "react";
import Photo from "../../images/no_photo_found.jpg";

const NewsCard = (props) => {
  const [isSaved, setIsSaved] = useState(false);

  async function handleDelete() {
    const cardDeleted = await props.onRemoveArticleClick(props.card);
    if (cardDeleted) {
      setIsSaved(false);
      return;
    }
  }

  function handleArticleSave(card) {
    if (isSaved) {
      handleDelete();
      return;
    } else {
      setIsSaved(true);
      const savedArticleId = props.addArticleHandler({
        keyword: props.card.keyword,
        title: props.card.title,
        text: props.card.description,
        date: props.card.publishedAt,
        source: props.card.source.name,
        link: props.card.url,
        image: props.card.urlToImage,
      });
    }
  }

  function toggleDeleteSave() {
    if (props.isSavedNews && props.isLoggedIn) {
      return (
        <button
          className="news-card__delete-button"
          onClick={() => props.onRemoveArticleClick(props.card)}
        >
          <span className="news-card__save-button-label">
            <p>Remove from saved</p>
          </span>
        </button>
      );
    } else if (!props.isSavedNews && props.isLoggedIn) {
      return (
        <button
          className={`news-card__save-button
          ${isSaved ? "news-card__save-button_active" : ""}`}
          onClick={() => {
            setIsSaved(!isSaved);
            handleArticleSave(props.card);
          }}
        ></button>
      );
    } else {
      return (
        <button className="news-card__save-button">
          <span className="news-card__save-button-label">
            <p>Sign in to save articles</p>
          </span>
        </button>
      );
    }
  }

  function keywords() {
    if (props.isSavedNews) {
      return (
        <div className="news-card__keyword">
          <p>
            {props.card.keyword[0].toUpperCase() + props.card.keyword.slice(1)}
          </p>
        </div>
      );
    }
  }

  function missingPhoto() {
    if (props.card.urlToImage === null) {
      return Photo;
    } else {
      return props.card.urlToImage;
    }
  }

  return (
    <li className="news-card">
      {toggleDeleteSave()}
      {keywords()}
      <img
        className="news-card__image"
        src={missingPhoto()}
        alt={props.card.title}
      />
      <div className="news-card__info-container">
        <p className="news-card__date">{props.card.date}</p>
        <h3 className="news-card__title">{props.card.title}</h3>
        <p className="news-card__text">{props.card.description}</p>
        <p className="news-card__source">{props.card.source.name}</p>
      </div>
    </li>
  );
};

export default NewsCard;
