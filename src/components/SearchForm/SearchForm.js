import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-container">
      <div className="search-container__content">
        <h2 className="search-container__title">
          What's going on in the world?
        </h2>
        <p className="search-container__text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search-bar">
          <input placeholder="Enter topic" className="search-bar__input" />
          <button type="submit" className="search-bar__button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
