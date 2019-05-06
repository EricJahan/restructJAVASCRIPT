// Rédigez une fonction expandedForm qui écrive un nombre sous sa forme développée.
/*  expandedForm(12); // Should return '10 + 2*1'
  expandedForm(42); // Should return '4*10 + 2*1'
  expandedForm(70304); // Should return '7*10000 + 3*100 + 4*1'
*/

function expandedFormNormal(enteredNumber) {
    var enteredNumber = enteredNumber.toString();
    var output = [];

    for (var i = 0; i < enteredNumber.length; i++) {
        if (enteredNumber[i] > 0) {
            var zeros = '';
            // console.log(digits.length-i-1)
            for (var z = enteredNumber.length - i - 1; z > 0; z--) {
                // console.log(z)
                zeros += '0';
            }
            output.push(Number(enteredNumber[i] + zeros));
        }
    }
    return output.join(' + ');
}


function expandedForm(n) {
    var l = n.toString();
    var result = [];

    for (let i = 0; i < l.length; i++) {
        if (l[i] != 0) {
            if (l[i] == 1) {
                result.push(Math.pow(10, l.length - i - 1));
            }
            else {
                result.push(l[i] + "*" + Math.pow(10, l.length - i - 1));
            }
        }
    }
    return result.join(" + ");
}