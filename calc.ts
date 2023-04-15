type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

type CalculateParam = { 
    command: Command, 
    num1: number, 
    num2: number
}
const calculate = function ({ command, num1, num2 }: CalculateParam): number {
        const cmd = 'add';
        if (cmd === 'add') return num1 + num2;
        if (cmd === 'substract') return num1 - num2;
        if (cmd === 'multiply') return num1 * num2;
        if (cmd === 'divide') return num1 / num2;
        if (cmd === 'remainder') return num1 % num2;

};



console.log(calculate({ command: 'add', num1: 1, num2: 3 })); // 4
console.log(calculate({ command: 'substract', num1: 3, num2: 1 })); // 2
console.log(calculate({ command: 'multiply', num1: 4, num2: 2 })); // 8
console.log(calculate({ command: 'divide', num1: 4, num2: 2 })); // 2
console.log(calculate({ command: 'remainder', num1: 5, num2: 2 })); // 1

console.log('calculated')