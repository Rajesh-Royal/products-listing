import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCatalogDetail } from "../api/services/GetCatalogDetail";
import { ICatalog } from "../api/services/GetCatalogLists";
import CatalogDetail from "../components/catalog-detail/CatalogDetail";

const CatalogDetailPage = () => {
    const urlParams = useParams();
    const [catalogData, setCatalogData] = useState<ICatalog>()
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (urlParams.productId) {
            getCatalogDetail(urlParams.productId).then((response) => {
                setLoading(false);
                setCatalogData(response.data);
            }).catch((error) => {
                setLoading(false);
            })
        }
    }, [urlParams.productId])
    return (
        loading ?
            <p>Loading............</p> :
            <CatalogDetail catalogData={catalogData} />
    )
}

export default CatalogDetailPage