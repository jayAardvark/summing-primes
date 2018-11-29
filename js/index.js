function sumPrimes(num) {
  let numArr = [];
  for (let i = 2; i <= num; i++){
    numArr.push(i);
    
  }

  let subtractArr = [];
  //let varInd;
  for (let i = 0; i < numArr.length; i++){
    let varInd = numArr[i];
    //console.log(varInd)
    
    for (let j = 0; j < numArr.length;j++){
      let varInd2 = numArr[j];
      //console.log(varInd % varInd2)
      if ((varInd != varInd2) && ((varInd % varInd2) === 0) && (subtractArr.indexOf(varInd) < 0)){
        subtractArr.push(varInd);
        
      //console.log(varInd + " yesh");
      }
    
    }
  }

  //console.log(subtractArr+"uuuuuuu")
  let finalArr = numArr.filter((x)=> subtractArr.indexOf(x) < 0 );
  //console.log(finalArr +" nerm")

  function arrTot (total, num){
    return total + num;
  }
  console.log(775 % 5)
  console.log(finalArr+"final")
  console.log(finalArr.reduce(arrTot))
  return finalArr.reduce(arrTot);
}


sumPrimes(977);




