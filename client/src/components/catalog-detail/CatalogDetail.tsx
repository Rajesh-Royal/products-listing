import { useEffect, useState } from 'react';
import { Catalog } from '../../api/models/Catalog.model';
import { getCatalogDetail } from '../../api/services/GetCatalogDetail';
import AddPageTitle from '../Shared/AddPageTitle';
import "./CatalogDetail.scss";

const CatalogDetail = ({ catalogId }: { catalogId: string }) => {
    const [catalogData, setCatalogData] = useState<Catalog>()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (catalogId) {
            setLoading(true);
            getCatalogDetail(catalogId).then((response) => {
                setLoading(false);
                setCatalogData(response.data);
            }).catch((error) => {
                setLoading(false);
            })
        }
    }, [catalogId])

    return (
        loading ?
            <p>Loading............</p> :
            <div className="catalog-details">
                <AddPageTitle title={catalogData?.Title || ""} />
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