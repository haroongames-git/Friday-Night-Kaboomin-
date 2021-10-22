const defaultBfData = {
    spr: "bean",
};

export function addBoyfriend(bfData = defaultBfData) {
    add([
        sprite(bfData.spr),
    ]);
};