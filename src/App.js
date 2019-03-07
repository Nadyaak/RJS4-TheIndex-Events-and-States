import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAthour: null,
    filteredauthors: authors
  };

  selectAuther = author => {
    const newCurrent = author;
    this.setState({ currentAthour: newCurrent });
  };

  list = () => {
    this.setState({ currentAthour: null });
  };

  filterAuthors = query => {
    this.setState({
      filteredauthors: authors.filter(author =>
        `${author.first_name} ${author.last_name}`
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    });
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar list={this.list} />
          </div>
          <div className="content col-10">
            {this.state.currentAthour ? (
              <AuthorDetail author={this.state.currentAthour} />
            ) : (
              <AuthorsList
                authors={this.state.filteredauthors}
                selectAuther={this.selectAuther}
                filterAuthors={this.filterAuthors}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
