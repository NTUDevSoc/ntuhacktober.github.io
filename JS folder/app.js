//variables

let toggleMoon = document.querySelector('.moon-icon');
let body = document.querySelector('body');
let textParagraph = document.querySelectorAll('.lead');
let issueContainer = document.querySelectorAll('.issues-container')
let socialIcons = document.querySelectorAll('.social-icons a');

toggleMoon.addEventListener('click', function () {
    this.classList.toggle('active')

    if (this.classList.contains('active')) {
        body.style.backgroundColor = 'hsl(235, 24%, 19%)'
        this.src = 'images/icon-sun.svg'
        body.style.color = 'white'
        for (i = 0; i < textParagraph.length; i++){
            textParagraph[i].style.color = 'white'
        }

        for (i = 0; i < socialIcons.length; i++){
            socialIcons[i].style.color = 'white';
            //these are invoking functions that are exceucted immedaitly after they are called
            socialIcons[i].addEventListener('mouseenter', (function (index) {
                return function () {
                    socialIcons[index].style.color = '#9554EE'
                };
            })(i));
            //these are invoking functions that are exceucted immedaitly after they are called
            socialIcons[i].addEventListener('mouseleave', (function (index) {
                return function () {
                    socialIcons[index].style.color = 'white'
                };
            })(i));
        }
        
    } else {
        body.style.backgroundColor = ''
        this.src = 'images/icon-moon.svg'
        body.style.color = ''
        for (i = 0; i < textParagraph.length; i++){
            textParagraph[i].style.color = ''
        }
        
        for (i = 0; i < socialIcons.length; i++){
            socialIcons[i].style.color = ''
            socialIcons[i].addEventListener('click', function() {
                this.classList.remove('hover-icons-on-darkmode');
            })
        }
        

    }
})