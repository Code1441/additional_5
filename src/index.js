module.exports = function check(str, bracketsConfig) {
   var brackets = {};
   var openBracketsArray = [];
   var closeBracketsArray = []
   for(var i = 0; i < bracketsConfig.length; i++){
       brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
       closeBracketsArray.push(bracketsConfig[i][1]);
       openBracketsArray.push(bracketsConfig[i][0]);
   }
    var str = str.split('');
    var stack = [];
    for(var i =0; i< str.length; i++){
        if(openBracketsArray.indexOf(str[i])!=-1){
         for(openBracket in brackets) {
          if (str[i] == openBracket) {
              stack.push(brackets[openBracket]);
              break;
          }
      }}
     else if (stack.length == 0 || stack.pop()!==str[i] && stack.pop()!=='|') return false;
    };
    stack = stack.filter(function(el){
        if (el!="|") return true;
    })
    if(stack.length==0) return true;
    else return false;
}
