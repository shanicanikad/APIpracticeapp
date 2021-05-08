import React, { Component } from 'react'
import "./search.css"

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: null,
            query: '',
            items: [],
        }
    }

    onChange = (event) => {
        const { value } = event.target;
        this.setState({
            query: value
        });

        this.search(value);
    };

    search = query => {
        const url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${query}`;
        const token = {};
        this.token = token;

        fetch(url)
            .then(results => results.json())
            .then(data => {
                if (this.token === token) {
                    this.setState({ items: data });
                }
            });
    };

    componentDidMount() {
        this.search("");
    }

    render() {
        const { query } = this.state;

        return (
            <form>
                <input
                    type="text"
                    value={query}
                    className="search-box"
                    placeholder="Search by Product Type ie 'Lipstick' or 'Blush'..."
                    onChange={this.onChange}
                />
                <div className= "list">
                {this.state.items.map(item => (
                    <section className= "group" key={item.id}>
                        <p className="bold">{item.name}</p>
                        <p><img src={item.image_link} /></p>
                        <p className="price">Price: ${item.price}</p>
                        <button onClick={() => alert("Your item has been added to the cart!")}> Add</button>
                        <p>{item.description}</p>
                    </section>
                ))}
                </div>
            </form>
        );
    }
}

export default Search


// import React from 'react';
// import "./search.css";
// import axios from 'axios'

// class Search extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             query: '',
//             results: {},
//             loading: false,
//             message: '',
//         };
//         this.cancel = '';

//     }

//     fetchSearchResults = (query) => {

//         const searchUrl = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${query}`;

//         if (this.cancel) {
//             // Cancel the previous request before making a new request
//             this.cancel.cancel();
//         }
//         // Create a new CancelToken
//         this.cancel = axios.CancelToken.source();

//         axios
//             .get(searchUrl, {
//                 cancelToken: this.cancel.token,
//             })
//             .then((res) => {
//                 const resultNotFoundMsg = !res.data.hits.length
//                     ? 'There are no more search results. Please try a new search.'
//                     : '';

//                 this.setState({
//                     results: res.data.hits,
//                     message: resultNotFoundMsg,
//                     loading: false,
//                 });
//             })
//             .catch((error) => {
//                 if (axios.isCancel(error) || error) {
//                     this.setState({
//                         loading: false,
//                         message: 'Failed to fetch results. Please check network',
//                     });
//                 }
//             });
//     };
//     handleOnInputChange = (event) => {
//         const query = event.target.value;

//         if ( ! query ) {
//             this.setState({ query, results: {}, message: '' } );
//         } else {
//             this.setState({ query, loading: true, message: '' }, () => {
//                 this.fetchSearchResults(1, query);
//             });
//         }
//     };

//     renderSearchResults = () => {
//         const {results} = this.state;

//         if (Object.keys(results).length && results.length) {
//             return (
//                 <div className="results-container">
//                     {results.map((result) => {
//                         return (
//                             <a key={result.id} href={result.image_link} className="result-items">
//                                 <h6 className="image-username">{result.name}</h6>
//                                 <div className="image-wrapper">
//                                     <img className="image" src={result.image_link} alt={result.name}/>
//                                 </div>
//                             </a>
//                         );
//                     })}
//                 </div>
//             );
//         }
//     };

//             render() {
//                 const { query } = this.state;
//                 return (
//                     <div className="container">

//                         <label className="search-label" htmlFor="search-input">
//                             <input
//                                 type="text"
//                                 value={query}
//                                 id="search-input"
//                                 placeholder="Search..."
//                                 onChange={this.handleOnInputChange}
//                             />
//                             <i className="fa fa-search search-icon"/>
//                         </label>

//                         { this.renderSearchResults() }
//                     </div>
//                     )
//             }
//         }
// export default Search;
