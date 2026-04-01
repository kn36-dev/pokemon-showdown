# Pokémon Showdown - Simple Explanation

Pokémon Showdown is a computer program that lets you play Pokémon battles online. It's like having a Pokémon game that you can play with friends from anywhere in the world.

## What This Project Does

This project is a complete Pokémon battle simulator. It can:
- Let people play Pokémon battles online
- Simulate all the rules of Pokémon games
- Work on computers, phones, and tablets
- Be used to make your own Pokémon battle website

## How It Works

The program has three main parts:

### 1. The Game Server
This is the main computer program that runs the battles. It:
- Handles all the connections from players
- Manages chat rooms where people talk
- Runs the actual Pokémon battles
- Keeps track of who wins and loses

### 2. The Client (Web Interface)
This is what people see when they visit the website. It:
- Shows the battle screen
- Displays chat messages
- Lets players choose their Pokémon
- Shows all the battle information

### 3. The Login Server
This part:
- Manages user accounts
- Keeps track of player rankings
- Handles passwords and security

## How to Use This Code

You can use this code to:
1. Run your own Pokémon battle website
2. Create Pokémon battle bots (computer programs that play Pokémon)
3. Learn how Pokémon battles work in a computer program
4. Add new Pokémon games or features

## Main Folders Explained

### `/server/`
This folder has all the code for the main game server. It handles:
- Connecting players to the game
- Managing chat rooms
- Running battles
- Keeping track of users

### `/sim/`
This folder has the code that actually simulates Pokémon battles. It:
- Knows all the rules of Pokémon games
- Figures out what happens when Pokémon attack
- Checks if moves work correctly
- Makes sure battles are fair

### `/data/`
This folder has all the Pokémon information:
- What Pokémon look like
- What moves they can do
- How strong they are
- What items they can use

### `/config/`
This folder has settings for how the game works:
- What rules to use
- How to connect to the internet
- What chat rooms to have
- How to handle user accounts

### `/lib/`
This folder has helper tools:
- Code to read and save files
- Tools to connect to databases
- Code to handle network connections
- Other useful functions

### `/chat-plugins/`
This folder has extra chat features:
- Special commands people can use
- Games to play in chat
- Tools to help moderators

### `/tools/`
This folder has special programs:
- Tools to test the game
- Programs to help developers
- Scripts to update the game

## How to Start Your Own Game Server

1. Get a computer that can run the program
2. Install Node.js (a program that lets this code run)
3. Copy the files from this project
4. Run the main program
5. Visit the website to play

## For Developers

This project is written in JavaScript and TypeScript. It's designed so that:
- People can easily understand how it works
- New features can be added easily
- The code is organized in a clear way

## License

This project is free to use and change. You can find the full license in the LICENSE file.
