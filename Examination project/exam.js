let playerPoint = 0;
let missed = 0;

function point() {
    playerPoint++;

    show();
}

function misst() {
    missed++;

    show();
}

show();

function show() {

    document.querySelector('.score-sect')
    .innerHTML = `
    <h2>Scores</h2>
    <h1>Gotten: &longmapsto;${playerPoint}</h1>
    <h1>Missed: &longmapsto;${missed}</h1>
    `;
}


let questiona = '';

Questions.forEach((question) => {

        questiona += `
                    <div class="questions">
            <h2>${question.num}.${question.question}?</h2>
            <!--This is the place or section for the examiation project-->
            <div class="options">
                <h2 class="a-option" data-option-a="${question.Answer}" data-option-question-a="${question.option.a}">(a)${question.option.a}</h2>
                <h2 class="b-option" data-option-b="${question.Answer}" data-option-question-b="${question.option.b}">(b)${question.option.b}</h2>
                <h2 class="c-option" data-option-c="${question.Answer}" data-option-question-c="${question.option.c}">(c)${question.option.c}</h2>
                <h2 class="d-option" data-option-d="${question.Answer}" data-option-question-d="${question.option.d}">(d)${question.option.d}</h2>
                <!--this is the place for options-->
            </div>
        </div>
        `;
});


document.querySelector('.main')
    .innerHTML = questiona;

    document.querySelectorAll('.a-option')
        .forEach((button) => {
            button.addEventListener('click', () => {
                let AOption = button.dataset.optionA;
                let optionQuestion = button.dataset.optionQuestionA;

                if(AOption === optionQuestion) {
                    get();
                } else {
                    miss();
                }
            });
        });

        document.querySelectorAll('.b-option')
            .forEach((button) => {
                button.addEventListener('click', () => {
                    let BOption = button.dataset.optionB;
                    let optionQuestion = button.dataset.optionQuestionB;


                    
                if(BOption !== optionQuestion) {
                    miss();
                } else {
                    get();
                }
                })
            });
            
    document.querySelectorAll('.c-option')
    .forEach((button) => {
        button.addEventListener('click', () => {
            let COption = button.dataset.optionC;
            let optionQuestion = button.dataset.optionQuestionC;



            
            if(COption !== optionQuestion) {
                miss();
            } else {
                get();
            }
        });
    });

    document.querySelectorAll('.d-option')
        .forEach((button) => {
            button.addEventListener('click', () => {
                let DOption = button.dataset.optionD;
                let optionQuestion = button.dataset.optionQuestionD;


                
                if(DOption !== optionQuestion) {
                    miss();
                } else {
                    get();
                }
            })
        });



        function get() {
            let get = document.querySelector('.get');

            get.style = "visibility: visible";

            setTimeout(() => {
                get.style = "visibility: hidden";
            }, 2000);


            point();
        }



        function miss() {
            let miss = document.querySelector('.miss');

            miss.style = "visibility: visible";

            setTimeout(() => {
                miss.style = "visibility: hidden";
            }, 2000);

            misst();
        }




        function done() {
            document.querySelector('.score-sect')
                .style = "visibility: visible";
    }

    function gone() {
        document.querySelector('.score-sect')
            .style = "visibility: hidden";
}


            let isAutoscoring = false;

            function Views() {
                if(!isAutoscoring) {
                    done();
                    isAutoscoring = true;

                } else {
                    console.log('Gone');
                    gone();
                    isAutoscoring = false;
                }
            };


            document.querySelector('.view')
            .addEventListener('.click', () => {
                Views();
            });




        




