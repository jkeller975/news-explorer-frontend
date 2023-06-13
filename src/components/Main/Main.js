import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function Main(props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchKeyword, setSearchKeyword] = React.useState([]);
  const [isNewsCardListOpen, setNewsCardListOpen] = React.useState(false);
  const [visibleCards, setVisibleCards] = React.useState(0);
  const [cards, setCards] = React.useState();
  const [resultCardLength, setResultCardLength] = React.useState(0);
  const [showMore, setShowMore] = React.useState();
  const [searchError, setSearchError] = React.useState(false);

  function handleSearchSubmit(keyword) {
    setIsLoading(true);
  }

  return (
    <main className="main">
      <SearchForm
        setNewsCardListOpen={setNewsCardListOpen}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        handleSearchSubmit={handleSearchSubmit}
        searchHandler={props.searchHandler}
        isLoggedIn={props.isLoggedIn}
        setVisibleCards={setVisibleCards}
        setCards={setCards}
        cards={cards}
        setResultCardLength={setResultCardLength}
        setIsLoading={setIsLoading}
        resultCardLength={resultCardLength}
        setShowMore={setShowMore}
        setSearchError={setSearchError}
      />
      {isLoading && <Preloader />}
      {resultCardLength === 0 && isNewsCardListOpen && <NotFound />}
      {searchError && <ErrorMessage />}
      {isNewsCardListOpen && resultCardLength > 0 && (
        <NewsCardList
          cards={cards}
          isSavedNews={false}
          isLoggedIn={props.isLoggedIn}
          resultCardLength={resultCardLength}
          visibleCards={visibleCards}
          setVisibleCards={setVisibleCards}
          setShowMore={setShowMore}
          showMore={showMore}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
