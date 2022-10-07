function triangle(a,b,c){
        if ((a == b) && (b == c)) 
        return "Equilateral";  
        else if ((a == b ) || (b == c) || (a == c)) 
        return "Isosceles";
        else
        return "Scalene";
}

let a = 7,b = 5, c = 7;
console.log(triangle(a,b,c));