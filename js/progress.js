const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
// FORMULA
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    // CACULATING OFFSET
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}