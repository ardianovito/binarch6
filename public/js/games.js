class Start {
    constructor() {
        this.playerName = "PLAYER"
        this.botName = "COM"
        this.playerOption;
        this.botOption;
        this.winner = ""
    }

    get getBotOption() {
        return this.botOption;
    }

    set setBotOption(option) {
        this.botOption = option;
    }

    get getPlayerOption() {
        return this.playerOption
    }

    set setPlayerOption(option) {
        this.playerOption = option;
    }

    botBrain() {
        const option = ["kertas", "gunting", "batu"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winCalculation() {
        if (this.botOption == "kertas" && this.playerOption == "gunting") {
            return this.winner = this.playerName
        } else if (this.botOption == "kertas" && this.playerOption == "batu") {
            return this.winner = this.botName;
        } else if (this.botOption == "gunting" && this.playerOption == "kertas") {
            return this.winner = this.botName;
        } else if (this.botOption == "gunting" && this.playerOption == "batu") {
            return this.winner = this.playerName
        } else if (this.botOption == "batu" && this.playerOption == "kertas") {
            return this.winner = this.playerName
        } else if (this.botOption == "batu" && this.playerOption == "gunting") {
            return this.winner = this.botName;
        } else {
            return this.winner = "SEIMBANG"
        }
    }

    matchResult() {
        if (this.winner != "SEIMBANG") {
            return `${this.winner} MENANG!`;
        } else {
            return `${this.winner}`;
        }
    }

    

    
}

function pickOption(params) {
    const start = new Start();
    start.setPlayerOption = params;
    start.setBotOption = start.botBrain();
    start.winCalculation();

    const inGame = document.getElementById("inGame");
    console.log(`${start.getPlayerOption} VS ${start.getBotOption}`);
    inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}` + " " + " " + `${start.matchResult()}`;

    inGame.style.display = 'inline-block'

    
}

function resetHasil(){
    const reset = document.getElementById("reset")
    inGame.textContent = ""
    inGame.style.display ='none'
}

