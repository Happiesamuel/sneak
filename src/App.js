// import Img__1 from "./images";
import Logo from "./images/icon-cart.svg";
import Logo2 from "./images/image-avatar.png";
import Logo3 from "./images/icon-delete.svg";
import Logo4 from "./images/icon-close.svg";
import Logo5 from "./images/icon-menu.svg";
import Img1 from "./images/image-product-1.jpg";
import Img2 from "./images/image-product-2.jpg";
import Img3 from "./images/image-product-3.jpg";
import Img4 from "./images/image-product-4.jpg";
import ImgT1 from "./images/image-product-1-thumbnail.jpg";
import ImgT2 from "./images/image-product-2-thumbnail.jpg";
import ImgT3 from "./images/image-product-3-thumbnail.jpg";
import ImgT4 from "./images/image-product-4-thumbnail.jpg";
import { useEffect, useState } from "react";
// import Img1 from "./image-product-1-thumbnail.jpg";
const shoes = [
  {
    title: "Fall Limited Edition Sneakers",
    price: "$125.00",
    percent: "50%",
    cutoff: "$250.00",
    img: ImgT1,
    id: 1,
  },
  {
    title: "Men Causal Wear",
    price: "$225.00",
    percent: "70%",
    cutoff: "$300.00",
    img: ImgT2,
    id: 2,
  },
  {
    title: "Monospec Sneakers White",
    price: "$22.50",
    percent: "15%",
    cutoff: "$150.00",
    img: ImgT3,
    id: 3,
  },
  {
    title: "Mens Canvas Breathable Sports",
    price: "$100.00",
    percent: "50%",
    cutoff: "$200.00",
    img: ImgT4,
    id: 4,
  },
];
function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Header() {
  const [setId, setGetId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [close, setClose] = useState(true);
  const [book, setBook] = useState([]);
  function getBook(o) {
    setBook((i) => [...i, o]);
  }
  function sett() {
    setIsOpen((i) => !i);
  }
  function bookId(id) {
    const item = book.filter((x) => x.id !== id);
    setBook(item);
  }
  // useEffect(
  //   function () {
  //     document.body.addEventListener("click", function () {
  //       isOpen && setIsOpen(false);
  //     });
  //   },
  //   [isOpen]
  // );
  return (
    <header className="">
      <div
        onClick={() => setClose(true)}
        className={close ? "hidden" : "overlays hidden sm:block"}
      ></div>
      <nav className="flex justify-between py-5 px-44 items-center sm:px-8 sm:py-6">
        <div className="flex justify-between flex-row sneak sm:flex-col">
          <div className="flex items-center justify-center gap-x-3 head">
            <img
              src={Logo5}
              alt="a"
              className=" hidden sm:block cancel pb-8 menu"
              onClick={() => setClose(false)}
            />
            <h1 className="font-bold text-4xl sm:text-xl ">sneakers</h1>
          </div>
          <ul
            className={
              close
                ? "show flex gap-x-9 sm:flex-col sm:pl-5 sm:pt-5"
                : '"flex gap-x-9 sm:flex-col sm:pl-5 sm:pt-5 "'
            }
          >
            <img
              src={Logo4}
              alt="a"
              className=" hidden sm:block cancel pb-8 close"
              onClick={() => setClose(true)}
            />
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-x-9 sm:gap-x-4">
          <div>
            <img onClick={sett} className="la" src={Logo} alt="a" />
            {book.length > 0 && <span className="booked">{book.length}</span>}
          </div>
          <img src={Logo2} className="la las" alt="a" />
        </div>
      </nav>
      <div className="line mx-44 sm:mx-8"></div>
      <Body
        setGetId={setGetId}
        setId={setId}
        setIsOpen={setIsOpen}
        getBook={getBook}
      >
        {" "}
        <Content
          setId={setId}
          getBook={getBook}
          book={book}
          setIsOpen={setIsOpen}
        />
      </Body>
      {isOpen && (
        <>
          <Bookmark book={book} bookId={bookId} />
          <div onClick={() => setIsOpen(false)} className="overlay"></div>
        </>
      )}
    </header>
  );
}
function Body({ setId, setGetId, getBook, children, setIsOpen }) {
  return (
    <div className="flex body-gap items-center justify-center pt-10 pb-5 sm:flex-col sm:pt-10 s">
      <Images setId={setId} setGetId={setGetId} setIsOpen={setIsOpen} />
      {children}
    </div>
  );
}
function Images({ setId, setGetId, setIsOpen }) {
  const ImgObj = [ImgT1, ImgT2, ImgT3, ImgT4];
  const idImg = [Img1, Img2, Img3, Img4];
  function getId(e) {
    setGetId((i) => e);
    setIsOpen(false);
  }
  return (
    <div className="flex flex-col  pl-32 img-div gap-7 sm:pl-1">
      <img src={idImg[setId]} className="img-show" alt="a" />
      <div className="flex justify-between ">
        {ImgObj.map((x, i) => (
          <Image
            x={x}
            setId={setId}
            setGetId={setGetId}
            id={i}
            key={i}
            name={i === setId ? "border img-shows" : "img-shows"}
            getId={getId}
          />
        ))}
      </div>
    </div>
  );
}
function Content({ setId, getBook, book, setIsOpen }) {
  const [count, setCount] = useState(0);
  function increase() {
    setCount((i) => i + 1);
  }
  function decrease() {
    if (count > 0) setCount((i) => i - 1);
  }
  function settObj() {
    const shoe = {
      title: shoes.at(setId).title,
      img: shoes.at(setId).img,
      price: shoes.at(setId).price,
      value: count,
      total:
        "$" + (count * +shoes.at(setId).price.slice(1)).toFixed(2).toString(),
      id: shoes.at(setId).id,
    };
    getBook(shoe);
    setCount(0);
    setIsOpen(false);
  }
  return (
    <div className="write pr-32 sm:pr-10">
      <h6>SNEAKER COMPANY</h6>
      <h1 className="pb-6 pt-3 text-2xl sm:pb-4">{shoes.at(setId).title}</h1>
      <p className="pb-6 text-xm">
        These low profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sake. they'll withstand everthing the
        weather can offer
      </p>
      <h2 className="text-xl">
        {shoes.at(setId).price}{" "}
        <span className="color text-xm">{shoes.at(setId).percent}</span>
      </h2>
      <p className="pb-5">
        <del>{shoes.at(setId).cutoff}</del>
      </p>
      {book.some((x) => x.id === shoes.at(setId).id) ? (
        <div className="added sm:mb-5">Added to cart</div>
      ) : (
        <div className="flex gap-3 but-cart sm:pb-5 sm:flex-col">
          <div className="flex  gap-8 but-bg sm:justify-between sm:px-10">
            <Button click={decrease}>-</Button>
            <p className="num">{count}</p>
            <Button click={increase}>+</Button>
          </div>
          {count > 0 && (
            <div onClick={settObj} className="flex text-center gap-3 add-cart">
              <img alt="a" src={Logo} />
              <div> Add to cart </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
function Image({ x, id, name, getId, setId }) {
  return <img src={x} alt="a" className={name} onClick={() => getId(id)} />;
}
function Button({ children, click }) {
  return <button onClick={click}>{children}</button>;
}
function Bookmark({ book, bookId }) {
  return (
    <div className="bookmark px-5">
      <div className="font-bold text-xl px-5 py-6 cart sm:py:-4 sm:px-3">
        Cart
      </div>
      {book.length > 0 ? (
        <div className="pb-5 flex flex-col ">
          {" "}
          {book.map((x, i) => (
            <Books key={i} x={x} bookId={bookId} />
          ))}
          <div className="added mt-5">Checkout</div>
        </div>
      ) : (
        <p className="px-24 py-24 sm:px-12 sm:py-12 text-center">
          Your cart is empty
        </p>
      )}
    </div>
  );
}
function Books({ x, bookId }) {
  return (
    <li className="px-5 flex justify-between items-center pt-3">
      <img src={x.img} className="img-shows" alt="a" />
      <div className="flex flex-col items-start text-center">
        <p className="text-left sm:text-xs">{x.title}</p>
        <p className="sm:text-xs">
          {x.price} * {x.value}{" "}
          <span className="font-bold black">{x.total}</span>
        </p>
      </div>
      <img src={Logo3} onClick={() => bookId(x.id)} alt="a" />
    </li>
  );
}
export default App;
