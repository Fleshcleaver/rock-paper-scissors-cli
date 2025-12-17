#!/usr/bin/env node

import { program } from "commander";
import gameState from "../src/lib/state.js";
import { showMainMenu } from "../src/lib/gameLogic.js";

program
  .name("rockpaperscissors")
  .description("A CLI rock-paper-scissors game")
  .version("1.0.0");

program.parse(process.argv);

// Start the game after parsing arguments
showMainMenu(gameState);
