function checkCard() {
  function getUserInput() {
    var input = document.getElementById("card").value;
  }

  function luhnCheck() {
    var ccNumSplit = ccNum.split("");
    var ccNum = getUserInput();
    var sum = 0;
    var validCard = false;
    var singleNum = [];
    var doubleNum = [];
    var finalArray = undefined;

    if ((!/ \d{15,16}(~\w[a-zA-Z])*$/g.test(ccNum)) || (ccNum.length > 16)) {
      return false;
    }

    if (ccNum.length === 15) {
      for (var i = ccNumSplit.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
          singleNum.push(ccNumSplit[i]);
        }
        else {
          doubleNum.push((ccNumSplit[i] * 2).toString()) ;
        }
      }
    }
    else if (ccNum.length === 16) {
      if (i % 2 !== 0) {
        singleNum.push(ccNumSplit[i]);
      }
      else {
        doubleNum.push((ccNumSplit[i]* 2).toString()) ;
      }
    }

    doubleNum = doubleNum.join("").split("");
    finalArray = doubleNum.concat(singleNum);
    for (j = 0; j < finalArray.length; j++){
      sum += parseInt(finalArray[j], 10);
    }

    if (sum % 10 === 0) {
      validCard = true;
    }

    console.log(sum);
    return validCard();
  }
}