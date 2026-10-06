function color (color2: string) {
    if (color2 == "r" || color2 == "R") {
        fuse = 1
    } else if (color2 == "Y" || color2 == "y") {
        fuse = 2
    } else if (color2 == "G" || color2 == "g") {
        fuse = 3
    } else if (color2 == "B" || color2 == "b") {
        fuse = 4
    } else {
        fuse = 0
    }
    answer = "" + answer + fuse
}
function Fuses (text: string, text2: string, text3: string, text4: string) {
    color(text)
    color(text2)
    color(text3)
    color(text4)
    basic.showString(answer)
}
let answer = ""
let fuse = 0
Fuses("", "", "", "b")
