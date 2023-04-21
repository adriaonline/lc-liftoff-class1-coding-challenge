function minMax(evalNums) {
    evalNums.push = [];
  
    min = Math.min(...evalNums);
    max = Math.max(...evalNums);
  
    console.log("[" + min + ", " + max +"]");
  }
  
minMax([77, 22, 44]);