function consoleSuffix() {
    let inputDay = prompt("Enter a day of the month:") / 1;
    let suffix;
    const dırSuffixes = [6, 16, 26];
    const dürSuffixes = [3, 4, 13, 14, 23, 24];
    const durSuffixes = [9, 10, 19, 29, 30];
    if (inputDay < 1 || inputDay > 31) {
        alert("Invalid day")
        return 0;
    }
    else if (dırSuffixes.indexOf(inputDay) != -1) {
        suffix = 'dır';
    }
    else if (dürSuffixes.indexOf(inputDay) != -1) {
        suffix = 'dür';
    }
    else if (durSuffixes.indexOf(inputDay) != -1) {
        suffix = 'dur';
    }
    else {
        suffix = 'dir';
    }
    console.log(`Bu gün ayın ${inputDay}-${suffix}`);
}

consoleSuffix();