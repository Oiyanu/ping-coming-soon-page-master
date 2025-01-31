class Email{
    constructor(container){
        this.container = container;
        this.term = this.container.querySelector('input[name="name"]');
        this.list = document.querySelector('.output');
        this.hoverEffect();
    }
    validateEmail(email){
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
    init(){
        const terms = this.term.value.trim();

        if(terms == ''){
            this.render('Whoops! It looks like you forgot to add your email');
        } else if(!this.validateEmail(terms)){
            this.render('Please provide a valid email address');   
        } else {
            this.render('Email is valid!');
        }

        setTimeout(() => {
            this.container.reset();
            this.container.classList.remove('active');
        }, 1000);
    }
    render(message){
        const html = `<p class="mess">${message}</p>`;
        
        this.list.innerHTML += html;
        setTimeout(() => {
            this.list.innerHTML = '';
        }, 1500);
        
    }
    hoverEffect(){
        this.term.addEventListener('input', () => {
            if(this.term.value.trim() !== ''){
                this.term.classList.add('active');
            } else {
                this.term.classList.remove('active');
            }
        });
    }
}



const email = new Email(document.querySelector('.newform'));
const button = document.querySelector('button');

button.addEventListener('click', e => {
    e.preventDefault();
    email.init();
});



