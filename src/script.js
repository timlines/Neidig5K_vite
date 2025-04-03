// import { Client, Databases, ID } from "appwrite";

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('67ed95e900328693a3d3');

// const databases = new Databases(client);

// const promise = databases.createDocument(
//     '67ede05c000bfeb8e29c',
//     '67ede06e002d4796e781',
//     ID.unique(),
//     { "first-name": "Tim",
//       "last-name": "Lines",
//       "email-address": "tim@email.com"
//      }
// );

// promise.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });





// Page Formatting
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const createMobileNav = () => {
        const header = document.querySelector('header');
        const mainNav = document.querySelector('.main-nav');
        const topRightNav = document.querySelector('.top-right-nav');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        header.insertBefore(mobileMenuBtn, mainNav);
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            topRightNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            
            if (mobileMenuBtn.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    };
    
    // Only create mobile nav for smaller screens
    if (window.innerWidth < 1024) {
        createMobileNav();
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1024) {
            if (!document.querySelector('.mobile-menu-btn')) {
                createMobileNav();
            }
        } else {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            if (mobileMenuBtn) {
                mobileMenuBtn.remove();
                document.querySelector('.main-nav').classList.remove('active');
                document.querySelector('.top-right-nav').classList.remove('active');
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Registration countdown timer
    const countdownElement = document.createElement('div');
    countdownElement.classList.add('countdown');
    
    // Set the race date (April 19, 2025)
    const raceDate = new Date('May 17, 2025 07:00:00').getTime();
    
    // Update countdown every second
    const countdownTimer = setInterval(function() {
        const now = new Date().getTime();
        const distance = raceDate - now;
        
        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display countdown
        countdownElement.innerHTML = `
            <h3>RACE DAY COUNTDOWN</h3>
            <div class="countdown-timer">
                <div class="countdown-item">
                    <span class="countdown-value">${days}</span>
                    <span class="countdown-label">Days</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value">${hours}</span>
                    <span class="countdown-label">Hours</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value">${minutes}</span>
                    <span class="countdown-label">Minutes</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value">${seconds}</span>
                    <span class="countdown-label">Seconds</span>
                </div>
            </div>
        `;
        
        // If countdown is over
        if (distance < 0) {
            clearInterval(countdownTimer);
            countdownElement.innerHTML = "<h3>RACE DAY IS HERE!</h3>";
        }
    }, 1000);
    
    // Add countdown to the page
    const raceDetails = document.querySelector('.right-column');
    if (raceDetails) {
        raceDetails.appendChild(countdownElement);
        
        // Add some CSS for the countdown
        const style = document.createElement('style');
        style.textContent = `
            .countdown {
                margin-top: 30px;
                padding: 20px;
                background-color: #f5f5f5;
                border-radius: 5px;
            }
            
            .countdown h3 {
                text-align: center;
                margin-bottom: 15px;
                color: #0a2d5e;
            }
            
            .countdown-timer {
                display: flex;
                justify-content: space-between;
            }
            
            .countdown-item {
                text-align: center;
                flex: 1;
            }
            
            .countdown-value {
                display: block;
                font-size: 2rem;
                font-weight: bold;
                color: #0a2d5e;
            }
            
            .countdown-label {
                font-size: 0.9rem;
                color: #666;
            }
            
            @media (max-width: 768px) {
                .countdown-value {
                    font-size: 1.5rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add registration button
    const registerBtn = document.createElement('a');
    registerBtn.href = 'https://docs.google.com/forms/d/e/1FAIpQLScQeTzY_Dn1wri3PODmiP4JI3GPO39NHjsCn0ENt_iIbzX4nQ/viewform?usp=header';
    registerBtn.classList.add('btn-register');
    registerBtn.textContent = 'REGISTER NOW';
    
    if (raceDetails) {
        raceDetails.appendChild(registerBtn);
        
        // Add CSS for register button
        const style = document.createElement('style');
        style.textContent = `
            .btn-register {
                display: block;
                background-color: #ffcc00;
                color: #0a2d5e;
                text-align: center;
                padding: 15px;
                margin-top: 20px;
                font-weight: bold;
                border-radius: 3px;
                transition: background-color 0.3s;
            }
            
            .btn-register:hover {
                background-color: #e6b800;
            }
        `;
        document.head.appendChild(style);
    }
});