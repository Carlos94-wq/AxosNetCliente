import { 
    applyMiddleware,
    combineReducers, 
    compose, 
    createStore 
} from "redux";
import thunk from "redux-thunk";
//Reducers
import { authReducer } from "./Reducers/authReducer";
import { supplier, product, status } from "./Reducers/catalogueReducer";
import { GetInvoice, invoiceReducer, InvoiceOpions } from "./Reducers/invoiceReducer";
import { productReducer, total } from "./Reducers/productCart";
import { authLoader, recoverLoader, registerLoader, invoiceLoader ,SideBarTogle } from "./Reducers/uiReducer";
//combinacion de todos losreducers
const allRducers = combineReducers({
    Auth: authReducer,
    AuthLoader: authLoader,
    Invoice: invoiceReducer,
    InvoiceOptions: InvoiceOpions,
    InvoiceId: GetInvoice,
    RegisterLoader: registerLoader,
    RecoverLoader: recoverLoader,
    InvoiceCreated: invoiceLoader,
    Toggle: SideBarTogle,
    supplier,
    Products: product,
    ProductCart: productReducer,
    TotalCart: total,
    status
});
//middlewares
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    allRducers,
    composeEnhancers(applyMiddleware(thunk))
)