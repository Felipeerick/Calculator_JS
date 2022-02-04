function calculadora(n1, operador, n2){
    let result = 0;
    
    switch(operador){
      case "+": 
        result = n1 + n2;
        break
        
      case "-": 
        result = n1 - n2;
        break
        
      case "*": 
        result = n1 * n2;
        break
         
      case "=": 
        result = n1 == n2 ;
        break
        
      case "/": 
        result = n1 / n2;
        break
    }
    return result
  }
  
  console.log(calculadora(4 ,"+", 4))