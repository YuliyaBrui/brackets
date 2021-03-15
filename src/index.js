module.exports = function check(str, bracketsConfig) {
    let closed = {};
    let opened = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
        closed[bracketsConfig[i][0]] = bracketsConfig[i][1];
        opened[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (
            stack[stack.length - 1] == str[i] &&
            closed[str[i]] == opened[str[i]]
        )
            stack.pop();
        else if (str[i] in closed) {
            stack.push(closed[str[i]]);
        } else if (str[i] in opened) {
            if (stack.length == 0 || stack.pop() != str[i]) return false;
        }
    }
    return stack.length == 0;
};

/* function check(str, bracketsConfig) {
        let arrBrackets = str.split("");
        let stack = [];
        let arrOpen = ["[", "(", "{", "|"];
        let arrClose = ["]", ")", "}", "|"];
        for (let i = 0; i < arrBrackets.length; i++) {
            if (arrOpen.indexOf(arrBrackets[i]) !== -1) {
                stack.push(arrClose.indexOf(arrBrackets[i]));
            } else {
                if (stack.pop() !== arrOpen.indexOf(arrBrackets[i]))
                    return false;
            }

            return stack.length == 0;
        }
         
if (bracketsConfig.length == 0) return false;
    for (let i = 0; i < bracketsConfig.length; i++) {
        let subarray = bracketsConfig[i];
        if (
            subarray.length != 2 ||
            arrOpen.indexOf(subarray[0]) !== arrClose.indexOf(subarray[1])
        )
            return false;
    }
};
*/
