import { CustomerComponent } from "../Customer/CustomerApp.CustomerComponent";
import { HomeComponent } from "../Home/home.component";
import { SupplierComponent } from "../Supplier/supplier.component";

export const MainRoutes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Customer', component: CustomerComponent },
    { path: 'Supplier', component: SupplierComponent },
    { path: '', component: HomeComponent }
    
];