export function MultiButton (){
    function handleButtonClick(event){
        console.log(event.target.name);
    }
    return (
        <div>
            <button name="one" onClick={handleButtonClick}>One</button>
            <button name="two" onClick={handleButtonClick}>Two</button>
            <button name="three" onClick={handleButtonClick}>Three</button>
        </div>
    )
}