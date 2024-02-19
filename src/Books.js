import "./App.css";

function Books(props) {
  return (
    <div className="books">
      <div className="containerr">
        {props.booksObj.soldOut === true ? (
          <img
            className="sold-out"
            src={props.booksObj.photoName}
            alt={props.name}
          />
        ) : (
          <a href="">
            <img
              className="imagee"
              src={props.booksObj.photoName}
              alt={props.name}
            />
          </a>
        )}

        {props.booksObj.soldOut === false ? (
          <div className="overlay">
            <img className="addImage" src="./add.png" alt="Add" />
          </div>
        ) : null}
      </div>

      <div>
        {props.booksObj.soldOut === false ? (
          <a href="">
            <h5>{props.booksObj.name}</h5>
          </a>
        ) : (
          <h5 className="sold-out">{props.booksObj.name}</h5>
        )}

        {props.booksObj.soldOut === false ? (
          <span>{props.booksObj.price}</span>
        ) : (
          <span className="sold-out">{props.booksObj.price} - Sold Out</span>
        )}
      </div>
    </div>
  );
}

export default Books;
