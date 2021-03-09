import React from 'react';
import { Grid,Paper , Avatar, TextField,Button, Typography  } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { FormLabel } from '@material-ui/core';
//import Checkbox from '@material-ui/core/Checkbox';



const Signup=()=>{
    const paperStyle={padding :20, height:"75vh" ,width:324  , margin:"0 Auto"  }
    const avatarStyle={backgroundColor:"#50aebb" }
    const btStyle={margin:'15px 0'}
    const margStyle ={marginTop:15}
    return(
       <Grid  >
            <Paper   style={paperStyle}   >
              <Grid  align="center">
                 <Avatar style= {avatarStyle}> < AccountCircleIcon/> </Avatar>
                 <h3> Bienvenue! créez votre compte Uniswap</h3>
             </Grid>

             <form >
                 <TextField label='Nom' placeholder= 'votre nom'   fullWidth  required />
                 <TextField label='Prénom' placeholder= 'votre Prénom'   fullWidth  required />
                      
                 <TextField label='Email' placeholder= 'votre email' type='Email' fullWidth  required />
                 <TextField label='Mot de passe' placeholder= 'mot de passe' fullWidth type='password' required />
                 <TextField label='confirmer le Mot de passe'  placeholder= 'mot de passe' fullWidth type='password' required />

                 <FormControl component="fieldset" style={margStyle} required>
                     <FormLabel component='legend' >Vous êtes</FormLabel>

                     <RadioGroup aria-label="gender" name="gender1" style= {{display:'initial'}} >
                     <FormControlLabel value="female" control={<Radio />} label="Etudiant" />
                     <FormControlLabel value="male" control={<Radio />} label="Enseignant" />
                   </RadioGroup>

                 </FormControl>
                 
                  <Button type='submit' color='primary' variant="contained" style={btStyle} fullWidth>S'inscrire</Button>
           

             </form>
             </Paper>


        </Grid>


        )
}
export default Signup;