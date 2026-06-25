function isAnagram(s: string, t: string): boolean {
    let s1 = s.split('').sort();
    let t1 = t.split('').sort();
    if (s1.length !== t1.length) {
        return false;
    }
    console.log(s1, t1);
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== t1[i]) {
            return false;
        }
    }
    return true;
};
console.log(isAnagram("rat", "tar"));