import { addBoyfriend } from "../objects/boyfriend";

export function loadPlayScene() {
    return scene("playState", (songData) => {
        addBoyfriend();
    });  
};