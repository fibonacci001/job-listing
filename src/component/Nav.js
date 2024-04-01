import { Link } from "react-router-dom";
import { Paper, Stack } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PostAddIcon from '@mui/icons-material/PostAdd';

const Nav = () => {
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
    return ( <>
     <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Stack direction="row" gap={2} sx={{
            alignContent: 'center',
            justifyContent: 'center',
            padding: '10px'
        }}>
        {/* <Link to="/"><Button variant="outlined" color="secondary" startIcon={<WorkHistoryIcon />}>
        jobs
      </Button></Link> */}
        <Link to="/postjobs"> <Button variant="outlined" color="secondary" startIcon={<PostAddIcon />}>
        New jobs
      </Button></Link>
   </Stack>
     </Paper>
    
    </> );
}
 
export default Nav;