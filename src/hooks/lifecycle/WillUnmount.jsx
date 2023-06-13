/**
 * Ejemplo de uso del metodo componente willUnmount
 * Ejemplo de uso de hook componente funcional
 */

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log("Componente antes de que el componente desaparezca")
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}



export const WillUnmountHook = () => {
    useEffect(() => {

        return () => {
            console.log("Componente antes de que el componente desaparezca")
        };
    }, []);
    return (
        <div>
            <h1>WillUnmount</h1>

        </div>
    );
}

