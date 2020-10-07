function staircase(n) {
    for (let i = 0; n > i; i +=1) {
        let str = '';
        for (let blankIndex = i; n - 1 > blankIndex; blankIndex += 1) {
            str += ' ';
        }
        for (let printIndex = 0; i + 1 > printIndex; printIndex += 1) {
            str += '#';
        }
        console.log(str);
    }
}
