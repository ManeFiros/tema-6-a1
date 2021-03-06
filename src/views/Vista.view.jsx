
import { useState } from 'react'
import LoginButton from '../components/LoginButton.component'
import LogoutButton from '../components/LogoutButton.component'

export default function Vista() {
    const [acceso, setAcceso] = useState(true);
 
    let accederLogin = () => { setAcceso(true); };
    let accederLogout = () => { setAcceso(false); }
 
    let boton;
 
    if(acceso) boton = <LogoutButton onClick={accederLogout}/>
    else boton = <LoginButton onClick={accederLogin}/>
    
    const [mensajesSinLeer, setMensajesSinLeer] = useState(0);
    
    let addMensajeSinLeer = () => { setMensajesSinLeer(mensajesSinLeer + 1); }

    return (
        <div> 
            <div>{boton}</div> 
            <div>
                {mensajesSinLeer > 0 &&
                    <p> Tienes {mensajesSinLeer} mensajes sin leer... </p>
                }

                <button onClick={addMensajeSinLeer}>Sumar 1 mensaje</button>
            </div>
        </div>
    );
}