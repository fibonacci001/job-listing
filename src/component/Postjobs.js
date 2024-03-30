import { useAddnewjob } from "./Postdata";
import { Input,Box,Paper,Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import {Button} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';





const Postjobs = () => {


const { mutate } = useAddnewjob()

const [position, setposition] = useState("");
const [company, setcompany] = useState("");
const [languages, setlanguages] = useState([ ])
const [role, setrole] = useState("")
const [level, setlevel] = useState("")
const [contract, setcontract] = useState("")
const [location, setlocation] = useState("")
const [tools, settools] = useState([]);
const [authtext, setauthtext] = useState("")
const [checkpass, setcheckpass] = useState(true)
const [errortext, seterrortext] = useState("")

const logo = "./images/New-job.svg";



const Handlepostjob = () => {
  console.log({position, languages, role, level, contract, location, tools})
  const newjob = {
company,
logo,
new:true,
featured: false,
position,
role,
level,
contract,
location,
languages,
tools

  }
  setcompany("");
  setposition("");
  setrole("");
  setlanguages([ ])
  settools([ ]);
  setcontract("");
  setlocation("");
  
  mutate(newjob);

}
// console.log(position)
// console.log(languages)
// console.log(role)
// console.log(level)
// console.log(contract)
// console.log(location)
// console.log(tools)
console.log(authtext)

const verkey = "Fibonacci0112"

useEffect(() => {
    if (authtext) {
      if (verkey === authtext) {
        setcheckpass(false)
        seterrortext("")
      }
      else if (verkey !== authtext) {
        seterrortext("please enter correct code to post job")
        setcheckpass(true)
      }
    }
  }, [authtext])










const jobposition = [
    { label:"Senior Frontend Developer" },
    {label: "Fullstack Developer"},
    {label: "Junior Frontend Developer"},
    {label: "Software Engineer"},
    {label: "Junior Backend Developer"},
    {label: "Junior Developer"},
    {label: "Front-end Dev"},   
]
const companyname= [
  { label:"microsoft" },
  {label: "Apple"},
  {label: "Amazon"},
  {label: "IBM"},
  {label: "openAI"},
   
]

const jobrole = [
    { label:"Frontend" },
    {label: "Fullstack"},
    {label: "Junior Frontend Developer"},
    {label: "Software Engineer"},
    {label: "Junior Backend Developer"},
    {label: "Junior Developer"},
    {label: "Front-end Dev"}, 
    {label: "Backend"},   
]
const joblevel = [
    { label:"Senior"},
    {label: "Midweight"},
    {label: "Junior"},
   
      
]
const jobcontract = [
    { label:"Full Time" },
    {label: "Part Time"},
    
    
     
]
const joblocation = [
    { label:"USA Only" },
    {label: "Remote"},
    {label: "Worldwide"},
    {label: "UK Only"},
   
      
]

const joblanguages = [
    { label:"HTML" },
    { label:"HTML, CSS, Javascript" },
    {label: "CSS"},
    {label: "JavaScript"},
    {label: "Python"},
    {label: "Python, Ruby"},
    {label: "Ruby"},
      
]
const jobtools = [
    { label:"React" },
    { label:"React, Vue"},
    {label: "Sass"},
    {label: "RoR"},
    {label: "Vue"},
    {label: "Vue, SaaS"},
    {label: "Django"},
      
]








    return ( <Stack direction={"row"} sx={{
      display: "flex",
      justifyContent: "center",
      marginTop: "1rem"
    }}>
      <Stack sx={{
        width: {
          xs: 300,
          sm: 350,
          md: 400,
          lg: 800,
          
        },
      }}>
<Stack direction={"row"} gap={3} sx={{
  
  
  flexWrap: "wrap"
}}>
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={jobposition}
      value={position}
      onChange={(e, value) => {setposition(value ? value.label : "")}}

      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="position" />}
    />
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={jobrole}
      value={role}
      onChange={(e, value) => {setrole(value ? value.label : "")}}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="role" />}
    />

<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={joblevel}
      value={level}
      onChange={(e, value) => {setlevel(value ? value.label : "")}}
      sx={{ width: 300 }}

      renderInput={(params) => <TextField {...params} label="level" />}
    />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={jobcontract}
      value={contract}
      onChange={(e, value) => {setcontract(value ? value.label : "")}}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="contract" />}
    />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={joblocation}
      value={location}
      onChange={(e, value) => {setlocation(value ? value.label : "")}}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="location" />}
    />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={joblanguages}
      value={languages}
      onChange={(e, value) => {setlanguages(value ? value.label.split(", ") : [])}}

      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="languages" />}
    />

<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={jobtools}
      value={tools}
      onChange={(e, value) => {settools(value ? value.label.split(", ") : [])}}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="tools" />}
    />


<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={companyname}
      value={company}
      onChange={(e, value) => {setcompany(value ? value.label : "")}}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="company" />}
    />
</Stack>
<Stack sx={{
      marginTop: "0.5rem"
    }}>
    <TextField
    required
    error={errortext ? true : false}

    label="authorization pin" variant="standard"
    value={authtext}
    helperText={errortext}
    onChange={(e) => {setauthtext(e.target.value)}}
    sx={{ width: 300 }}

    />

    <Box >
        <Button variant="filled"
        disabled={checkpass ? true : false}
        onClick={Handlepostjob}
        >post job</Button>
    </Box>
   </Stack> 
    </Stack>
    </Stack> );
}
 
export default Postjobs;