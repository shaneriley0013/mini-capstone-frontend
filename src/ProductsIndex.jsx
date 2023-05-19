export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All Products</h1>
      <div className="row">
        {props.products.map(product => (
          <div key={product.id} className="col-sm-6 mb-3 mb-sm-3">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-text">{product.description}</p>
                <img src={product.images[0] && product.images[0].url} />

                <p><button className="btn btn-warning mt-3 text-center" onClick={() => {props.onShowProduct(product)}}>More info</button></p>
              </div>
            </div>
          </div>
      ))}
      </div>
    </div>
  );
}