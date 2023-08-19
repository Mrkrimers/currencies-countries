import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import Header from "./Header";

function Input({ prop }) {
    // const arr = [10, 20, 30]
    // prop.then((res) => {
    //     setBD(res)
    //     console.log(res);
    // })

    // const [lable, setLable] = useState('')

    const [age, setAge] = useState('')

    const handleChange = (event) => {
        setAge(event.target.value)
    }

    const newArr = prop.filter((el) => el.Cur_Name === age)


    return (
        <div style={{ textAlign: "center" }}>
            <Header age={age} lable={newArr} />

            <FormControl style={{ width: "30%" }}>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >

                    {prop.map((el, index) => <MenuItem key={index} value={el.Cur_Name}>{el.Cur_Abbreviation}</MenuItem>)}

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