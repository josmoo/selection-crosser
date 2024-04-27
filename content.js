const steps_div = document.body.querySelector("#recipe__steps-content_1-0");
const steps = steps_div.querySelectorAll("li");

console.log(steps_div);
console.log(steps);

for (let step of steps.values()){
    step_elmnt = step.lastElementChild;
    console.log(step_elmnt);
    btn_html = "<button id='mark_done' type='button' class='button--contained-standard done-btn'>Mark as Complete</button>"
    step_elmnt.insertAdjacentHTML("afterend", btn_html)
}

const mark_btns = document.body.querySelectorAll("#mark_done")

mark_btns.forEach(button => {
    button.addEventListener('click', () => {
        let step = button.parentElement;
        let step_p = step.querySelector('p');
        console.log(step_p)
        if (step_p.classList.contains('markout-ext-marked-out')) {
            step_p.classList.remove('markout-ext-marked-out')
            button.textContent = 'Mark as Complete'
        }
        else {
            step_p.classList.add('markout-ext-marked-out')
            button.textContent = 'Unmark as Complete'
        }
    });
});