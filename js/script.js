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