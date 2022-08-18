import { Catalog } from '../../api/models/Catalog.model';
import "./CatalogDetail.scss";

const CatalogDetail = ({ catalogData }: { catalogData: Catalog | undefined }) => {
    return (
        <div className="catalog-details">
            {catalogData ?
                <>
                    <h2 className="title">{catalogData?.Title}</h2>
                    <p className="maker">{catalogData?.Maker}</p>
                    <p className="description">{catalogData?.Description}</p>
                    {catalogData?.img ? <img src={catalogData.img} alt="catalog preview" className="preview-img" /> : null}
                    <a href={catalogData?.Url} target="_blank" rel="noreferrer" className="buy-btn">Buy</a></>
                : <p className='text-center'>Catalog Not Found.</p>}
        </div>
    )
}

export default CatalogDetail