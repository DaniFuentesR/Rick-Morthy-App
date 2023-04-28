const validation = (userData, errors, setErrors) => {

    if (!userData.email) 
        setErrors ({...errors, email: "Por favor completa este campo"}); 
    else if (userData.email.length > 35) 
        setErrors({...errors, email: "No puede superar los 35 caracteres"});
    else if (
        !/\S+@\S+\.\S+/.test(userData.email)
    ) {
        setErrors({...errors, email: "Ingresa un email válido"}); 
    } else {
    setErrors({...errors, email: ""});
    }

    if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors({...errors, password: "La contraseña debe tener entre 6 y 10 caracteres"})
    } else if (!/.*[0-9].*/.test(userData.password)) {
        setErrors({...errors, password: "La contraseña debe tener al menos un número"})
    }
        else {
            setErrors({...errors, password: ""})
        }    
};

export default validation; 