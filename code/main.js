// Import modules 

import kaboom from "kaboom"; // Main Kaboom Module 
import { loadAssets } from "./loader";

import { loadPlayScene } from "./scenes/playScene";

// Ka-boom

export const k = kaboom({
    width: 1280,
    height: 720
});

// Load Assets

loadAssets();

// Load Scenes

loadPlayScene();

// Default Scene

go("playState");