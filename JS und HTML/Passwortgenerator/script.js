function getRandomChar(number, lower, upper, other){
    var numberChars = "0123456789";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var otherChars = "`~!@#$%^&*()-_=+[{]}|;:'\",<.>/?";
    var charSet;
    if (number == true){
        charSet += numberChars;
    }
    if (lower == true){
        charSet += lowerChars
    }
    if (upper == true){
        charSet += upperChars
    }
    if (other == true){
        charSet += otherChars
    }

    return charSet.charAt(Math.floor(Math.random()*(charSet.length - 0) + 0))
}

function getPassword() {
    mylength = document.getElementById("passwordlength").value;
    myUpper = document.getElementById("gros").checked;
    mylower = document.getElementById("klein").checked;
    mynumber = document.getElementById("zahl").checked;
    myother = document.getElementById("sonder").checked;

    var rc="";
    for (var idx = 1; idx < mylength; idx++){
        rc += getRandomChar(mynumber, mylower, myUpper, myother);
    }

    document.getElementById("passwordfield").value = rc;

}