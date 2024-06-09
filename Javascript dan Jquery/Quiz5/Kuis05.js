function fibonacci  (input)  {
    if (input < 2) {
        return input;
    }else{
        return fibonacci(input - 1) + fibonacci(input - 2)
    }
} 
for (let i = 1; i < 8; i++){
    console.log(fibonacci(i));
}