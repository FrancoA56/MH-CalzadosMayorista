import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllShoes } from "./redux/actions";
import Home from "./components/home";
import Cart from "./components/cart";
import Buy from "./components/buy";
import Shop from "./components/shop";
import Detail from "./components/detail";

function App() {
  const dispatch = useDispatch();
  const shoes = useSelector((state) => state.shoes);

  useEffect(() => {
    if (shoes.length === 0) {
      dispatch(addAllShoes());
    }
  }, [shoes, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
