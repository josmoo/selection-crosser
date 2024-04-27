const steps_div = document.body.querySelector("#recipe__steps-content_1-0");
const steps = steps_div.querySelectorAll("li");

unmark_all_html = "<button id='unmark_all' type='button' class='button--contained-standard unmark_all'>Unmark All</button>";
steps_div.insertAdjacentHTML("beforebegin", unmark_all_html);

for (let step of steps.values()){
    step_elmnt = step.lastElementChild;
    btn_html = "<button id='mark_done' type='button' class='button--contained-standard'>Mark as Complete</button>";
    step_elmnt.insertAdjacentHTML("afterend", btn_html);
}

const mark_btns = document.body.querySelectorAll("#mark_done");

let unmark_btn = document.body.querySelector("#unmark_all");
unmark_btn.addEventListener('click', () => {
    mark_btns.forEach(button => {
        let step = button.parentElement;
        let step_p = step.querySelector('p');
        step_p.classList.remove('markout-ext-marked-out');
        button.textContent = 'Mark as Complete';
    });
});


mark_btns.forEach(button => {
    button.addEventListener('click', () => {
        let step = button.parentElement;
        let step_p = step.querySelector('p');
        if (step_p.classList.contains('markout-ext-marked-out')) {
            step_p.classList.remove('markout-ext-marked-out');
            button.textContent = 'Mark as Complete';
        }
        else {
            step_p.classList.add('markout-ext-marked-out');
            button.textContent = 'Unmark as Complete';
        }
    });
});