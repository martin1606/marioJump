const math = () => {
    let mathInt = Math.floor(Math.random() * 1) + 0;
    let mathDec = Math.floor(Math.random() * 99) + 1;
    let number = parseFloat(`${mathInt}.${mathDec}`);
    return number;
    
}

const timeR = setInterval(() => {
    console.log(math());;    
}, 2000);


setInterval(() => {
    
}, interval);