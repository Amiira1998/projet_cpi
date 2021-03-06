import React from 'react';
import { Grid,Paper , Avatar, TextField,Button, Typography  } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';




const Signup=()=>{
    const paperStyle={padding :20, height:"81vh" ,width:300 , margin:"0 Auto"}
    const avatarStyle={backgroundColor:"#50aebb" }
    const btStyle={margin:'15px 0'}
    const marginTop={marginTop:10}
    return(
       <Grid>
            <Paper   style={paperStyle} >
              <Grid  align="center">
                 <Avatar style= {avatarStyle}> < AccountCircleIcon/> </Avatar>
                 <h2>Sign Up</h2>
                 <Typography variant='caption' gutterBottom> Remplissez ce formulaire pour créer un compte</Typography>
             </Grid>
             <Grid margin= "20px">
                 <TextField label='Nom' placeholder= 'votre nom'   fullWidth  required />
                 <TextField label='Prénom' placeholder= 'votre Prénom'   fullWidth  required />
                 <FormControl component="fieldset" style={marginTop} required>
                   <RadioGroup aria-label="gender" name="gender1" style= {{display:'initial'}} >
                     <FormControlLabel value="female" control={<Radio />} label="Femelle" />
                     <FormControlLabel value="male" control={<Radio />} label="Mâle" />
     
                   </RadioGroup>
                 </FormControl>
                 <TextField label='Email' placeholder= 'votre email' type='Email' fullWidth  required />
                 <TextField label='Mot de passe' placeholder= 'votre mot de passe' fullWidth type='password' required />

                 <FormControl component="fieldset" style={marginTop} required>
                   <RadioGroup aria-label="gender" name="gender1" style= {{display:'initial'}} >
                     <FormControlLabel value="female" control={<Radio />} label="Etudiant" />
                     <FormControlLabel value="male" control={<Radio />} label="Prof" />
     
                   </RadioGroup>
                 </FormControl>

                 <FormControlLabel
        control={
          <Checkbox
             
            name="checkedB"
            color="primary"
          />
        }
        label="J'accepte toutes les conditions"
      />
                  <Button type='submit' color='primary' variant="contained" style={btStyle} fullWidth>S'inscrire</Button>
           

             </Grid>
             </Paper>


        </Grid>


        )
}
export default Signup;