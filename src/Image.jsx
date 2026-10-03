import Product from "./product";

const Image = () => {
  return (
    <div>
      <img src={Product.image} alt={Product.name} width="150" />
    </div>
  );
};

export default Image;
