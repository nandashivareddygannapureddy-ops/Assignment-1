import exp from "express";
import { userApp } from "./APIs/userapi.js";
import { productApp} from "./APIs/productapi.js";
const app = exp()
const port=4000;


// Start server
app.listen(port, () => console.log('HTTP server listening on port 4000'));
app.use(exp.json());


//mount userApp with path /userapi
app.use('/user-api',userApp);
//mount productApp with path /productapi
app.use('/product-api',productApp);
