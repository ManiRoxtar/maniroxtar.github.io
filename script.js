document.addEventListener('DOMContentLoaded', function() {
    // Tab Navigation
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('data-tab');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            tabs.forEach(t => t.classList.remove('active'));
            
            document.getElementById(target).classList.add('active');
            this.classList.add('active');
        });
    });

    // Default Active Tab
    document.querySelector('.tab[data-tab="home"]').click();

    // Personalization Toggle
    const toggle = document.getElementById('toggle-personalization');
    const cardContainer = document.getElementById('card-container');

    const zaynCards = [
        { img: 'WhatsApp Image 2024-08-09 at 4.33.16 PM.jpeg', link: 'Product Link', brand: 'Bewakoof' },
        { img: 'WhatsApp Image 2024-08-09 at 4.32.54 PM.jpeg', link: 'Product Link', brand: 'Bewakoof' },
        { img: 'WhatsApp Image 2024-08-09 at 4.33.29 PM.jpeg', link: 'Product Link', brand: 'Bewakoof' },
        { img: 'WhatsApp Image 2024-08-09 at 4.34.17 PM.jpeg', link: 'Product Link', brand: 'Bewakoof' }
    ];

    const ananyaCards = [
        { img: 'WhatsApp Image 2024-08-09 at 4.17.25 PM.jpeg', link: 'Product Link 1', brand: 'Bewakoof' },
        { img: 'WhatsApp Image 2024-08-09 at 4.15.15 PM.jpeg', link: 'Product Link 2', brand: 'Bewakoof' },
        { img: 'WhatsApp Image 2024-08-09 at 4.13.02 PM.jpeg', link: 'Product Link 3', brand: 'Bewakoof' },
        { img: 'WhatsApp Image 2024-08-09 at 4.05.02 PM.jpeg', link: 'Product Link 3', brand: 'Bewakoof' }
    ];

    function generateCards(cards) {
        cardContainer.innerHTML = '';
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `
                <img src="${card.img}" alt="Product Image">
                <p>${card.link}</p>
                <p>${card.brand}</p>
            `;
            cardContainer.appendChild(cardElement);
        });
    }

    toggle.addEventListener('change', function() {
        if (this.checked) {
            generateCards(ananyaCards);
        } else {
            generateCards(zaynCards);
        }
    });

    // Default Personalization State
    generateCards(zaynCards);

    // Fitting Section
    const sizeButtons = document.querySelectorAll('.size-btn');
    const fittingImage = document.getElementById('fitting-image');

    const sizeImages = {
        S: 'bewbrown1.png',
        M: 'bewbrown.png',
        L: 'bewbrown2.png',
        XL: 'bewbrown4.png',
        XXL: 'bewbrown5.png',
        XXXL: 'bewbrown6.png'
    };

    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const size = this.getAttribute('data-size');
            fittingImage.src = sizeImages[size];
        });
    });
});
