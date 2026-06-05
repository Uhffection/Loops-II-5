// Write your code below

/* All 'return' statements are included just
 for me to practice storing data after running
 the function */

 function findProduct(num1,num2) {
    let product = 1
    
    if (num1 > num2) {
        
        console.log(0);
        
        return 0;
    }

    for (i = num1;i < num2; i++) {
        product *= i
    }

    console.log(product);
    
    return product;
}

findProduct(1,4);

// While Loop Configuration

function findProduct2(num1,num2) {
     
    let product = 1;

    let i = num1;

    if (num1 > num2) {

        console.log(0)

        return 0
    }
    
    while (i < num2) {

        product *= i;

        i++;

    }

    console.log(product);

    return product;
}

findProduct(1,4);