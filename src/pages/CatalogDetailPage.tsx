import { useParams } from "react-router-dom";
import CatalogDetail from "../components/catalog-detail/CatalogDetail";

const CatalogDetailPage = () => {
    const urlParams = useParams();

    return (
        <CatalogDetail catalogId={urlParams.catalogId || ""} />
    )
}

export default CatalogDetailPage