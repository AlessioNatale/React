export function MouseClicker(){
    function handleButtonClick(event){
        console.log(event.target.name);
    }

    function handleImageClick(event){
        console.log(event.target.src);
    }

    return <button name="one" onClick={handleButtonClick}>
        <img src="https://img.freepik.com/premium-photo/dark-blue-gradient-abstract-texture-background_41691-1179.jpg" onClick={handleImageClick} width={24} height={24} />
        Click me!
        </button>
}


// Come è possibile impedire che l' nameattributo del pulsante venga stampato sulla console quando si fa clic sull'immagine?
//usando il metodo target