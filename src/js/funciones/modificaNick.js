export const modificaNick = (nick)=>{
    var newNick = nick.trim().replaceAll(' ', '_').toUpperCase(); //en la variable newNick, modifico los espacios y los cambio por _ (ELIMINA espacios delante y atrás)
    console.log(newNick);
    return newNick;
}