import React from 'react'

import { Provider } from 'react-redux'
import { AppRouter } from './Routers/AppRouter'
import { store } from './Store/store' 

export const ClientApp = () => {


    { /*
         provier es un higherOrder component que 
         distribuye el estdo global de la aplicacion
         es por eso que lo ponemos en el punto mas alto de la app
     */ }

    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
