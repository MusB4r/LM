let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
};

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    section.forEach(sec => {
        let top= window.scrollY;
        let offset= sec.offsetTop -150;
        let height = sec.offsetHeight;
        let dirc = sec.getAttribute('id');

        if(top>= offset && top <offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + dirc + ']').classList.add('active');
            });
        };
    });
};