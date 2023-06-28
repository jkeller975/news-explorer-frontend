import React from "react";
import Preloader from "../Preloader/Preloader";

function SearchForm(props) {
  const [formInput, setFormInput] = React.useState("");

  function handleChange(e) {
    props.setSearchKeyword(e.target.value);
    setFormInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formInput) {
      console.log("Error, no input");
    } else {
      props.setSearchKeyword(formInput);
      props.handleSearchSubmit(props.seachKeyword);
      newsSearch();
    }
  }

  function dateFormat(initialDate) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(initialDate.slice(0, 10));
    const newDate = `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
    return newDate;
  }

  function newsSearch() {
    props
      .searchHandler(formInput)
      .then((res) => {
        let newArticles = [];
        res.forEach((article) => {
          article.keyword = formInput;
          const formatDate = dateFormat(article.publishedAt);
          article.publishedAt = formatDate;
          article._id = Math.random().toString();
          newArticles.push(article);
        });

        return newArticles;
      })
      .then((articles) => {
        if (articles) {
          props.setVisibleCards(3);
          props.setCards(articles);
          props.setResultCardLength(articles.length);
          props.setIsLoading(false);
          props.setNewsCardListOpen(true);

          if (articles.length > 3) {
            props.setShowMore(true);
          } else {
            props.setShowMore(false);
          }

          return;
        } else {
          throw new Error("Unhandled request error");
        }
      })

      .catch(() => {
        props.setIsLoading(false);
        props.setSearchError(true);
      });
    return;
  }

  return (
    <section className="search-container">
      <div className="search__content">
        <h2 className="search__title">What's going on in the world?</h2>
        <p className="search__text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            placeholder="Enter topic"
            className="search-bar__input"
            onChange={handleChange}
          />
          {props.isLoading && <Preloader />}
          <button type="submit" className="search-bar__button">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
