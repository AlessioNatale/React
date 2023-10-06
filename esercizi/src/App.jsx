import { Hello } from "./Hello";

export function App(){
    return(
        <div>
            <Hello/>
            <Hello/>
            <Hello/>
            <Hello/>
        </div>
    )
}

// È possibile utilizzare il Hello componente più di una volta nel Appcomponente? Cosa succede se lo fai?
//Si è possibile farlo e come si puù notare riproduce in pagina più volte il contenuto del componente Hello