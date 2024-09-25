
function generatePatterns() {
    let result = "";
// Pattern 1
    let n1 = 5;
    result += "Pattern 1: \n";
    for (let i = 0; i < n1; i++) {
        result += ' '.repeat(i) + '*'.repeat(n1 - i) + "\n";
    }
    result += "\n";

    // Pattern 2:
    let n2 = 5;
    result += "Pattern 2:\n";
    // Upper half of the diamond
    for (let i = 1; i <= n2; i++) {
        result += ' '.repeat(n2 - i) + '*'.repeat(2 * i - 1) + "\n";
    }
    
    for (let i = n2 - 1; i >= 1; i--) {
        result += ' '.repeat(n2 - i) + '*'.repeat(2 * i - 1) + "\n";
    }
    result += "\n";

    // Pattern 3: 
    let n3 = 4;
    result += "Pattern 3: \n";
    
    for (let i = n3; i >= 1; i--) {
        result += ' '.repeat(n3 - i) + '*'.repeat(2 * i - 1) + "\n";
    }

    for (let i = 2; i <= n3; i++) {
        result += ' '.repeat(n3 - i) + '*'.repeat(2 * i - 1) + "\n";
    }

    return result;
}

document.getElementById("patterns").innerHTML = "<pre>" + generatePatterns() + "</pre>";