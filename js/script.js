// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.length==0 || num<2 || num>6 || (num.length>1 && num[0]=="0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 6.  Do not include leading zeros.`;
    } else {
        txt += `You have entered ${num}. <p>`;
        txt += `Smallest Integer is ${permutedMultiples(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the smallest positive integer, such that multiplied
    by integers {2,3,...,n}, contain the same digits.

    permutedMultiples(2) returns 125874.
    permutedMultiples(6) returns 142857.
*/
function permutedMultiples(n) {
    const isPermutation = (a,b) => a.length !== b.length ? false : a.split('').sort().join() === b.split('').sort().join();
    let start = 1;
    let found = false;
    let result = 0;
    while (!found) {
        start *= 10;
        for (let i=start;i<start*10/n;i++) {
            found = true;
            for (let j=2;j<=n;j++) {
                if (!isPermutation(i+'', j*i+'')) {
                    found = false;
                    break;
                }
            }

            if (found) {
                result = i;
                break;
            }
        }
    }
    return result;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}