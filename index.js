import Application from "./router/Application.js";
import dotenv from "dotenv";
import {userRouter} from "./src/user-router.js";
import parseJson from "./router/parseJson.js";
import parseUrl from "./router/parseUrl.js";

dotenv.config()
const PORT = process.env.PORT
const app = new Application();

app.use(parseJson)
app.use(parseUrl(`http://localhost:${PORT}`))
app.addRouter(userRouter)
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))


