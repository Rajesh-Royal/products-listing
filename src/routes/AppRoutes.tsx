import {
    BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import CatalogListing from "../components/catalog-listing/CatalogListing";

const AppRoutes = () => {
    const NavigateToHome = <Navigate to={"/"} />
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<CatalogListing />} />
                    <Route path="product">
                        <Route path=":productId" element={<h2 >product details</h2>} />
                        <Route index element={NavigateToHome} />
                    </Route>
                    <Route path="*" element={<h2>page not found</h2>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
