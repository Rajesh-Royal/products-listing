import CatalogDB from "../../db/products.json";
import "./CatalogListing.scss";

const CatalogListing = () => {
    return (
        <div className="catalog-listing">
            <ul className="catalog">
                {
                    CatalogDB.map((product) => {
                        return <li className="catalog-item" key={product.Id}>
                            <div className="product">
                                <img src={product.img} alt="product-thumbnail" className="thumbnail" />
                                <div className="details">
                                    <p className='title'>{product.Title}</p>
                                    <p className='maker'>{product.Maker}</p>
                                </div>
                                <button>View</button>
                            </div>
                        </li>
                    })
                }

            </ul>
        </div>
    )
}

export default CatalogListing