
/*..................................
get user inputs
.........................................*/
let userInputs = document.getElementById("dob");

/*........................................
lock future dates from date picker
............................................*/
userInputs.max = new Date().toISOString().split("T")[0];

/** NOTES:
 * new Date(): 
 * This creates a new JavaScript Date object representing the current date and time. * 
 *
 * .toISOString(): 
 * This method converts the Date object to a string in ISO 8601 format. 
 *              -2024-05-15T12:34:56.789Z
 * 
 * .split("T"): This splits the string into an array of substrings using the letter 'T' as a delimiter.
 *          ["2024-05-15", "12:34:56.789Z"]
 * 
 * [0]: This accesses the first element of the array, which contains the date part. 
 * 
 */




/*........................................
Calculating age
............................................*/

const calculate = document.getElementById("calculateBtn");

calculate.onclick = function(){

    calculateAge();

};

function calculateAge(){

    // get birth date from the user input field. 
    let birthDate = new Date(userInputs.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;  // // in java scripts months are stores as Januray = 0, february= 1.., so add 1 to get the real number of the month.
    let y1 = birthDate.getFullYear();

    console.log(d1,m1,y1);


    // get today date 
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    console.log(d2,m2,y2);


    //calculation
    let y3, m3, d3;

    // year gap
    y3 = y2 - y1 ;

    //month gap
    if(m2 >= m1){

        m3 = m2 - m1;

    }else{

        y3--;
        m3 = 12 + m2 - m1;
        
    }

    //date gap
    if(d2 >= d1){

        d3 = d2 - d1;

    }else{

        d3 = getDaysInMonth(y1,m1) + d2 - d1;
        m3--;
    }

    if(m3 < 0){
        m3 = 11;
        y3--;
        //If the month difference becomes negative after the previous calculations, it adjusts the month difference to 11 (since there are 12 months in a year) and decrements the year difference by one.
    }

    console.log(d3, m3, y3);

    //display the result
    const display = document.getElementById("result");

    display.innerHTML = `Your Age: <span>${y3}</span> Years, <span>${m3}</span> Months, <span>${d3}</span> Days.`;
    
};

//create a function to calculate no of days that each month had;
function getDaysInMonth(year, month){

    return new Date(year, month, 0).getDate();


    /**  NOTES;
     * 
     * 
     *  ** year and month given as a parameter that we want to calculate no of days.
     * 
     *  ** It sets the day of the month to 0. 
     *   --Setting the day to 0 in JavaScript means the last day of the previous month.
     *   --Therefore, this will create a date object representing the last day of the given month.
     * 
     *  ** It uses the getDate method to get the day of the month from the created Date object
     */

}