controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    setAllSpritesVisible(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    setAllSpritesVisible(true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerLocation > 0) {
        listCars[playerLocation].setFlag(SpriteFlag.Invisible, true)
        playerLocation += -1
        listCars[playerLocation].setFlag(SpriteFlag.Invisible, false)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerLocation < listCars.length - 1) {
        listCars[playerLocation].setFlag(SpriteFlag.Invisible, true)
        playerLocation += 1
        listCars[playerLocation].setFlag(SpriteFlag.Invisible, false)
    }
})
function setAllSpritesVisible (visible: boolean) {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        value.setFlag(SpriteFlag.Invisible, !(visible))
    }
}
let playerLocation = 0
let mySprite: Sprite = null
let listCars: Sprite[] = []
let list = [
10,
35,
60,
85,
110,
135
]
listCars = []
for (let value of list) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 2 2 2 2 2 2 c 2 . . . 
        . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
        . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
        . 2 c 2 e e e e e e e b c 4 2 2 
        . 2 2 e b b e b b b e e b 4 2 2 
        . 2 e b b b e b b b b e 2 2 2 2 
        . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
        . e e e e e e f e e e f e 2 d d 
        . e e e e e e f e e f e e e 2 d 
        . e e e e e e f f f e e e e e e 
        . e f f f f e e e e f f f e e e 
        . . f f f f f e e f f f f f e . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(value, 94)
    listCars.push(mySprite)
}
playerLocation = 0
setAllSpritesVisible(false)
listCars[playerLocation].setFlag(SpriteFlag.Invisible, false)
