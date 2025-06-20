document.addEventListener('DOMContentLoaded', function() {
    // Máquinas disponíveis para aluguel (pode ser substituído por dados de uma API)
    const machines = [
        {
            id: 1,
            name: "Betoneira",
            description: "Preparo de concreto em  sua obra de pequeno e médio porte.",
            image: "/imgs/betoneira.png",
            specs: { Mensal: "R$500/unit",
                     Quantidades: "5 unidades disponíveis",
  
            },
            price: "R$ 150/dia", 
        },
        {
            id: 2,
            name: "Andaimes de 1x1,0m e 1x1,5m",
            description: "Estrutura de suporte para construção e manutenção de edifícios.",
            image: "/imgs/andaimes 11m.png",
            specs: { Mensal: "R$0,80/unit",
                    Quantidades: "152 unidades disponíveis",
            
            },
            price: "R$ 1,30/dia"
        },
        {
            id: 3,
            name: "Escoras de 3,20 m e 4,60 m",
            description: " suporte temporário para estruturas durante a construção.",
            image: "/imgs/escoras.png",
            specs: {Mensal: "R$0,50/unit",
                    Quantidades: "140 unidades disponíveis",
  
            },
            price: "R$ 1,20/dia"
        },
        {
            id: 4,
            name: "Martelete 3,5kg Dewalt",
            description: "Escavações leves e demolições em obras de pequeno porte.",
            image: "/imgs/Dewalt 3,5kg.png",
            specs: { Mensal: "R$1.000/unit",
                     Quantidades: "01 unidades disponíveis",
            },
            price: "R$ 100/dia"
        },
        { id: 5,
            name: "Martelete 5kg Dewalt",
            description: "Escavações leves e demolições em obras de pequeno porte.",
            image: "/imgs/Dewalt 5kg.png",
            specs: { Mensal: "R$1.000/unit",
                     Quantidades: "01 unidades disponíveis",
            },
            price: "R$ 100/dia"

        },
        {
            id: 6,
            name: "Martelete 10kg Dewalt",
            description: "Escavações leves e demolições em obras de pequeno e médio porte.",
            image: "/imgs/Dewalt 10kg.png",
            specs: { Mensal: "R$1.600/unit",
                    Quantidades: "01 unidades disponíveis",
                
            },
            price: "R$150/dia"
        },
        
        {
            id: 7,
            name: "Martelete 16 Kg Vonder",
            description: " Escavações profundas e demolições em obras de grande porte.",
            image: "/imgs/nwvondder 16kg.png",
            specs: { Mensal: "R$ 1.600/unit",
                     Quantidades: "03 unidades disponíveis",
        
            },
            price: "R$ 150/dia"
        },
         {
            id: 8,
            name: "Martelete 30 Kg Dewalt",
            description: "Escavações profundas e demolições em obras de grande porte.",
            image: "/imgs/dewalt 30kgg.png",
            specs: { Mensal: "R$ 1.600/unit",
                     Quantidades: "01 unidades disponíveis",
            },
            price: "R$ 1.000/dia"
        },
         {
            id: 9,
            name: "Sapatas",
            description: "Estrutura de suporte para fundações de edifícios e estruturas.",
            image: "/imgs/sapatas.png",
            specs: { Mensal:"A definir",
                     Quantidades: "08 unidades disponíveis",
         
            },
            price:"R$0,80/dia"
        },
         {
            id: 10,
            name: "Compactador de Solo",
            description: "Compactação de solo para fundações e pavimentação.",
            image: "/imgs/compactador-loccom-min.png",
            specs: { Mensal: "R$ 3.500/unit",
                     Quantidades: "02 unidades disponíveis",
            },
            price: "R$200/dia"
        },
         {
            id: 11,
            name: "Gerador de 3KVA",
            description: "Fornecimento de energia elétrica para canteiros de obras.",
            image: "/imgs/Gerador 3,5 Kva-min.png",
            specs: { Mensal: "R$ 1.000/unit",
                     Quantidades: "01 unidades disponíveis",    

            },
            price: "R$ 100/dia"
        },
         {
            id: 12,
            name: "Gerador de 7KVA",
            description: "Fornecimento de energia elétrica para canteiros de obras.",
            image: "/imgs/7kva.png",
            specs: { Mensal:"R$ 2.000/unit",
                     Quantidades:"01 unidades disponíveis",
             
            },
            price: "R$200/dia"
        }, 
         {
            id: 13,
            name: "Plataforma",
            description: "Plataforma para elevação de materiais e pessoas em obras.",
            image: "/imgs/plataforma andaime.png",
            specs: {    Mensal:"R$2.000/unit" ,  
                 Quantidades:"01 unidades disponiveis" ,
            
            },
            price: "R$ 200/dia"
        },
         {
            id: 14,
            name: "Placa Vibratoria",
            description: "Compactação de solo para fundações e pavimentação.",
            image: "/imgs/placa vibratoria.png",
            specs: { Mensal : "R$0,80/unit " , 
                  Quantidades:"29 unidades disponiveis" ,
            },
            price: "R$ 1.50/dia"
        },
         {
            id: 15,
            name: "Vibrador de Concreto",
            description: "Compactação de concreto em fundações e estruturas.",
            image: "/imgs/concreto.png",
            specs: { Mensal : "R$1.600/unit" , 
                Quantidades:"29 unidades disponiveis" ,
            },
            price: "R$ 150/dia"
        },
         {
            id: 16,
            name: "Rodas para Andaimes",
            description: "Rodas para movimentação de andaimes.",
            image: "/imgs/rodas para andaimes.png",
            specs: { 
                    Mensal:"R$250/unit", 
                    Quantidade:"02 unidades disponíveis" ,
      
            },
            price: "R$1,00/dia"
        },
         {
            id: 17,
            name: "Guarda Corpo",
            description: " Suporte para proteção de áreas de trabalho.",
            image: "/imgs/guardacorpo_1.png",
            specs: {Mensal:"R$30/unit" , 
                Quantidade:"12 unidades disponíveis" ,
                
           
            },
            price: "R$ 1.00/dia"
        },
         {
            id: 18,
            name: "Peneira Eletrica",
            description: "Peneiramento de materiais para construção.",
            image: "/imgs/peneira eletrica.png",
            specs: { Mensal : "R$450/unit" , 
                Quantidaade:"02 unidades disponiveis"
                
            },
            price: "R$ 150/dia"
        },

          {
            id: 19,
            name: "Motor bomba",
            description: "Bombeamento de água para canteiros de obras.",
            image: "/imgs/motor bomba.png",
            specs: { Mensal : "R$450/unit" , 
                Quantidaade:"02 unidades disponiveis"
                
            },
            price: "R$ 150/dia"
        },
        
        
    ];

    // Elementos do DOM
    const machineContainer = document.getElementById('machineContainer');
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    const contactForm = document.getElementById('contactForm');
    const header = document.querySelector('header');


    // Botão do whatssapp que faz a chamada ao selecionar a máquina juntamente com o preço e a mensagem formulada
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
                <a href="https://wa.me/5588998183147?text=Olá,%20gostaria%20de%20alugar%20a%20máquina%20${encodeURIComponent(machine.name)}%20por%20${encodeURIComponent(machine.price)}" 
                   class="btn whatsapp-btn" target="_blank">
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