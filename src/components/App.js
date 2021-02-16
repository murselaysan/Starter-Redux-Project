import React from "react";
import { connect } from "react-redux";


// const applyFilter = (article, searchTerm) =>{
// return article.title.toLowerCase().includes(searchTerm.toLowerCase());
// }

const Search = (props) => (
  <div>
    <label for="search">Search  </label>
    <input 
      id="seacrh"
      onChange={(event) => props.onSearch(event.target.value)}
      type="text"
    />
  </div>
);

const Articles = (props) => (
  <ul>
    {props.articles.filter(
      article => article.title.toLowerCase().includes(props.searchTerm.toLowerCase()))
      .map((article) => (
      <li key={article.id}>
        <a href={article.url}>{article.title}</a>
      </li>
    ))}
  </ul>
);

function App(props) {
  return (
    <div className="App">
      <h1>REDUX ARTİCLELİST SEARCH APP</h1>
      <p>Your searc is {props.searchTerm} </p>
      <Search onSearch={props.onSearch} />
      <Articles {...props} />
    </div>
  );
}

// connecting view layer to state layer with react-redux

const mapStateToProps = (state) => ({
  articles: state.articlesState.articles,
  searchTerm: state.searchState.searchTerm,
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (searchTerm) => dispatch({ type: "SEARCH_SET", searchTerm }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
