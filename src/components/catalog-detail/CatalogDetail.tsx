import { ICatalog } from '../../api/services/GetCatalogLists'

const CatalogDetail = ({ catalogData }: { catalogData: ICatalog | undefined }) => {
    return (
        <div className="catalog-details">
            <p className="title">{catalogData?.Title}</p>
            <p className="maker">{catalogData?.Maker}</p>
            <p className="description">{catalogData?.Description}</p>
            {catalogData?.img ? <img src={catalogData.img} alt="catalog preview" className="preview-img" /> : null}
            <a href={catalogData?.Url} target="_blank" rel="noreferrer" className="buy-btn">Buy</a>
        </div>
    )
}

export default CatalogDetail