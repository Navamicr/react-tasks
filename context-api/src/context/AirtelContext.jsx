import { createContext } from "react";

export const AirtelContextApi = createContext("")
let { Provider } = AirtelContextApi

const AirtelProvider = ({ children }) => {
    return <Provider value={{
        network_name: "Airtel",
        sim_type: 'micro',
        price: 500,
        duration: 1,
        nearest_tower: 'bangalore'
    }}>
        {children}
    </Provider>
}
export default AirtelProvider