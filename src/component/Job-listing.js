import { useState, useEffect } from "react";
import { useFetchjobs } from "./Fetchdata";
import { Stack, Typography,Box, Button } from "@mui/material";
import FiltersDisplay from "./Displayfilter";
import { shadows } from '@mui/system';
import { hover } from "@testing-library/user-event/dist/hover";
import Chip from '@mui/material/Chip';




const Joblist = () => {

const {data: jobs, isLoading} = useFetchjobs()
const [filteredJobs, setFilteredJobs] = useState()
const [barcolor, setbacolor] = useState('#6b8e8e')
const [colorcheck, setcolorcheck] = useState([]) 

const butsyl = {
  "&:hover":{
    bgcolor: 'secondary.main',
    color: 'secondary.light',
    boxShadow: 1
  },
  bgcolor: 'secondary.light',
              color: 'secondary.main',
              boxShadow: 'none'

}
const [filters, setFilters] = useState({
    role: [],
    level: [],
    lang: [],
    tool: []
  })

  console.log(filters)


  useEffect(() => {

    if(jobs) {
        setFilteredJobs(jobs.data)
      // No filters applied - set to all jobs
      if(filters.role.length === 0 && 
         filters.level.length === 0 &&
         filters.lang.length === 0 && 
         filters.tool.length === 0) {
        
        return setFilteredJobs(jobs.data)
      }
  
      // Filter logic
      else if(filters.role.length > 0 || 
        filters.level.length > 0 ||
        filters.lang.length > 0 || 
        filters.tool.length > 0) {

            const filtered = jobs.data.filter(job => {
  
        const roleMatch = filters.role.includes(job.role)
        const levelMatch = filters.level.includes(job.level)  
        const langMatch = job.languages.some(lang => filters.lang.includes(lang))
        const toolMatch = job.tools.some(tool => filters.tool.includes(tool))
  
        return (roleMatch || levelMatch || langMatch || toolMatch) && (filters.role.length > 0 || filters.level.length > 0 || filters.lang.length > 0 || filters.tool.length > 0)

  
      })
      console.log(filtered)
      setFilteredJobs(filtered)
        }
      
  
    }
  
  }, [jobs, filters])

  useEffect(() => {
    if (jobs) {
      const jobdata = jobs.data;
      const colorchecks = [] // Create a new array to store the colorcheck values
      jobdata.forEach(e => {
        if (e.featured === true) {
          colorchecks.push(true) // Push true to the array if the job is featured
        } else {
          colorchecks.push(false) // Push false to the array if the job is not featured
        }
      });
      setcolorcheck(colorchecks) // Set the state with the array
    }
  },[jobs])

const handleFilterClick = (type, value) => {
    setFilters(prevFilters => {
      return {
        ...prevFilters,
        [type]: prevFilters[type].includes(value) 
          ? prevFilters[type].filter(v => v !== value)
          : [...prevFilters[type], value]  
      }
    })
  }









    return ( <>
    <Box sx={{

display: {
          sm: "block",
          xs: "block",
          md: "flex",
          xl: "flex",
          lg: "flex"

},
alignItems: "center",
justifyContent: "center",
flexDirection: "column",
gap: 8,
padding: {
          sm: 10,
          xs: 10,
          md: "none",
          xl: "none",
          lg: "none"
},

// bgcolor: barcolor



}}>
    <FiltersDisplay filters={filters} setFilters={setFilters} />


    {filteredJobs && filteredJobs?.sort((a, b) => {

      if (a.new && b.new) return 0;
      if (a.new && !b.new) return -1;
      if (!a.new && b.new) return 1;
      return 0;
    }).map((job, index) => {
        return <Stack sx={{
          width: {
            xs: 250,
            sm: 300,
            md: 400,
            lg: 800,
            
          },
          borderLeft: colorcheck[index] ? "4px solid hsl(180, 29%, 50%)" : "none",
          borderRadius: '12px',
          marginBottom: {
            xs: '1rem',
            sm: '1rem',
            md: 0,
            
          },
          marginLeft: {
            xs: '-70px',
            sm: '0px'
          },
          boxShadow: 3,
          padding: '1rem'
        }}  key={job.id}>

<Box sx={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: {
    xs: 'column',
    sm: 'column',
    md: 'row',

  },
  


}}>
            <Box sx={{
                paddingBottom: {
                  xs: '20px',
                  sm: '20px',
                  md: 0
                },
                borderBottom: {
                  xs: '2px solid gray',
                  sm: '2px solid gray',
                  md: 'none'
                },
                marginRight: {
                  
                  xs: "0px",
                  sm: '0px',
                  
                  md: '0.5ren',
                  lg: '0.5rem',
                  
                }
            }}>

           

<Box sx={{
      display: 'flex',
      gap: 2,
      justifyContent: 'center',
      alignItems: 'center'

    }}> 
<Box component="img" src={job.logo} alt={job.company} sx={{
  width: 50,
  height: 50,
  // Add other styles as needed: border-radius, object-fit, etc.
}} />
    
            <Box>
              <Box >
    
    <Stack direction="row" spacing={1} sx={{
      alignItems: 'center'
    }}>
      <Typography variant="body1" sx={{
        fontFamily: '"League Spartan", sans-serif',
        fontSize: '12px',
        fontWeight: 700
      }}>{job.company}</Typography>
        {job.new && <Chip label="New!" sx={{
          bgcolor: 'secondary.main',
          color: 'secondary.light',
          fontFamily: '"League Spartan", sans-serif',
        fontSize: '12px',
        
        }} />}
        {job.featured && <Chip label="Featured" sx={{
          bgcolor: 'hsl(180, 14%, 20%)',
          color: 'secondary.light',
          fontFamily: '"League Spartan", sans-serif',
        fontSize: '12px',
        fontWeight: 'bold'
        }} />}
      

    </Stack>

    
        </Box>
                <Box>
                      <Typography variant="h4" sx={{
                        fontFamily: '"League Spartan", sans-serif',
                        fontSize: '17px',
                        fontWeight: 700
                      }}>{job.position}</Typography>
                </Box>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                gap: 2
              }}>
                    <Typography variant="body2" sx={{
        fontFamily: '"League Spartan", sans-serif',
        fontSize: '12px',
        fontWeight: 300
      }}>{job.postedAt}</Typography>
                  <Typography variant="body2" sx={{
        fontFamily: '"League Spartan", sans-serif',
        fontSize: '12px',
        fontWeight: 300
      }}>{job.contract}</Typography>
                  <Typography variant="body2"sx={{
        fontFamily: '"League Spartan", sans-serif',
        fontSize: '12px',
        fontWeight: 300
      }} >{job.location}</Typography>
                  
              </Box>

            </Box>
    </Box>
</Box>

<Stack direction={"row"} gap={1} sx={{
  marginTop: {
    xs: '1.5rem',
    sm: '1.5rem',
    md: 0
  },
  flexWrap: 'wrap',
}}>
    {job.role && <Button variant="contained" size="small"
            onClick={() => handleFilterClick('role', job.role)}
            sx={butsyl}
          >
            {job.role}
          </Button>}

    {job.level && <Button variant="contained" size="small"
    onClick={() => handleFilterClick('level', job.level)}
    sx={butsyl}
    >
        {job.level}
        </Button>}


        {job.languages && job.languages.map((lan) => {
          return  <Button key={lan} variant="contained" size="small"
            onClick={() => handleFilterClick('lang', lan)}
            sx={butsyl}
          >
            {lan}
          </Button>
        })}

{job.tools && job.tools.map((tool) => {
          return  <Button key={tool} variant="contained" size="small"
            onClick={() => handleFilterClick('tool', tool)}
            sx={butsyl}
          >
            {tool}
          </Button>
        })}




</Stack>

</Box>

            
        </Stack>
    })}
    </Box>
    
    </> );
}
 
export default Joblist;