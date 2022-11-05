import React from 'react'
import FormControl from '@mui/material/FormControl';
const FormPage = () => {
  return (
    <div>
       <FormControl
                sx={{ width: "100%", marginTop: "3%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="Profession">Profession</InputLabel>
                <OutlinedInput
                  id="profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  inputProps={{ "aria-label": "profession" }}
                  label="profession"
                  name="profession"
              />
              </FormControl>
    </div>
  )
}

export default FormPage;
