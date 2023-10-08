export function MouseClicker(){
    function handleButtonClick(event){
        console.log(event.currentTarget.name);
    }

    return <button name="one" onClick={handleButtonClick}>
        <img onClick={handleButtonClick} width={24} height={24} />
        Click me!
        </button>
}

// Il name attributo del pulsante viene comunque stampato sulla console quando si fa clic sull'immagine? Perché?
//Si, perche sto usando l'evento currentTarget, se non volessi visualizzarlo, quindi visualizzare name solo quando 
// sono effettivamente sulla parte interresata dovrei usare solo target