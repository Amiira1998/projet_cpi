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
    const paperStyle={padding :20, height:"73vh" ,width:417  , margin:"0 Auto"  }
    const avatarStyle={backgroundColor:"#50aebb" }
    const btStyle={width:"25vh" }
    const margStyle ={marginTop:15}
    const prenomStyle={marginLeft:25}
    return(
       <Grid  >
            <Paper   style={paperStyle}   >
              <Grid  align="center">
                 <Avatar style= {avatarStyle}> < AccountCircleIcon/> </Avatar>
                 <h3> Bienvenue! créez votre compte Uniswap</h3>
             </Grid>

             <form >
                 <div className="row">
                   <TextField label='Nom' placeholder= 'votre nom' type="text" name='nom'   required   />
                   <TextField label='Prénom' placeholder= 'votre Prénom' type="text" name='prenom'    style={prenomStyle}    required   />
                 </div>
                 <div>
                 <TextField label='Email' placeholder= 'votre email' name='email' fullWidth  />
                 <TextField label='Mot de passe' placeholder= 'mot de passe' fullWidth type='password' required nom="password" />
                 <TextField label='Confirmer le Mot de passe'  placeholder= 'mot de passe' fullWidth type='password' required nom="confirmp"   />

                   <FormControl component="fieldset" style={margStyle} required>
                     <FormLabel component='legend' >Vous êtes</FormLabel>

                     <RadioGroup aria-label="gender" name="gender1" style= {{display:'initial'}} >
                     <FormControlLabel value="female" control={<Radio />} label="Etudiant" />
                     <FormControlLabel value="male" control={<Radio />} label="Enseignant" />
                     </RadioGroup>
                   </FormControl>
                 <div align="center">
                  <Button type='submit' color='primary' variant="contained" style={btStyle}   >S'inscrire</Button>
                  </div   >

                    <div>
                        S'inscrire avec
                    </div>

                    <div>  
                       <Button color='primary' >facebook</Button>   
                       <Button color='primary' >google</Button> 
                    </div>

                    </div>
             </form>
             </Paper>


        </Grid>


        )
}
export default Signup;