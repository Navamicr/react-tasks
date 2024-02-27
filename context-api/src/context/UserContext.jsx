import { createContext } from "react";

const UserContext = createContext("")
let { Provider } = UserContext;

//provider
const UserProvider = (props) => {

    return <Provider value={{ name: "tobby", company: "google", salary: 300000, gender: "male" }}>
        {props.children}
    </Provider>
}
export default UserProvider