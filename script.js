document.addEventListener('DOMContentLoaded', function() {
    // Máquinas disponíveis para aluguel (pode ser substituído por dados de uma API)
    const machines = [
        {
            id: 1,
            name: "Betoneira",
            description: "Preparo de concreto em  sua obra de pequeno e médio porte.",
            image: "/imgs/",
            specs: {
  
            },
            price: "R$ 800/dia", 
        },
        {
            id: 2,
            name: "Andaimes",
            description: "Estrutura de suporte para construção e manutenção de edifícios.",
            image: "assets/images/munck.jpg",
            specs: {
            
            },
            price: "R$ 1.200/dia"
        },
        {
            id: 3,
            name: "Escoras",
            description: " suporte temporário para estruturas durante a construção.",
            image: "assets/images/rolo.jpg",
            specs: {
        
  
            },
            price: "R$ 600/dia"
        },
        {
            id: 4,
            name: "Martelete 3,5kg Dewalt",
            description: "Escavações leves e demolições em obras de pequeno porte.",
            image: "assets/images/guindaste.jpg",
            specs: {
              
            },
            price: "R$ 1.500/dia"
        },
        {
            id: 5,
            name: "Martelete 10kg Dewalt",
            description: "Escavações leves e demolições em obras de pequeno e médio porte.",
            image: "assets/images/betoneira.jpg",
            specs: {
           
            },
            price: "R$ 200/dia"
        },
        {
            id: 6,
            name: "Martelete 16 Kg Vonder",
            description: " Escavações profundas e demolições em obras de grande porte.",
            image: "assets/images/escavadeira.jpg",
            specs: {
        
            },
            price: "R$ 1.000/dia"
        },
         {
            id: 7,
            name: "Martelete 30 Kg Vonnder",
            description: "Escavações profundas e demolições em obras de grande porte.",
            image: "assets/images/escavadeira.jpg",
            specs: {
             
            },
            price: "R$ 1.000/dia"
        },
         {
            id: 8,
            name: "Sapatas",
            description: "Estrutura de suporte para fundações de edifícios e estruturas.",
            image: "assets/images/escavadeira.jpg",
            specs: {
         
            },
            price: "R$ 1.000/dia"
        },
         {
            id: 9,
            name: "Compactador de Solo",
            description: "Compactação de solo para fundações e pavimentação.",
            image: "assets/images/escavadeira.jpg",
            specs: {
            },
            price: "R$ 1.000/dia"
        },
         {
            id: 10,
            name: "Gerador de 3KVA",
            description: "Fornecimento de energia elétrica para canteiros de obras.",
            image: "assets/images/escavadeira.jpg",
            specs: {

            },
            price: "R$ 1.000/dia"
        },
         {
            id: 11,
            name: "Gerador de 7KVA",
            description: "Fornecimento de energia elétrica para canteiros de obras.",
            image: "assets/images/escavadeira.jpg",
            specs: {
             
            },
            price: "R$ 1.000/dia"
        }, 
         {
            id: 12,
            name: "Plataforma",
            description: "Plataforma para elevação de materiais e pessoas em obras.",
            image: "assets/images/escavadeira.jpg",
            specs: {
            
            },
            price: "R$ 1.000/dia"
        },
         {
            id: 13,
            name: "Placa Vibratoria",
            description: "Compactação de solo para fundações e pavimentação.",
            image: "assets/images/escavadeira.jpg",
            specs: {
  
            },
            price: "R$ 1.000/dia"
        },
         {
            id: 14,
            name: "Vibrador de Concreto",
            description: "Compactação de concreto em fundações e estruturas.",
            image: "assets/images/escavadeira.jpg",
            specs: {
     
            },
            price: "R$ 1.000/dia"
        },
         {
            id: 15,
            name: "Rodas para Andaimes",
            description: "Rodas para movimentação de andaimes.",
            image: "assets/images/escavadeira.jpg",
            specs: {
     
            },
            price: "R$ 1.000/dia"
        },
         {
            id: 16,
            name: "Guarda Copo",
            description: " Suporte para proteção de áreas de trabalho.",
            image: "assets/images/escavadeira.jpg",
            specs: {
           
            },
            price: "R$ 1.000/dia"
        },
         {
            id: 17,
            name: "Peneira Eletrica",
            description: "Peneiramento de materiais para construção.",
            image: "assets/images/escavadeira.jpg",
            specs: {
                
            },
            price: "R$ 1.000/dia"
        },



















        
        
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