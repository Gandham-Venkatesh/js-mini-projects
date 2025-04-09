class Password {
    constructor() {
        this.password = "";
        this.passwordlen = 15;
        this.letters = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];
        this.numbers = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        ];
        this.specialChars = [
            '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ';', ':', '<', '>', '?', '/', '\\', '|', '~', ',', '.', '`'
        ];
        this.funnypass = [
            'password',
            'youcantguessme',
            'thisisnotapassword',
            'hahahackthis',
            'youcantbreakme',
            'whatareyouthinking',
            'youcantseeme',
            'wrongpassword',
            'tryagainbuddy',
            'goodluckhacker',
            'ilostmypassword',
            'nopasswordneeded',
            'passwordiswaste',
            'thisisasecret',
            'supersecurepassword',
            'notyourpassword'
        ];
        this.inner = document.getElementById('password');
        this.radios = document.getElementsByName('passwordType');
        this.genbtn = document.getElementById('generateBtn');
    }
    lettersfun = () => {
        let randomLetter = this.letters[Math.floor(Math.random() * this.letters.length)]
        console.log(randomLetter)
        return randomLetter;
    }
    numbersfun = () => {
        let randomNumber = this.numbers[Math.floor(Math.random() * this.numbers.length)]
        console.log(randomNumber)
        return randomNumber;
    }
    specialCharsfun = () => {
        let randomChar = this.specialChars[Math.floor(Math.random() * this.specialChars.length)]
        console.log(randomChar)
        return randomChar;
    }
    strongpas = () => {

        this.password = '';
        for (let i = 0; i < this.passwordlen; i++) {
            let components = [this.lettersfun(), this.numbersfun(), this.specialCharsfun()];
            this.password += components[Math.floor(Math.random() * components.length)];
        }
        this.inner.value = this.password;
    }
    simplepas = () => {

        this.password = '';
        for (let i = 0; i < this.passwordlen; i++) {
            let components = [this.lettersfun(), this.numbersfun()];
            this.password += components[Math.floor(Math.random() * components.length)];
        }
        this.inner.value = this.password;
    }
    funnypas = () => {
        let randomPass = this.funnypass[Math.floor(Math.random() * this.funnypass.length)];
        this.inner.value = randomPass;
    }

}
generate = () => {
    let password = new Password();
    let radios = password.radios;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == 'simple') {
                password.simplepas();
            } else if (radios[i].value == 'strong') {
                password.strongpas();
            } else if (radios[i].value == 'funny') {
                password.funnypas();
            }
            break;
        }
    }
}