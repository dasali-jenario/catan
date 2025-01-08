# catan-analyzer

## Overview
Catan Analyzer is a web application designed to help players analyze a Settlers of Catan board at the beginning of their turn. Users can input variable information about the board and receive a visual representation along with the probabilities for each building option.

## Features
- Interactive board representation
- Input fields for board variables
- Calculation of building option probabilities
- Responsive design for various devices

## Project Structure
```
catan-analyzer
├── src
│   ├── assets
│   │   ├── css
│   │   │   └── styles.css
│   │   └── js
│   │       └── app.js
│   ├── components
│   │   ├── Board.js
│   │   ├── BuildingOptions.js
│   │   └── ProbabilityCalculator.js
│   ├── index.html
│   └── types
│       └── index.js
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd catan-analyzer
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Open `src/index.html` in your web browser.
2. Input the current board state and other variables.
3. View the visual representation of the board and the calculated probabilities for building options.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.