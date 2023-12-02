function isPalindrome(s: string): boolean {
    let nonAlpha = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return nonAlpha.split("").reverse().join("") === nonAlpha.split("").join("")
};