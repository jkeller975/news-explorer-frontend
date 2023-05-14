import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";

function Main(props) {
  const [isLoading, setIsLoading] = React.useState(false);
  // const [hasResults, setHasResults] = React.useState(true); //change to false
  const [searchKeyword, setSearchKeyword] = React.useState([]);
  const [isNewsCardListOpen, setNewsCardListOpen] = React.useState(false); //change to false
  const [visibleCards, setVisibleCards] = React.useState(0);
  const [cards, setCards] = React.useState();
  const [resultCardLength, setResultCardLength] = React.useState(0);

  function handleSearchSubmit(keyword) {
    setIsLoading(true);
  }

  return (
    <div className="main">
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
      />
      {isLoading && <Preloader />}
      {isNewsCardListOpen && (
        <NewsCardList
          cards={cards}
          isSavedNews={false}
          isLoggedIn={props.isLoggedIn}
          resultCardLength={resultCardLength}
          visibleCards={visibleCards}
          setVisibleCards={setVisibleCards}
        />
      )}
      <About />
    </div>
  );
}

export default Main;
