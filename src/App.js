import React, { Component } from "react";
import "./App.css";
import Pic from "../src/pictures/pic2.png"
import MakeUpPage from "./makeUpPage";


let url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl";

const options = {
  method: "GET",
  headers: {
    Accept: "application.json",
  }
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.findMakeup();
  }


  findMakeup = () => {
    const url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl";
    fetch(url, {
      headers: {
        Accept: "applcation/json",
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ isLoaded: true, items: data }));
    console.log("Where are my results", this.state.items)
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div className="App">
            <img src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAACaCAMAAAD8SyGRAAAAkFBMVEX///8jHyAAAADIx8egoKETDQ4WERINAwbp6el3dncuLC0gGx26uruIh4cMAAWkpKRMSkvv8PB9fHzDwsLY2NnPzs4cFxhwb3H5+fmZmZqurq/l5ebT09QKAABramve3t9cW1xCQEJIR0iOjo9SUVI6ODpjYmSysrMyMTQnJSaSkpIvLS4XFRhXV1iamppFQkMD78DYAAAJl0lEQVR4nO2b2YKquhKGScmgAioqiLO209JuV7//251UmCEBRPc++6K+i24bQqz8JFWVoTWNIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIJTsZ+PH4+/K79cVWmMh/bbx/i2r6lj7q+VjOe6t/9+GZHj6BH4fju/7q6kB0428lHMFmN58v6c/gZ3m2Y09f7D+BXh7TethqZ6MMKkjve37m/k6rKtxtoAfNMZ33CEMesWborLoZReq5fXO92VD11giehm+ouUt2RwAllkfm1/h0qsU8lyAXz/5K/wLcHGSv3rAOdd9xZM/iYVgKmGA3z3Fu8/kyuEiSp+X8paFD4Br9ibXA7g7+fsLfHgmPpr4cZDU+/yDf7LdONeLl3hJx08rd3mra0U9fd7PBsWXv7nDtdQdlrDdrvIXPP7YMWnLb8AYzDUl6wv/AYwXUhZxDX53lrdrtrDAgvu4WnY8gu+iwvsjnHPuZmDyyqLOMLQZM/KNWd8OvC0wSfuKbjE2wm/xNXfZ36tbUc8KDKi+hgOwfI39I5j38lc8IIBH9NHhIpkL9ZdMsb+0ENIpXvNOYNvwp/TF3hm2h8qwH4CZvcmSkFbJpa93wALYxXWkQs69qe51dbhTsAv9IOEKRmb/xgqCezW+6MDgGn28c3NB6SXDO/58XUjeNmazYFRQcm+a1k5SwQCycg1CatqNG2Md42YkQmo357Yql2wJfzWS/ogcjXvy1n2wGci6vLtlVuQa9S037KT6Fl14oC5CanveyuBP7sIG7OBLWsMks7hRSKHkaBBZlwqp9btmIwtgxlR+aw1G/N7nqGO1ichXwCzRJ0Nulx2owuxQ3OgkpDbmrwiyftI3bDaSd30vtbiFkNoVi4jekROyK3xs2kzV+pMVjfnwHjDzKi+z5uJEfhJ12CqscaJ31U1IfCyYpH9dArbVFVUsrcRLtRDSx8EtTH9fyD0UXnYJD6bi+xdGjfsTzUcn38cuOZQXOkYOvKOQV54R/CRv2x3xV6+qIowtbiVkyK8HT/z0vpB8YKqt4kqKn/jmzIGqDA7pQDhtMVSkDmBziH53FPKEN2Il5qDu96nFWishtYvNbOF83xbSSTt3HceAySNNxAJNxnC1QUmlUeAQp3wdhXzkhHyiMbUTnoi2Qooh9LaQIotuSpv8tMs13Z9gdZKJSP8Sf+gopBAlUgI7pClLfaTPNAjJM7boxb8r5KbGq2XsuEnGsqbAiMX6iaRcEpTcRJ2OQtq858TvYooRrc0kroWQGCCijOVdIdFyU5H7pITA5P0sRSjt4qdvaVIe/iSfugk5g6R+oWnzGEJaCDlNp6TvCsl9BNs2JfLYDLat80r6KOnYmPFVs1I9TVY6CRkOM/FwDDGrwWJBs5DCpUcd/U0hPdGumoUGAYbM4LeuhC/qwY4YmkwSCkbphS5Chl8oSdxKbHEupayhUch5wB1GHEPfFLKXClAHhsl6974W9Yj1NdRiVPKnTtZFOwjZG5osgKRPozzqTCxPk5A6n6wZicd6U8jVVtZ/yqBXSjyUAjH4hR0iKbeLd7/7hYKvCBk6X2AaMElHDc97m4yJKS+jFYRc63cILBgkF98U8mHVtitGeKW6oK1pPyxNR3dJUpmSJONJXTCTIO6ikMapN4tWsm/LwTeut17yC/FCk0riO0/rwQejXlYS0nRmcb2rx84SK8bjTNs3hUTDG4UMWwoZ95N55sFjDrmAD6KghNSe4Oq6Z7E0fnks9dVsXxww+E3VFjtJNWJZPMq/SkIGU9e9i3qvj7/6rbTJ8x8UMkrKc9sU/byqLVfIMbwwSxYFRd9XrVhEmWG8uixZIV8b/IN9kfiy/9TQjotgthQcsnvTvNNr6SO9AFtsSMKgfGinzJVCimAjoqsp2Vn6V4INrnyrVixjRLBJ8lGR9aUz83BYLtgm2KAgLPiuFpnUB5sGIbWxsLQa9T+S/jRNE15Kf7QoKc8yFL0wDltHbUd400OliEh/1DtDTUJqA9F3Kr7hTSH7BQFUYEJu16xZJAl5EgPDQnZ6L3T49unPQxSt9D1scY0xjUJqEzFlKG9RfWKKWOO6I6J+WztFxNZlmyqofLI25xR9wgt55FVEwvL8dVNfQ7OQIQskw/ATixaBYgshJWzst9mihQBnnna8oH0sWvxKQn4JZN+LYUg9q20WUgT2yt7Su0IKn240lRI61a3+lqfsYqVX9KV8Mp6WVNZTFLJvykI3rthYf1U1tBAyWoQxi/P1txd2v0pJnxR0gfZFfR/HfmFVA196NNSvpdW3l6aIYhgHpbRvX2tMGyG1ZTV0vy3kTLESW+Sr/jTKrrJVcw4ih94vt/i1ufZKFrqzPVQJrYTUFlY5dL+/+XWu32twxMDya5f3+1BZ2ZrFl6blpZwXFy1cSeje1+3EtRNS+y2H7veFXNee2Anjkz0Do0ZuYXGpv16ikGCXy766+vOUhG53qzampZAermjZuWMwHzgggMNHGZJPIyM6RDEMWKA4s4e2Q9n7r0SDVpXM6uVltD+S0M3DuXlQG9NCyHjmNEzd7weE1KbA7KE8S9yDHafZe8tWnSPAcw+VYR9ilmLeK9W+vLC7HmHf2RZCd19tTFshxbmf3Kz7E0JqV2DmU3Yj/A5SPyIOUcnizcBiW8nTJ0s6J359hVxMBwpHqMQLVuzGYWmIDnI1rJCfCqH7I0KiS7cOkusTA7K654ZpS4IlfxZkYQgjkGQTo8NWw1gSutc/3BjJa/Xudror0bTVcBDuN/ZJnxFSc0amNSkPw/AIhUZ5EwissjMdQFBdAYjumLI432Xza7qthu7wAMG2kv/ObTM7Qdy4+RXNnKIh9yEhNW8HW6PYgpkJk1JoHBtbKExw9r8AZ0VKNwdZl+m0HXs2JbPumw3gFl5+6ALcs1KNQoqZU/5YX9cDpgXmC4AvJzEsnE3gWG2R92Dc1KTQfsBllJ30jTjLDgGJtf6JjHMYH8avnqIIGWQH67Or+hAMPZVnz2U8503eZc+ILZrqvrYvqhUOSBzGv5dM+m1azpHjra4WPB+r1er0hG9XPpEJZwsbzrzQeDCEr2XdqXVHdvakrwZNwN+SBCJMSxTxp0P4dbnFy6sBz3FxAOUqkz8dFxEndD2pSd3/k6jfu3GznPr/RfJ8LDSbtzgR9s/j+Q5a3JPpTxAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQbzO/wAEQ5eMLfksuwAAAABJRU5ErkJggg==" />
            <img src= {Pic} className= "pics"/>
<div className = "list">
            {items.map(item => (
              <div className= "group" key= {item.id}>
                    <p className= "bold">{item.name}</p>
                    <p><img src={item.image_link}/></p>  
                    <p className= "price">Price: ${item.price}</p>
                    <button onClick= {() => alert("Your item has been added to the cart")}> Add</button>

                    <p>{item.description}</p>
              </div>
            
            )
    )}
          </div>
          <footer className="name">Shanica Denis ©2021</footer>

        </div>
        
      );
    }

  }
}

export default App;
