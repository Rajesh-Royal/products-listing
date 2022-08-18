import { ICatalog } from '../../api/services/GetCatalogLists';
import "./CatalogDetail.scss";

const CatalogDetail = ({ catalogData }: { catalogData: ICatalog | undefined }) => {
    return (
        <div className="catalog-details">
            {catalogData ?
                <>
                    <h2 className="title">{catalogData?.Title}</h2>
                    <p className="maker">{catalogData?.Maker}</p>
                    <p className="description">{catalogData?.Description}</p>
                    {catalogData?.img ? <img src={catalogData.img} alt="catalog preview" className="preview-img" /> : null}
                    <a href={catalogData?.Url} target="_blank" rel="noreferrer" className="buy-btn">Buy</a></>
                : <p>Catalog Not Found.</p>}
        </div>
    )
}

export default CatalogDetail