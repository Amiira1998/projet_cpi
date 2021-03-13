import React,{useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../components/login';
import Signup from '../components/signup';
import {Grid} from '@material-ui/core';
import img from "./educ.svg"

const SignInOutContainer=()=>{
    const [value, setValue]=useState(0)
    const handleChange= ( event , newValue) =>{
        setValue(newValue);
    };
    
    const paperStyle={width:460, marginLeft:30};

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
     
      
return (
  <Grid container xs={12}>

     <Grid item xs={6}  >
      <Typography><h1>Uniswap</h1></Typography>

      <img src={img} alt='uniswap' style={{width:"74vh", marginLeft:'100px', marginTop:'60px'}} align="center"  ></img>

      </Grid>


    <Grid item xs={6}  >
    <Paper elevation={20} style={paperStyle} >
  <Tabs
    value={value}
    indicatorColor="primary"
    textColor="primary"
    onChange={handleChange}
    aria-label="disabled tabs example">
    <Tab label="S'inscrire" />
    <Tab label="Se connecter" />
  </Tabs>

      <TabPanel value={value} index={0}>
        <Signup/>      
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Login handleChange={handleChange}/>
      </TabPanel>
    </Paper>
    </Grid>


 

</Grid>

)
}
export default SignInOutContainer;