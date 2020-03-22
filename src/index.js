module.exports = function check(str, bracketsConfig) {
   str = str.split("");  
   let result = [];
   
   for (let i = 0; i < str.length; i++) {
     for(let j = 0; j < bracketsConfig.length; j++) { 

       if(str[i] === bracketsConfig[j][0]) {
         
         result.push(bracketsConfig[j][0]);
         if(str[i] === bracketsConfig[j][1] &&
            str[i] === result[result.length-2]) {
           result.pop();
           result.pop();
         }
       } 
       else if (str[i] == bracketsConfig[j][1]) {
         if(result[result.length-1] != bracketsConfig[j][0]) return false;
 
         result.pop();          
       }
     }        
   }
   
   return result.length === 0;
}
