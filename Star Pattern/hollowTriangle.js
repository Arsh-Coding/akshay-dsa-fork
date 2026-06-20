let i, j, k, l;

for (i = 5; i >= 1; i--) {
    row = ''
    for (j = i; j >= 1; j--) {
        row += ' '
    }
    for (l = i; l > i - 1; l--) {
        row += '*'
    }
    for (k = 1; k <= 5 - i; k++) {
        row += ' '
    }
    for (l = 1; l <= 4 - i; l++) {
        row += ' '
    }
    if (i != 5) {
        row += '*'
    }

    console.log(row)
}
for (i = 1; i < 2; i++) {
    row = ""
    for (j = 0; j <= 10; j++) {
        row += '*'
    }
    console.log(row)
}