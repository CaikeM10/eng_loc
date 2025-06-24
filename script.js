document.addEventListener('DOMContentLoaded', function() {
    // ------------------- VARIÁVEIS E CONSTANTES GLOBAIS -------------------

    // Número de telefone para contato (usado no header e no WhatsApp)
    const phoneNumber = '5588998183147'; // Use o formato internacional sem o '+' para o link do WhatsApp
    const formattedPhoneNumber = '(88) 99818-3147'; // Formato para exibição na página

    // Máquinas disponíveis para aluguel
    const machines = [{
        id: 1,
        name: "Betoneira",
        description: "Preparo de concreto em sua obra de pequeno e médio porte.",
        image: "/imgs/betoneira.png",
        specs: {
            Mensal: "R$500/unit",
       
        },
        price: "R$ 150/dia",
    }, {
        id: 2,
        name: "Andaimes de 1,0m",
        description: "Estrutura de suporte para construção e manutenção de edifícios.",
        image: "/imgs/andaimes 11m.png",
        specs: {
            Mensal: "R$24,00/unit",
         
        },
        price: "R$ 1,50/dia"
    },
     {
        id: 3,
        name: "Andaimes de 1,5m",
        description: "Estrutura de suporte para construção e manutenção de edifícios.",
        image: "/imgs/andaimes 1x5.png",
        specs: {
            Mensal: "R$24,00/unit",
        
        },
        price: "R$ 1,50/dia"
    },
    
    {
        id: 4,
        name: "Escoras de 3,20 m",
        description: " suporte temporário para estruturas durante a construção.",
        image: "/imgs/escoras.png",
        specs: {
            Mensal: "R$24,00/unit",
       
        },
        price: "R$ 0,80/dia"
    },   
    {
        id: 5,
        name: "Escoras de 4,60 m",
        description: " suporte temporário para estruturas durante a construção.",
        image: "/imgs/escoras.png",
        specs: {
            Mensal: "R$45,00/unit",
      
        },
        price: "R$ 1,50/dia"
    }, 
    
        {
        id: 6,
        name: "Martelete 3,5kg Dewalt",
        description: "Escavações leves e demolições em obras de pequeno porte.",
        image: "/imgs/Dewalt 3,5kg.png",
        specs: {
            Mensal: "R$1.000/unit",
      
        },
        price: "R$ 100/dia"
    }, {
        id: 7,
        name: "Martelete 7kg Dewalt",
        description: "Escavações leves e demolições em obras de pequeno porte.",
        image: "/imgs/Dewalt 5kg.png",
        specs: {
            Mensal: "R$2.000/unit",
         
        },
        price: "R$ 150/dia"

    }, {
        id: 8,
        name: "Martelete 10kg Dewalt",
        description: "Escavações leves e demolições em obras de pequeno e médio porte.",
        image: "/imgs/Dewalt 10kg.png",
        specs: {
            Mensal: "R$2.000/unit",
          
        },
        price: "R$150/dia"
    }, {
        id: 9,
        name: "Martelete 16 Kg Vonder",
        description: " Escavações profundas e demolições em obras de grande porte.",
        image: "/imgs/nwvondder 16kg.png",
        specs: {
            Mensal: "R$ 2.000/unit",
         
        },
        price: "R$ 150/dia"
    }, {
        id: 10,
        name: "Martelete 30 Kg Dewalt",
        description: "Escavações profundas e demolições em obras de grande porte.",
        image: "/imgs/dewalt 30kgg.png",
        specs: {
            Mensal: "R$ 3.000/unit",
        
        },
        price: "R$ 200/dia"
    }, {
        id: 11,
        name: "Sapatas",
        description: "Estrutura de suporte para fundações de edifícios e estruturas.",
        image: "/imgs/sapatass.png",
        specs: {
            Mensal: "A definir",
        
        },
        price: "R$0,80/dia"
    }, {
        id: 12,
        name: "Compactador de Solo",
        description: "Compactação de solo para fundações e pavimentação.",
        image: "/imgs/compactador-loccom-min.png",
        specs: {
            Mensal: "R$ 3.500/unit",
           
        },
        price: "R$200/dia"
    }, {
        id: 13,
        name: "Gerador de 3KVA",
        description: "Fornecimento de energia elétrica para canteiros de obras.",
        image: "/imgs/Gerador 3,5 Kva-min.png",
        specs: {
            Mensal: "R$ 1.000/unit",
      
        },
        price: "R$ 100/dia"
    }, {
        id: 12,
        name: "Gerador de 7KVA",
        description: "Fornecimento de energia elétrica para canteiros de obras.",
        image: "/imgs/7kva.png",
        specs: {
            Mensal: "R$ 2.000/unit",
        
        },
        price: "R$200/dia"
    }, {
        id: 13,
        name: "Plataforma",
        description: "Plataforma para elevação de materiais e pessoas em obras.",
        image: "/imgs/plataforma andaime.png",
        specs: {
            Mensal: "R$2.000/unit",
         
        },
        price: "R$ 1,00/dia"
    }, {
        id: 15,
        name: "Placa Vibratoria",
        description: "Compactação de solo para fundações e pavimentação.",
        image: "/imgs/placa vibratoria.png",
        specs: {
            Mensal: "R$900/unit ",
           
        },
        price: "R$ 150/dia"
    }, {
        id: 16,
        name: "Vibrador de Concreto",
        description: "Compactação de concreto em fundações e estruturas.",
        image: "/imgs/concreto.png",
        specs: {
            Mensal: "R$350,00/unit",
        
        },
        price: "R$ 100/dia"
    }, {
        id: 17,
        name: "Rodas para Andaimes",
        description: "Rodas para movimentação de andaimes.",
        image: "/imgs/rodas para andaimes.png",
        specs: {
            Mensal: "R$250/unit",
    
        },
        price: "R$1,00/dia"
    }, {
        id: 18,
        name: "Guarda Corpo",
        description: " Suporte para proteção de áreas de trabalho.",
        image: "/imgs/guardacorpo_1.png",
        specs: {
            Mensal: "R$30/unit",
        },
        price: "R$ 1,00/dia"
    }, {
        id: 19,
        name: "Peneira Eletrica",
        description: "Peneiramento de materiais para construção.",
        image: "/imgs/peneira eletrica.png",
        specs: {
            Mensal: "R$450/unit",
    
        },
        price: "R$ 150/dia"
    }, {
        id: 20,
        name: "Motor bomba",
        description: "Bombeamento de água para canteiros de obras.",
        image: "/imgs/motor bomba.png",
        specs: {
            Mensal: "R$600/unit",
     
        },
        price: "R$ 100/dia"
    }, ];

    // ------------------- SELEÇÃO DE ELEMENTOS DO DOM -------------------
    const machineContainer = document.getElementById('machineContainer');
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    const contactForm = document.getElementById('contactForm');
    const header = document.querySelector('header');
    const phoneLink = document.querySelector('.phone-link span');
    const yearElement = document.querySelector('#current-year');


    // ------------------- FUNÇÕES -------------------

    // Carrega as máquinas na página dinamicamente
    function loadMachines() {
        if (!machineContainer) return;
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
                    <a href="https://wa.me/${phoneNumber}?text=Olá,%20gostaria%20de%20alugar%20a%20máquina%20${encodeURIComponent(machine.name)}%20pelo%20valor%20de%20${encodeURIComponent(machine.price)}" 
                       class="btn whatsapp-btn" target="_blank">
                        <i class="fab fa-whatsapp"></i> Alugar agora
                    </a>
                </div>
            </div>
        `).join('');
    }

    // Inicializa o mapa Leaflet
    function initMap() {
        if (!document.getElementById('map')) return;
        const location = { lat: -6.0025, lng: -40.2943 };
        const map = L.map('map').setView([location.lat, location.lng], 15);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([location.lat, location.lng]).addTo(map)
            .bindPopup(`
                <b>ChagasLoc</b><br>
                R. Francisco de Assis Santana de Sousa, 225<br>
                Tauá-CE, 63660-000
            `)
            .openPopup();
    }

    // Adiciona classe para animar elementos ao rolar a página
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.hero-content, .hero-image, .machine-card, .feature-item, #contact, #location');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };

    // ------------------- EVENT LISTENERS -------------------

    // Menu mobile: abrir/fechar
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('show');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Scroll suave para links internos e fechar menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.getAttribute('href') === '#') return;
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste de 80px para o header
                    behavior: 'smooth'
                });
                
                // Fecha o menu mobile se estiver aberto
                if (navMenu && navMenu.classList.contains('show')) {
                    mobileMenuBtn.classList.remove('active');
                    navMenu.classList.remove('show');
                    document.body.classList.remove('no-scroll');
                }
            }
        });
    });

    // Efeitos de scroll (header e animações)
    window.addEventListener('scroll', function() {
        // Efeito de scroll no header
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        // Ativar animações
        animateOnScroll();
    });

    // Envio do formulário de contato
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: this.name.value,
                email: this.email.value,
                phone: this.phone.value,
                subject: this.subject.value,
                message: this.message.value
            };
            
            // Simulação de envio para um backend
            console.log('Dados do formulário para envio:', formData);
            alert('Mensagem enviada com sucesso! (Esta é uma demonstração)');
            this.reset();
            
            /* CÓDIGO REAL DE ENVIO (EXEMPLO):
            fetch('/server/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
            });
            */
        });
    }
    
    // ------------------- INICIALIZAÇÕES -------------------

    // Atualiza o número de telefone no header
    if (phoneLink) {
        phoneLink.textContent = formattedPhoneNumber;
    }

    // Atualiza o ano no footer
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Carrega as máquinas e o mapa
    loadMachines();
    initMap();
    
    // Roda a animação uma vez no carregamento inicial da página
    animateOnScroll();
});