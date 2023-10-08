export function MouseClicker(){
    function handleButtonClick(event){
        console.log(event.target.name);
    }

    return <button name="one" onClick={handleButtonClick}>
        <img name="pippo" onClick={handleButtonClick} width={24} height={24} />
        Click me!
        </button>
}

// Come è possibile impedire che l' nameattributo del pulsante venga stampato sulla console quando si fa clic sull'immagine?
//usando il metodo target