import { addBoyfriend } from "../objects/boyfriend";

export function loadPlayScene() {
    return scene("playState", (songData) => {
        addBoyfriend();

        // arrows testing
        
        const left = add([
            sprite("allnotpressed"),
            pos(center().x - 150, 128),
            origin('center'),
            rotate(0),
        ])
        const up = add([
            sprite("allnotpressed"),
            pos(center().x - 50, 128),
            origin('center'),
            rotate(90)
        ])
        const down = add([
            sprite("allnotpressed"),
            pos(center().x + 50, 128),
            origin('center'),
            rotate(270)
        ])
        const right = add([
            sprite("allnotpressed"),
            pos(center().x + 150, 128),
            origin('center'),
            rotate(180)
        ])

        keyPress(["left", "a"], () => {
            left.unuse(sprite("allnotpressed"))
            left.use(sprite("arrowleft_pressed"))
        })
        keyRelease(["left", "a"], () => {
            left.unuse(sprite("arrowleft_pressed"))
            left.use(sprite("allnotpressed"))
        })
        keyPress(["up", "w"], () => {
            up.unuse(sprite("allnotpressed"))
            up.use(sprite("arrowup_pressed"))
        })
        keyRelease(["up", "w"], () => {
            up.unuse(sprite("arrowup_pressed"))
            up.use(sprite("allnotpressed"))
        })
        keyPress(["down", "s"], () => {
            down.unuse(sprite("allnotpressed"))
            down.use(sprite("arrowdown_pressed"))
        })
        keyRelease(["down", "s"], () => {
            down.unuse(sprite("arrowdown_pressed"))
            down.use(sprite("allnotpressed"))
        })
        keyPress(["right", "d"], () => {
            right.unuse(sprite("allnotpressed"))
            right.use(sprite("arrowright_pressed"))
        })
        keyRelease(["right", "d"], () => {
            right.unuse(sprite("arrowright_pressed"))
            right.use(sprite("allnotpressed"))
        })
    });  
};