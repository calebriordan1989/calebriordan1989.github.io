/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
//Created function bubbleSort with 1 parameter and also placed async in front. 
async function bubbleSort(array) {
    //This is going to be the first iteration found in the pseudocode.
    for (var i = 0; i <= array.length-1; i++) {
        //This is going to be the second iteration found in the pseudocode.
        for (var j = array.length - 1;j >= i + 1; j--) {
            //Here is the if statement that will compare two values and swap them if necessary. 
            if (array[j].value < array[j - 1].value) {
                swap (array, j, j -1);
            //This is 2c that was provided in the instructions. 
            updateCounter(bubbleCounter);
            await sleep();
            }
            
        }
    }
    
}

// TODO 3: Implement quickSort
//Created function quickSort with 3 parameters and also placed async in front.
async function quickSort(array, left, right) {
    //The next 3 if statements follow along with the pseudocode provided in the directions. 
    if (right - left > 0) {
       var index = await partition(array, left, right); 
    
    if (left < index - 1) {
       await quickSort(array, left, index - 1)
    } 
    
    if (index < right){
        await quickSort(array, index, right)
        }
    }

}


// TODOs 4 & 5: Implement partition
async function partition(array, left, right) {
    //This will select the middle element value as the pivot point. 
    var pivot = array[Math.floor((right + left) / 2)].value;
    //This loop will run as long as left is less than right. 
    while (left <= right){
        //This will increment left until the pivot is found.
       while (array[left].value < pivot) {
        left++;
       }
        while (array[right].value > pivot) {
            //This will decrement right until the pivot is found. 
            right--;
        }
        if (left <= right) {
            //This will swap elements if the left is less than the right. 
            swap(array, left, right);
            updateCounter(quickCounter);
            await sleep();
            left++;
            right--;
        }
        }
    return left
}


// TODO 1: Implement swap
//The function will be created here and have three parameters per the instructions.
function swap (array, i, j) {
    //This will create a variable called temporary. At first it is set equal to i, then i is set equal to j, and finally j is set equal to the temporary variable. 
    //This should allow for the indexes to be swapped. 
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    //This is calling the helper function drawSwap with the three parameters also found in swap function. 
    drawSwap(array, i, j);
}



///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}