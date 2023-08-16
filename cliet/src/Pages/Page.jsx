import { useEffect, useState } from "react";
import Input from "../Components/Input";
import axios from "axios"

function Page() {
    const [data, setData] = useState([])

    async function request() {
        const res = await axios.get("https://www.nbrb.by/API/ExRates/Currencies")
        setData(res.data)
    }

    useEffect(() => {
        request()
    });

    // const test = request() // это массив

    return (
        <>
            <Input prop={data} />
        </>
    )

}

export default Page;