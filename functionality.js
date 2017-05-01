const triggers = [
    {
        start: 0,
        end: 14,
        div: '.first'
    },
    {
        start: 14,
        end: 27,
        div: '.second'
    },
    {
        start: 27,
        end: 56,
        div: '.third'
    },
    {
        start: 56,
        end: 76,
        div: '.fourth'
    },
];

document.querySelector('.video').addEventListener("timeupdate", function() {
    const time = this.currentTime;

    triggers.forEach( trigger => { 
        if (trigger.start < time && trigger.end > time) {
            setElementVisibility(trigger.div, true);
        } else {
            setElementVisibility(trigger.div, false);
        };
    });
});

function setElementVisibility(elementSelector, bool) {
    const element = document.querySelector(elementSelector);
    const classList = element.className.split(" ");

    if (classList.indexOf("visible") > -1) {
        if (!bool) { 
            element.className = classList.filter(name => name !== "visible").join(" ");
        }
    } else {
        if (bool === true) {
            element.className += " visible";
        }
    }
}