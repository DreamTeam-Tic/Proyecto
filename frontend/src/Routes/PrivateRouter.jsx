import React from 'react'
import HomeAdmin from '../private/HomeAdmin'
import { Route, Router, Redirect} from 'react-router'
import CrearMascota from '../private/CrearMascota'
import CrearServicio from '../private/CrearServicio'


// const PrivateRoute =(props) => {

//     return (

//         // <Route exact={props.exact} path={props.path} component={props.component}/>
//         // <Route {...props}/>
        
//     )
// }

const estaAutenticado=()=>{


    const token=sessionStorage.getItem('token')

    
    if(token){
  
      return true
  
    }
    else{
  
      return false
  
    }
  }
  

const PrivateRoute =({component: Component, ...rest}) => {

    return (

        // <Route exact={props.exact} path={props.path} component={props.component}/>
        <Route {...rest}>
            {estaAutenticado()?<Component/>: <Redirect to='/login'/>}
        </Route>
        
    )
}

export default PrivateRoute
