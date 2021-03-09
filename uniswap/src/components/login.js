import React from 'react';
import { Grid,Paper , Avatar, TextField,Button, Typography,Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



const Login=({handleChange})=>{
    const paperStyle={padding :20, height:"62vh" ,width:325 , margin:"0 Auto"}
    const avatarStyle={backgroundColor:"#50aebb" }
    const btStyle={margin:'15px 0'}
    return(
       <Grid>
            <Paper   style={paperStyle} >
              <Grid  align="center">
                 <Avatar style= {avatarStyle}> <LockOutlinedIcon/> </Avatar>
                 <h3>Acceder à mon compte Uniswap</h3>
             </Grid>
             <Grid margin= "20px">
                 <TextField label='Email' placeholder= 'votre email' type='Email'  fullWidth  required />
                 <TextField label='Mot de passe' placeholder= 'votre mot de passe' fullWidth type='password' required />

                 <FormControlLabel
        control={
          <Checkbox
             
            name="checkedB"
            color="primary"
          />
        }
        label="Se souvenir de moi"
      />
           <Button type='submit' color='primary' variant="contained" style={btStyle} fullWidth>Se connecter</Button>
           <Typography><Link href="#"  >
                Mot de passe oublié ?
           </Link></Typography>

           <Typography>    Vous avez un compte ?
               <Link href="#" onClick={()=>handleChange("event", 0)} >
            S'inscrire
              </Link>
           </Typography>


             </Grid>
             </Paper>


        </Grid>


        )
}
export default Login;