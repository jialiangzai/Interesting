function template(id, data) {
    var str = document.getElementById(id).innerHTML
    var pattern=/{{\s*([A-z]+)\s*}}/;
   var patternResult=null;
   while (patternResult=pattern.exec(str)) {
       str=str.replace(patternResult[0],data[patternResult[1]])
   }
    return str  
}
