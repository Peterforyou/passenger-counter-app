let count = 0;
let zero = document.getElementById('zero');
let saveBtn = document.getElementById('save-btn');
let entrieSpace = document.getElementById('entries')
// disable = false

function increment() {
    count += 1;
    zero.textContent = count;
}

function save() {
    let countSave = count + " - "
    entrieSpace.textContent += countSave;
    count = 0;
    zero.textContent = 0
}