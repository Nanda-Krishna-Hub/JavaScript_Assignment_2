function grade(g){
    let x ;
    if((g>=90) && (g<= 100))
    x = 1;
    else if((g>=80) && (g<90))
    x = 2;
    else if((g>=70) && (g<80))
    x = 3;
    else if((g>=60) && (g<70))
    x = 4;
    else if((g>=50) && (g<60))
    x = 5;
    else if((g>=40) && (g<50))
    x = 6;
    else if((g>=0) && (g<40))
    x = 7;
    else 
    x = 8;

    switch(x){
        case 1: console.log("S grade");
        break;
        case 2: console.log("A grade");
        break;
        case 3: console.log("B grade");
        break;
        case 4: console.log("C grade");
        break;
        case 5: console.log("D grade");
        break;
        case 6: console.log("E grade");
        break;
        case 7: console.log("Student has failed");
        break;
        case 8: console.log("Invalid marks");
        break;
    }
}

let g = 1000;
grade(g);