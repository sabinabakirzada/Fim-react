import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Stack, Button } from "@mui/material";

export default function Form() {




  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
       style={{display:"flex", flexDirection:"column" ,alignItems:"center",justifyContent:"center" , margin:"20px"}}
    >
      <FormControl>
        <InputLabel htmlFor="component-outlined">Id</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Id"
         
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Image</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Image"
         
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Name"
         
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="component-outlined">Imdb</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Imdb"
         
        />
      </FormControl>


      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="info" >
          Success
        </Button>
      </Stack>
    </Box>
  );
}
