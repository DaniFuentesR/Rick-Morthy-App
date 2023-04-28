import { useState } from "react";
import validation from "./validation";


const Form = ({login}) => {

    let [userData, setUserData] = useState ({
        email: "",
        password: "", 
    })

    let [errors, setErrors] = useState ({
        email: "",
        password: "",
    })


    const handleChange = (event) => {
        
        const property = event.target.name;
        const value = event.target.value; 

        setUserData({...userData, [property]: value })
        validation ({...userData, [property]:value}, errors, setErrors)
       
      
    }    

    const handleSubmit = (event) => {

        event.preventDefault (); 
        login (userData); 

    }

    
    
    return (

        <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email: </label>
        <input name= "email" type="email" placeholder="Ingrese su Email" value={userData.email} onChange={handleChange}/>
        {errors.email && <p>{errors.email}</p>}
        <hr/>
        <label htmlFor="password">Contraseña: </label>
        <input name="password" type="password" placeholder="Ingrese su contraseña" value={userData.password} onChange={handleChange}/>
        {errors.password && <p>{errors.password}</p>}

        <button>Submit</button>





        </form>




    )

}

export default Form; 