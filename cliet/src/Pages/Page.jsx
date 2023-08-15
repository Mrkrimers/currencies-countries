import Header from "../Components/Header";
import Input from "../Components/Input";
import axios from "axios"


function Page() {

    const baseURL = "https://www.nbrb.by/API/ExRates/Currencies"

    async function response() {
        const res = await axios.get(baseURL)
        console.log(res.data);
    }

    return (
        <>
            <Header data={response()} />
            <Input data={response()} />
        </>
    )

}

export default Page;