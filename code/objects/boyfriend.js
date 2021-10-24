const defaultBfData = {
    spr: "bean"
};

export function addBoyfriend(bfData = defaultBfData) {
    add([
        sprite(bfData.spr),
        pos(vec2(center().x, 512)),
        origin('center')
    ]);
};