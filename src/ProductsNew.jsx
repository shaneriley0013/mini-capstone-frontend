


export function ProductsNew(props) {
  const handleSubmit = (event) => {
      event.preventDefault();
      const params = new FormData(event.target);
      props.onCreateProduct(params);
      window.location.href = "/";
    };


  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <br />
        <div>
          Price: <input name="price" type="number" />
        </div>
        <br />
        <div>
          Description: <input name="description" type="text" />
        </div>
        <br />
        <div>
          Image: <input name="image" type="text" />
        </div>
        <br />
        <div>
          Supplier: <input name="supplier" type="text" />
        </div>
        <br />
        
        <button type="submit">Create Product</button>
      </form>
      <br />
      <br />
      <br />
    </div>
  );
}