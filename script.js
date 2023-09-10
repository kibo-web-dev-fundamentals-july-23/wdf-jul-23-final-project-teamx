/* var navLinks = document.getElementById('navbar');

console.log('This is an element: ' + navLinks.tagName);

// navLinks.forEach(navLink => {
// navLink.addEventListener('mouseover', (e) => {
//     console.log('e')
// })
// })
 */


document.addEventListener('DOMContentLoaded', function () {

    // Hover effect for nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    // Add the event listener
    navLinks.forEach(navLink => {
        navLink.addEventListener('mouseover', (e) => {
            // Do something when mouse is over the navbar
            // console.log('Mouse over navbar');
            navLink.style.color = 'rgb(14, 189, 122)';
            navLink.style.borderLeft = '2px solid rgb(14, 189, 122)';
            navLink.style.padding = '0 5px';

        })
        navLink.addEventListener('mouseout', (e) => {
            // Do something when mouse is over the navbar
            // console.log('Mouse out navbar');
            navLink.style.color = 'white';
            navLink.style.borderLeft = '0px';
            navLink.style.padding = '0px';
        })
    })

    // Hover on hero button
    const heroBtn = document.querySelector('.hero-btn');
    // console.log(heroBtns.length)
    // Add the event listener
    heroBtn.addEventListener('mouseover', (e) => {
        heroBtn.style.backgroundColor = 'rgb(7, 129, 82)';
        heroBtn.style.color = '#fff !important';
    })
    heroBtn.addEventListener('mouseout', (e) => {
        heroBtn.style.backgroundColor = 'rgb(14, 189, 122)';
        heroBtn.style.color = '#ffffff';
    })

    // Hover effect for card
    const cards = document.querySelectorAll('.card');
    // Add the event listener
    console.log(cards.length)
    cards.forEach(card => {
        card.addEventListener('mouseover', (e) => {
            card.style.transform = 'translateY(-10px)';
        })
        card.addEventListener('mouseout', (e) => {
            card.style.transform = 'translateY(0px)';
        })
    })

    // Hover effect for enroll btn
    const enrollBtn = document.querySelectorAll('.enroll');
    // Add the event listener
    // console.log(cards.length)
    enrollBtn.forEach(element => {
        element.addEventListener('mouseover', (e) => {
            element.style.backgroundColor = 'rgb(7, 129, 82)';
        })
        element.addEventListener('mouseout', (e) => {
            element.style.backgroundColor = 'rgb(14, 189, 122)';
        })
    })

    // Hover effect for learn more button in about section
    const readBtn = document.querySelectorAll('.read');
    // Add the event listener
    // console.log(cards.length)
    readBtn.forEach(element => {
        element.addEventListener('mouseover', (e) => {
            element.style.backgroundColor = 'rgb(7, 129, 82)';
        })
        element.addEventListener('mouseout', (e) => {
            element.style.backgroundColor = 'rgb(14, 189, 122)';
        })
    })

    // Hover effect for footer texts
    const footerTexts = document.querySelectorAll('.footer > .foot > p > a');
    // Add the event listener
    // console.log(cards.length)
    footerTexts.forEach(element => {
        element.addEventListener('mouseover', (e) => {
            element.style.color = 'rgb(74, 119, 106)';
        })
        element.addEventListener('mouseout', (e) => {
            element.style.color = 'rgb(189, 207, 202)';
        })
    })

    // Hover effect texts on image
    const imageTexts = document.querySelectorAll('.img-container .content a');
    // Add the event listener
    // console.log(cards.length)
    imageTexts.forEach(element => {
        element.addEventListener('mouseover', (e) => {
            element.style.color = 'rgb(14, 189, 122)';
        })
        element.addEventListener('mouseout', (e) => {
            element.style.color = '#ffffff';
        })
    })

    // // Hover on enroll button
    // const enrollBtn = document.querySelector('.enroll');
    // // Add the event listener
    // enrollBtn.addEventListener('mouseover', (e) => {
    //     heroBtn.style.backgroundColor = 'rgb(7, 129, 82)';
    //     heroBtn.style.color = '#fff !important';
    // })
    // heroBtn.addEventListener('mouseout', (e) => {
    //     heroBtn.style.backgroundColor = 'rgb(14, 189, 122)';
    //     heroBtn.style.color = '#ffffff';
    // })
    /*     // Hover effect for nav links
        const enrollBtn = document.querySelectorAll('.enroll');
        // Add the event listener
        // console.log(cards.length)
        enrollBtn.forEach(element => {
            element.addEventListener('mouseover', (e) => {
                element.style.transform = 'translateY(-10px)';
            })
            element.addEventListener('mouseout', (e) => {
                element.style.transform = 'translateY(0px)';
            })
        }) */

        // Send on click buttons to page

    });