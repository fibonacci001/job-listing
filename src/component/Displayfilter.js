import { useState } from "react";
import { Paper, Typography, Stack, Box } from "@mui/material";
import { useCallback } from "react";
import Divider from '@mui/material/Divider';
import '../App.css';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';







const FiltersDisplay = ({ filters, setFilters }) => {



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

    const handleRemoveFilter = useCallback(
        (type, value) => {
          setFilters(prevFilters => {
            return {
              ...prevFilters,
              [type]: prevFilters[type].filter(v => v !== value)
            }
          })
        }, 
        [setFilters]
      )

      const handleClearFilters = useCallback(() => {
        setFilters({
          role: [],
          level: [],
          lang: [],
          tool: []
        })
      }, [setFilters])









    return ( <>
    
    
    <Paper elevation={3}  className="filters-display"  sx={{
      width: {
        xs: 300,
        sm: 350,
        md: 400,
        lg: 800,
      },
      display: "flex",
      flexDirection: "row",
      // paddingY: "1px",
      alignItems: "center"
      
      
    }} >

      {Object.keys(filters).map(type => (
        filters[type].map(value => (
          <Box 
          key={value} 
          my={2}
          mx={2}
          gap={4}
          
          className="filter-tag"
          >
          
          <Chip label={value} sx={butsyl} onDelete={() => handleRemoveFilter(type, value)} />
      

            {/* <span>{value}</span>
            
            <button
              onClick={() => handleRemoveFilter(type, value)} 
            >
              
            </button> */}

          </Box>
        ))
      ))}

      {Object.values(filters).some(arr => arr.length > 0) && (

        <Chip
        label="clear"
        onClick={handleClearFilters}
        onDelete={handleClearFilters}
        deleteIcon={<DeleteIcon />}
        variant="text"

        sx={{
          backgroundColor: "transparent",
          "&:hover":{
            bgcolor: 'secondary.main',
            color: 'secondary.light',
            boxShadow: 1
          },
          bgcolor: 'secondary.light',
                      color: 'secondary.main',
                      boxShadow: 'none'
        }}
        />

        // <button onClick={handleClearFilters}>Clear</button>  
      )}

    </Paper>
  


    </> );
}
 
export default FiltersDisplay;