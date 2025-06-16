document.addEventListener('DOMContentLoaded', function() {
    // Máquinas disponíveis para aluguel (pode ser substituído por dados de uma API)
    const machines = [
        {
            id: 1,
            name: "Retroescavadeira",
            description: "Ideal para escavações em terrenos diversos e movimentação de terra.",
            image: "assets/images/retroescavadeira.jpg",
            specs: {
                power: "85 HP",
                capacity: "0.3 m³",
                weight: "7.5 ton"
            },
            price: "R$ 800/dia"
        },
        {
            id: 2,
            name: "Caminhão Munck",
            description: "Para transporte e descarga de materiais com praticidade e segurança.",
            image: "assets/images/munck.jpg",
            specs: {
                power: "210 HP",
                capacity: "8 ton",
                weight: "14 ton"
            },
            price: "R$ 1.200/dia"
        },
        {
            id: 3,
            name: "Rolo Compactador",
            description: "Compactação de solos em aterros e pavimentação de vias.",
            image: "assets/images/rolo.jpg",
            specs: {
                power: "110 HP",
                width: "2.1 m",
                weight: "10 ton"
            },
            price: "R$ 600/dia"
        },
        {
            id: 4,
            name: "Guindaste",
            description: "Para içamento de cargas pesadas em obras e indústrias.",
            image: "assets/images/guindaste.jpg",
            specs: {
                power: "150 HP",
                capacity: "20 ton",
                reach: "30 m"
            },
            price: "R$ 1.500/dia"
        },
        {
            id: 5,
            name: "Betoneira",
            description: "Preparo de concreto em obras de pequeno e médio porte.",
            image: "assets/images/betoneira.jpg",
            specs: {
                power: "5 HP",
                capacity: "400 L",
                weight: "0.5 ton"
            },
            price: "R$ 200/dia"
        },
        {
            id: 6,
            name: "Escavadeira Hidráulica",
            description: "Escavações profundas em diversos tipos de terreno.",
            image: "assets/images/escavadeira.jpg",
            specs: {
                power: "125 HP",
                capacity: "0.8 m³",
                weight: "15 ton"
            },
            price: "R$ 1.000/dia"
        }
    ];

    // Elementos do DOM
    const machineContainer = document.getElementById('machineContainer');
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    const contactForm = document.getElementById('contactForm');
    const header = document.querySelector('header');

    // Carregar máquinas
    function loadMachines() {
        machineContainer.innerHTML = machines.map(machine => `
            <div class="machine-card">
                <div class="machine-img">
                    <img src="${machine.image}" alt="${machine.name}">
                </div>
                <div class="machine-info">
                    <h3>${machine.name}</h3>
                    <p>${machine.description}</p>
                    <div class="machine-specs">
                        ${Object.entries(machine.specs).map(([key, value]) => `
                            <span><i class="fas fa-check-circle"></i> ${key}: ${value}</span>
                        `).join('')}
                    </div>
                    <span class="machine-price">${machine.price}</span>
                    <a href="https://wa.me/5511987654321?text=Olá,%20gostaria%20de%20alugar%20a%20máquina%20${encodeURIComponent(machine.name)}%20por%20${encodeURIComponent(machine.price)}" 
                       class="btn whatsapp-btn">
                        <i class="fab fa-whatsapp"></i> Alugar agora
                    </a>
                </div>
            </div>
        `).join('');
    }

    // Menu mobile
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Scroll suave para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if(this.getAttribute('href') === '#') return;
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se estiver aberto
                if(navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                }
            }
        });
    });

    // Efeito de scroll no header
    window.addEventListener('scroll', function() {
        if(window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Inicializar mapa
    function initMap() {
        // Coordenadas do local (exemplo: São Paulo)
        const location = { lat: -23.5505, lng: -46.6333 };
        
        const map = L.map('map').setView(location, 15);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker(location).addTo(map)
            .bindPopup('EngSolutions<br>Rua das Construções, 123')
            .openPopup();
    }

    // Envio do formulário de contato
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: this.name.value,
            email: this.email.value,
            phone: this.phone.value,
            subject: this.subject.value,
            message: this.message.value
        };
        
        // Aqui você faria a chamada para a API que salva no banco de dados
        // Exemplo com fetch:
        fetch('/server/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
        });
        
        // Para fins de demonstração, vamos apenas mostrar os dados no console
        console.log('Dados do formulário:', formData);
        alert('Mensagem enviada com sucesso! (demonstração)');
        this.reset();
    });

    // Inicializações
    loadMachines();
    initMap();
});