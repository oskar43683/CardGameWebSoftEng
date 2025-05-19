# Monster Blackjack – Complete Documentation

This document provides comprehensive documentation for the Monster Blackjack project, including user information, developer documentation, contribution guidelines, and version history.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Game Rules](#game-rules)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Developer Documentation](#developer-documentation)
  - [Code Structure](#code-structure)
  - [Game Logic](#game-logic)
  - [UI Components](#ui-components)
  - [Card System](#card-system)
  - [Extending the Game](#extending-the-game)
- [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
  - [Getting Started](#getting-started)
  - [Development Process](#development-process)
  - [Coding Standards](#coding-standards)
  - [Submitting Changes](#submitting-changes)
  - [Bug Reports](#bug-reports)
  - [Feature Requests](#feature-requests)
  - [Contact](#contact)
- [Changelog](#changelog)
  - [Version 1.0.0](#version-100---2023-11-15)
  - [Unreleased Features](#unreleased)

## Project Overview
The Monster Card Game is a web-based card game that combines the classic rules of Blackjack with monster-themed cards. The game offers a simple yet engaging experience where players can test their luck against the dealer. With its intuitive interface and straightforward gameplay, it's perfect for quick gaming sessions.

##Features
- **Monster-themed cards**: Unique monster illustrations for each card value
- **Betting system**: Place bets and win or lose points based on game outcomes
- **Simple gameplay**: Easy to learn, fun to play
- **Responsive design**: Works on desktop and mobile devices
- **No installation required**: Play directly in your web browser

## Installation
No installation is required to play Monster Blackjack. Simply follow these steps:

1. Clone or download this repository to your local machine
   ```
   git clone https://github.com/yourusername/CardGameWebSoftEng.git
   ```
2. Open the `index.html` file in any modern web browser
3. Start playing!

## How to Play
1. You start with **1000 points**
2. Enter your bet amount in the input field
3. Click **Start Round** to begin
4. You'll receive two cards, and the dealer will receive one card
5. Click **Draw Card** to add more cards to your hand
6. Try to get as close to **21** as possible without going over
7. Click **Stand** when you're satisfied with your hand
8. The dealer will then draw cards until reaching at least 17 points
9. The higher score under 21 wins!

## Game Rules
- Card values range from 1 to 10 points
- Your goal is to get a higher total than the dealer without exceeding 21
- If your total exceeds 21, you "bust" and lose the round
- If the dealer busts, you win the round
- If you and the dealer have the same total, it's a draw
- Winning a round adds your bet amount to your points
- Losing a round subtracts your bet amount from your points
- In case of a draw, your bet is returned (no points gained or lost)

## Technologies Used
- **HTML5**: For the structure of the game
- **CSS3**: For styling and responsive design
- **JavaScript**: For game logic and interactivity
- **Custom Graphics**: Monster-themed card images

## Project Structure
```
CardGameWebSoftEng/
├── CardImages/         # Contains monster card images
│   ├── monster1.png
│   ├── monster2.png
│   └── ...
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # Game logic
└── DOCUMENTATION.md    # Project documentation
```

## Developer Documentation

### Code Structure

The project consists of three main files:

1. **index.html**: Contains the HTML structure of the game
2. **style.css**: Contains all styling for the game
3. **script.js**: Contains all game logic and functionality

#### index.html Structure

The HTML structure is organized as follows:

- `<head>`: Contains metadata, title, and CSS link
- `<body>`: Contains the game interface
  - Game title
  - Game area container
    - Points display
    - Bet input
    - Game control buttons
    - Player cards section
    - Dealer cards section
    - Message display area

#### script.js Structure

The JavaScript code is organized into several key functions:

- Game state variables
- Card drawing and display functions
- UI update functions
- Game flow control functions
- End game handling

#### style.css Structure

The CSS is organized into sections for:

- Body and general styling
- Game area container
- Card display and styling
- Button styling
- Input field styling

### Game Logic

#### Game State

The game state is managed through several global variables:

- `points`: Tracks the player's current points (starting at 1000)
- `bet`: Stores the current bet amount
- `playerHand`: Array of card values in the player's hand
- `dealerHand`: Array of card values in the dealer's hand
- `gameActive`: Boolean flag indicating if a game round is in progress

#### Game Flow

1. **Start Round**:
   - Function: `startRound()`
   - Validates the bet amount
   - Initializes player hand with two cards
   - Initializes dealer hand with one card
   - Enables game buttons
   - Updates the UI

2. **Player's Turn**:
   - Function: `drawCard()`
   - Adds a new card to the player's hand
   - Checks if player busts (total > 21)
   - Updates the UI

3. **Dealer's Turn**:
   - Function: `stand()`
   - Dealer draws cards until total is at least 17
   - Determines the winner based on final totals
   - Updates points based on the outcome
   - Updates the UI

4. **End Game**:
   - Function: `endGame(message, win)`
   - Updates points based on win/loss/draw
   - Disables game buttons
   - Displays result message
   - Updates the UI

### UI Components

#### Card Display

Cards are displayed using HTML generated by the `getCardHTML(value)` function, which:
- Creates a card div
- Adds an image based on the card value
- Displays the card value

#### UI Updates

The `updateUI()` function handles all UI updates:
- Updates the points display
- Renders player and dealer cards
- Updates player and dealer totals

### Card System

#### Card Values

- Cards have values from 1 to 10
- Card values are randomly generated using `drawCardValue()`
- Each card has a corresponding monster image (`monster1.png` through `monster10.png`)

#### Card Rendering

Cards are rendered using the `getCardHTML(value)` function, which creates HTML for each card including:
- The card container
- The monster image
- The card value display

### Extending the Game

#### Adding New Features

To add new features to the game:

1. **New Card Types**:
   - Add new card images to the CardImages directory
   - Modify `drawCardValue()` to include new card types
   - Update `getCardHTML()` to handle new card types

2. **Special Abilities**:
   - Add new functions for special card abilities
   - Modify `drawCard()` and `stand()` to check for and apply special abilities

3. **Game Modes**:
   - Add new game mode variables to track the current mode
   - Create mode-specific logic in game flow functions
   - Add UI elements to select different modes

#### Performance Considerations

The game is currently lightweight and should perform well on most devices. If adding more complex features:

- Consider using requestAnimationFrame for animations
- Optimize card rendering for games with many cards
- Use event delegation for handling multiple card interactions

## Contributing

### Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone. Please be kind and considerate in your interactions with other contributors.

### Getting Started

1. Fork the repository on GitHub
2. Clone your fork to your local machine
   ```
   git clone https://github.com/yourusername/CardGameWebSoftEng.git
   ```
3. Create a branch for your changes
   ```
   git checkout -b feature/your-feature-name
   ```
4. Make your changes and test them thoroughly
5. Commit your changes with clear, descriptive commit messages

### Development Process

#### Setting Up the Development Environment

No special setup is required for development. You'll need:
- A modern web browser
- A text editor or IDE of your choice
- Basic knowledge of HTML, CSS, and JavaScript

#### Testing Your Changes

Before submitting your changes, make sure to:
1. Test the game in multiple browsers (Chrome, Firefox, Safari, etc.)
2. Verify that all game features work correctly
3. Check that the UI is responsive and looks good on different screen sizes

### Coding Standards

Please follow these standards when contributing code:

#### HTML
- Use semantic HTML elements
- Maintain proper indentation (2 spaces)
- Include appropriate comments for complex sections

#### CSS
- Follow the existing naming conventions
- Group related styles together
- Use comments to separate major sections

#### JavaScript
- Follow camelCase naming for variables and functions
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused on a single task

### Submitting Changes

1. Push your changes to your fork
   ```
   git push origin feature/your-feature-name
   ```
2. Submit a pull request from your branch to the main repository
3. Include a clear description of the changes and any relevant issue numbers
4. Be responsive to feedback and be prepared to make additional changes if requested

### Bug Reports

If you find a bug, please create an issue with:
- A clear title and description
- Steps to reproduce the bug
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser and operating system information

### Feature Requests

We welcome feature requests! Please create an issue with:
- A clear title and description of the proposed feature
- The rationale for adding this feature
- Any implementation ideas you may have

### Contact

If you have questions or need help, please:
- Open an issue on GitHub
- Contact the project maintainer at [your-email@example.com]

## Changelog

All notable changes to the Monster Blackjack project will be documented in this section.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### Version 1.0.0 - 2023-11-15

#### Added
- Initial release of Monster Blackjack
- Basic game functionality with betting system
- Player and dealer card drawing mechanics
- Win/loss/draw conditions
- Monster-themed card images
- Responsive design for various screen sizes

#### Features
- Start with 1000 points
- Place bets before each round
- Draw monster cards with values 1-10
- Try to get as close to 21 as possible without going over
- Dealer draws until reaching at least 17 points
- Win or lose points based on game outcome

### Unreleased

#### Planned Features
- Sound effects and background music
- Special monster abilities for certain cards
- High score system
- Multiplayer functionality
- More advanced betting options
- Additional monster card designs
- Game difficulty settings
