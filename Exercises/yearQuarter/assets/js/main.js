function yearQuarter() {
    const inputDate = prompt("Enter a date");
    const arrDate = inputDate.split(" ");
    if (arrDate.length != 2 || arrDate[0] < 1 || arrDate[0] > 31) {
        alert("Incorrect input");
        return 0;
    }
    else {
        const allQuarters = [
            ['yanvar', 'fevral', 'mart'],
            ['aprel', 'may', 'iyun'],
            ['iyul', 'avqust', 'sentyabr'],
            ['oktyabr', 'noyabr', 'dekabr'],
        ]
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                if (allQuarters[i][j] == arrDate[1].toLowerCase()) {
                    if (allQuarters[i][j] = 'fevral' && arrDate[0] > 28) {
                        alert("February has only 28 days");
                    }
                    else {
                        console.log(++i);
                    }
                    return 0;
                }
            }
        }
        let choice = prompt("Your entered month is not in the list to check the list enter 'yes' else enter 'no'").toLowerCase();
        if (choice == 'yes') {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 3; j++) {
                    console.log(allQuarters[i][j]);
                }
                console.log("\n");
            }
        }
        else if (choice == 'no') {
            return 0;
        }
        else {
            alert('Invalid Operator');
        }
    }
}

yearQuarter()