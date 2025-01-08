class ProbabilityCalculator {
    constructor(board) {
        this.board = board;
    }

    calculateProbabilities() {
        const probabilities = {};
        const totalTiles = this.board.tiles.length;

        this.board.tiles.forEach(tile => {
            const { number, resource } = tile;
            probabilities[resource] = (probabilities[resource] || 0) + this.getProbability(number);
        });

        return probabilities;
    }

    getProbability(number) {
        switch (number) {
            case 2:
            case 12:
                return 1 / 36;
            case 3:
            case 11:
                return 2 / 36;
            case 4:
            case 10:
                return 3 / 36;
            case 5:
            case 9:
                return 4 / 36;
            case 6:
            case 8:
                return 5 / 36;
            case 7:
                return 0; // No resources generated
            default:
                return 0;
        }
    }

    displayProbabilities() {
        const probabilities = this.calculateProbabilities();
        console.log("Resource Generation Probabilities:", probabilities);
    }
}

export default ProbabilityCalculator;