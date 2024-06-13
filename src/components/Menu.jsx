import React, {useEffect} from 'react'

const Menu = () => {
    useEffect(() => {
        console.log("comprueva si hay una session");
        if (window.localStorage) {
            if (!(window.localStorage.getItem('login') !== undefined
              && window.localStorage.getItem('login'))
            ) {
                console.log("No encuentra la session en local");
                localStorage.removeItem("login");
                window.location.replace("/");
            }else{
                console.log("Si existe la session en local");
            }
          }
      }, []);

       const cerrarSession = () => {
        localStorage.removeItem("login");
        window.location.replace("/");
      }
  return (
    <div>
        <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/bienbenida">Bienvenida</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/gestion">Gestion de usuarios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/tablero">Tablero de Usuarios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={() => cerrarSession()} tabindex="-1" aria-disabled="true">Cerrar Sessión</a>
                </li>
            </ul>

    </div>
  )
}

export default Menu