import {
    BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import CatalogDetailPage from "../pages/CatalogDetailPage";
import CatalogListingPage from "../pages/CatalogListingPage";

const AppRoutes = () => {
    const NavigateToHome = <Navigate to={"/"} />
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<CatalogListingPage />} />
                    <Route path="product">
                        <Route path=":productId" element={<CatalogDetailPage />} />
                        <Route index element={NavigateToHome} />
                    </Route>
                    <Route path="*" element={<h2>page not found</h2>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
