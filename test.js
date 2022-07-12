const math = () => {
    let mathInt = Math.floor(Math.random() * 1) + 0;
    let mathDec = Math.floor(Math.random() * 99) + 1;
    console.log(parseFloat(`${mathInt}.${mathDec}`));
}

math();