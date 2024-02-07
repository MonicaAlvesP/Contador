import React, {useState} from "react";

function Contador() {

    // Sintaxe do useState
    const [numero, setNumero] = useState(0);


    //Função para adicionar um 1 valor quando eu clicar
    function incrementar() {

        if(numero < 25){
            setNumero(numero + 1);
        }
    }


    //Função para subtrair o valor quando eu clicar
    function decrementar() {

        if(numero > 0){
            setNumero(numero - 1);
        }
    }

    //Função para iniciar o valor do 0 quando eu clicar
    function zerar() {
        setNumero(numero - numero);
    }

    return(
        <>
        <h2>{numero}</h2>
        <button onClick={incrementar}> + </button>
        <button onClick={decrementar}> - </button>
        <button onClick={zerar}> Zerar </button>

        </>
    )
}

export default Contador;