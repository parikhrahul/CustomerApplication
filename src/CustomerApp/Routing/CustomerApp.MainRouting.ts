import { HomeComponent } from "../Home/home.component";

export const MainRoutes = [
    { path: 'Home',
        loadChildren: () => import('../Home/home.module').then(x => x.HomeModule)
    },
    { path: 'Customer', 
        loadChildren: () => import('../Customer/CustomerApp.CustomerModule').then(x => x.CustomerModule)
    },
    { path: 'Supplier', 
        loadChildren: () => import('../Supplier/supplier.module').then(x => x.SupplierModule)
    }   
];