
function sequence(n) {
    let newArr = [];
    newArr.push(n);
    let str = n;
    while (newArr.length < str){
        newArr.push(n -= 1)
        } 
        
        return newArr
}
console.log(sequence(5))

//Return the Day

function weekday(n) {
    let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let i = n - 1;
        let day = arr[i];
    if (n < 1 || n > 7) {
        return  "Wrong, please enter a number between 1 and 7"
       
    } else {
        return day;
    }
    
    return
}
console.log(weekday(2))