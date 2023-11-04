export function MouseClicker(){
    function handleButtonClick(event){
        console.log(event.currentTarget.name);
    }

    function handleImageClick(event){
        console.log(event.currentTarget.src);
    }

    return <button name="one" onClick={handleButtonClick}>
        <img src="https://img.freepik.com/premium-photo/dark-blue-gradient-abstract-texture-background_41691-1179.jpg" onClick={handleImageClick} width={24} height={24} />
        Click me!
        </button>
}

// Il name attributo del pulsante viene comunque stampato sulla console quando si fa clic sull'immagine? Perché?
//Si, perche sto usando l'evento currentTarget, se non volessi visualizzarlo, quindi visualizzare solo src senza name quando 
// clicco l'immagine dovrei usare solo target