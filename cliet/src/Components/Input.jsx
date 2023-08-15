import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'


function Input() {

    const [age, setAge] = useState('')

    const handleChange = (event) => {
        setAge(event.target.value)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <FormControl style={{ width: "30%" }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

        </div>
    )
}

export default Input;