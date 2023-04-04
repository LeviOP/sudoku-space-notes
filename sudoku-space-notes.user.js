// ==UserScript==
// @name        Sudoku.com space to toggle notes
// @namespace   Violentmonkey Scripts
// @match       https://sudoku.com/*
// @grant       none
// @version     1.0
// @author      Levi_OP
// @description Toggle "Notes" on sudoku.com with a keybind.
// ==/UserScript==

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault();
        fakeClick(document.querySelector("div.game-controls-pencil"));
    }
});

function fakeClick(element) {
    ["mouseover", "mousedown", "mouseup", "mosueout"].forEach((e) => triggerMouseEvent(element, e));
}

function triggerMouseEvent(node, eventType) {
    const clickEvent = new Event(eventType, {
        "bubbles": true,
        "cancelable": true
    })
    node.dispatchEvent(clickEvent);
}
