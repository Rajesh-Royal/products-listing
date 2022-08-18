import { useNavigate } from "react-router-dom";
import CatalogDB from "../../db/products.json";
import "./CatalogListing.scss";

const CatalogListing = () => {
    const navigate = useNavigate();
    return (
        <div className="catalog-listing">
            <ul className="catalog">
                {
                    CatalogDB.map((product) => {
                        return <li className="catalog-item" key={product.Id}>
                            <div className="product">
                                <img src={product.img} alt="product-thumbnail" className="thumbnail" />
                                <div className="details">
                                    <h3 className='title'>{product.Title}</h3>
                                    <p className='maker'>{product.Maker}</p>
                                </div>
                                <button onClick={() => navigate(`product/${product.Id}`)}>View</button>
                            </div>
                        </li>
                    })
                }

            </ul>
        </div>
    )
}

export default CatalogListing