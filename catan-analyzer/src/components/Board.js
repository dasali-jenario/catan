class Board {
    constructor() {
        this.tiles = this.initializeTiles();
        this.robberPosition = null;
    }

    initializeTiles() {
        // Initialize the board tiles with resources and numbers
        return [
            { resource: 'wood', number: 2 },
            { resource: 'brick', number: 3 },
            { resource: 'sheep', number: 4 },
            { resource: 'wheat', number: 5 },
            { resource: 'ore', number: 6 },
            { resource: 'wood', number: 8 },
            { resource: 'brick', number: 9 },
            { resource: 'sheep', number: 10 },
            { resource: 'wheat', number: 11 },
            { resource: 'ore', number: 12 },
        ];
    }

    render() {
        // Render the board visually
        const boardElement = document.getElementById('board');
        boardElement.innerHTML = ''; // Clear previous board

        this.tiles.forEach(tile => {
            const tileElement = document.createElement('div');
            tileElement.className = 'tile';
            tileElement.innerText = `${tile.resource} (${tile.number})`;
            boardElement.appendChild(tileElement);
        });

        if (this.robberPosition !== null) {
            this.renderRobber();
        }
    }

    renderRobber() {
        // Render the robber on the board
        const robberElement = document.createElement('div');
        robberElement.className = 'robber';
        robberElement.innerText = 'Robber';
        const boardElement = document.getElementById('board');
        boardElement.children[this.robberPosition].appendChild(robberElement);
    }

    updateRobberPosition(newPosition) {
        this.robberPosition = newPosition;
        this.render();
    }
}

export default Board;