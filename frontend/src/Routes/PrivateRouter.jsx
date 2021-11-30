import React from 'react'

import { Route,  Redirect} from 'react-router'



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
