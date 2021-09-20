const bigNumber = function(number){
    if(number> 100){
        return true;
    } else {
        return false;
    }
};

console.log(bigNumber(105));


const enterClub = function(maxInClub, currentInClub, ageOfPerson){
    if(ageOfPerson<21){
        return ("this is a club for adults");
    } else if (currentInClub >= maxInClub){
        return ("it's too busy now, come back later");
    } else {
        return ("come in");
    }
};

console.log(enterClub(25, 35, 15));


const average = function(num1, num2, num3, num4, num5){
    let averageNum = (num1 + num2 + num3 + num4 + num5)/5;
    return Math.round(averageNum);
}

console.log(average(5,4,5,4,5));