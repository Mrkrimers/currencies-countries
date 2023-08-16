import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import Header from "./Header";

function Input({ prop }) {
    // const arr = [10, 20, 30]
    // prop.then((res) => {
    //     setBD(res)
    //     console.log(res);
    // })

    console.log(prop);

    const [age, setAge] = useState('')

    const handleChange = (event) => {
        setAge(event.target.value)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Header prop={age} />

            <FormControl style={{ width: "30%" }}>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >

                    {prop.map((el, index) => <MenuItem key={index} value={el.Cur_Name}>{el.Cur_Name}</MenuItem>)}

                </Select>
            </FormControl>

        </div>

        // <div >

        //     <h1>{age}</h1>

        //     <select value={age}>

        //         {bd.map((el, index) => <option key={index} value={el.Cur_Name}>{el.Cur_Name}</option>)}

        //     </select>
        // </div>
    )
}

export default Input;