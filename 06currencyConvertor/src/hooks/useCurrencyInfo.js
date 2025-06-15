import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
     useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
             )
             .then((res) => res.json())
             .then((res) => setData(res [currency] ) )
             console.log(data)
     } , [currency])//[] ke andar dependency array hota hai, jab bhi currency change hoga tab ye chalega
     console.log(data)
     return data
    }

    export default useCurrencyInfo  // this file how to make custon hook



