export function ProductsShow(props) {
  return (
    <div>
      <h1>Product Information</h1>
      <p>Image: {props.product.image}</p>
      <p>Name: {props.product.name}</p>
      <p>Description: {props.product.description}</p>
      <p>Price: {props.product.price}</p>
    </div>
  );
}