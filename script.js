const Faq = [
    {
        id:1,
        question: "How many team members can I invite?",
        answer:"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    },
    {
        id:2,
        question: "What is the maximum file upload size?",
        answer:"No more than 2GB. All files in your account must fit your allotted storage space."
    },
    {
        id:3,
        question: "How do I reset my password?",
        answer:"Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
    },
    {
        id:4,
        question: "Can I cancel my subscription?",
        answer:"Yes! Send us a message and we’ll process your request no questions asked."
    },
    {
        id:5,
        question: "Do you provide additional support?",
        answer:"Chat and email support is available 24/7. Phone lines are open during normal business hours."
    },
];

let data = "";
Faq.map((values) => {
  // console.log(values);
    data+= `<div>
                <article class="question-section_each question">
                    <h2 class="question-section_each-head">${values.question}</h2>
                    <img src="./images/icon-arrow-down.svg" class="question-section_each-image" alt="">
                </article>
                <p class="faq-section-answer">${values.answer}</p>
                <hr class="horizon" />
            </div>`
});
document.getElementById("dynamicFaq").innerHTML=data;


// code for revealing the answer to each question
const questions = document.querySelectorAll('.question');

questions.forEach((question) =>
    question.addEventListener('click', () => {
        if(question.parentNode.classList.contains('active')) {
            question.parentNode.classList.toggle('active');
        }
        else {
            questions.forEach((question) => 
            question.parentNode.classList.remove('active'));
            question.parentNode.classList.add('active');
        }
    })
);