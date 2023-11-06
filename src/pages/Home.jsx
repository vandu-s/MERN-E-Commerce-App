import Navbar from "../assets/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";

const Home = () => {
  return (
    <>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </>
  );
};

export default Home;
