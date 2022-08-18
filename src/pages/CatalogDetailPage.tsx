import { useParams } from "react-router-dom";

const CatalogDetailPage = () => {
    const urlParams = useParams();
    console.log('urlParams', urlParams)
    return (
        <div>Product details</div>
    )
}

export default CatalogDetailPage