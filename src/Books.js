import "./App.css";

function Books(props) {
  return (
    <div className="books" >
      <div className="containerr" >
        <a href="">
          <img className="imagee" src={props.booksObj.photoName} alt={props.name} />
          <div className="overlay">
            <img className="addImage" src="./add.png" alt="Add" />
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <h5>{props.booksObj.name}</h5>
        </a>
        <span>{props.booksObj.price}</span>
      </div>
    </div>
  );
}

export default Books;
