# Monster Blackjack – Web Card Game

A simple luck-based card game inspired by Blackjack and Hearthstone. Battle against the dealer using monster-themed cards!

![Monster Blackjack Game](https://via.placeholder.com/600x300?text=Monster+Blackjack+Screenshot)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Game Rules](#game-rules)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)

## Overview
Monster Blackjack is a web-based card game that combines the classic rules of Blackjack with monster-themed cards. The game offers a simple yet engaging experience where players can test their luck against the dealer. With its intuitive interface and straightforward gameplay, it's perfect for quick gaming sessions.

## Features
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
└── README.md           # Project documentation
```

## Future Enhancements
- Add sound effects and background music
- Implement special monster abilities for certain cards
- Create a high score system
- Add multiplayer functionality
- Develop more advanced betting options

## Contributing
Contributions to Monster Blackjack are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request
