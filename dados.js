const produtos = [
    {
        id: 1,
        nome: "Echo Dot 5ª Geração",
        categoria: "smart-speakers",
        preco: 139.99,
        preco_antigo: 299.00,
        rating: 4.8,
        avaliacoes: 1247,
        em_estoque: true,
        imagens: ["imagens/img1.png", "imagens/img2.png", "imagens/img3.png", "imagens/img4.png"],
        descricao: "Smart speaker com display LED e Alexa integrada. Som premium e controle por voz.",
        especificacoes: {
            modelo: "Echo Dot 5G",
            display: "LED",
            assistente: "Alexa",
            conexao: "Wi-Fi + Bluetooth"
        }
    },
    {
        id: 2,
        nome: "Echo Show 8",
        categoria: "smart-speakers",
        preco: 289.99,
        preco_antigo: 499.00,
        rating: 4.7,
        avaliacoes: 892,
        em_estoque: true,
        imagens: ["imagens/echo-show-1.png"],
        descricao: "Smart display com tela HD de 8 polegadas e Alexa integrada.",
        especificacoes: {
            modelo: "Echo Show 8",
            tela: "8 polegadas HD",
            assistente: "Alexa",
            conexao: "Wi-Fi + Bluetooth"
        }
    },
    {
        id: 3,
        nome: "Echo Pop",
        categoria: "smart-speakers",
        preco: 89.99,
        preco_antigo: 149.00,
        rating: 4.5,
        avaliacoes: 534,
        em_estoque: true,
        imagens: ["imagens/echo-pop-1.png"],
        descricao: "Smart speaker compacto com Alexa integrada. Ideal para quartos e espaços pequenos.",
        especificacoes: {
            modelo: "Echo Pop",
            assistente: "Alexa",
            conexao: "Wi-Fi + Bluetooth"
        }
    },
    {
        id: 4,
        nome: "AirPods Pro 2",
        categoria: "fones",
        preco: 189.99,
        preco_antigo: 269.00,
        rating: 4.9,
        avaliacoes: 2103,
        em_estoque: true,
        imagens: ["imagens/airpods-1.png"],
        descricao: "Cancelamento de ruído ativo, som espacial e resistência à água.",
        especificacoes: {
            modelo: "AirPods Pro 2",
            cancelamento: "Ativo",
            resistencia: "IPX4",
            bateria: "6 horas"
        }
    },
    {
        id: 5,
        nome: "Galaxy Buds FE",
        categoria: "fones",
        preco: 79.99,
        preco_antigo: 129.00,
        rating: 4.4,
        avaliacoes: 678,
        em_estoque: true,
        imagens: ["imagens/galaxy-buds-1.png"],
        descricao: "Fones com som equilibrado e design ergonômico.",
        especificacoes: {
            modelo: "Galaxy Buds FE",
            resistencia: "IPX2",
            bateria: "8 horas"
        }
    },
    {
        id: 6,
        nome: "Apple Watch SE",
        categoria: "smartwatches",
        preco: 199.99,
        preco_antigo: 299.00,
        rating: 4.8,
        avaliacoes: 1567,
        em_estoque: true,
        imagens: ["imagens/apple-watch-1.png"],
        descricao: "Smartwatch com tela Retina, GPS e monitoramento de saúde.",
        especificacoes: {
            modelo: "Apple Watch SE",
            tela: "Retina",
            gps: "Sim",
            resistencia: "50m"
        }
    },
    {
        id: 7,
        nome: "Galaxy Watch 6",
        categoria: "smartwatches",
        preco: 149.99,
        preco_antigo: 229.00,
        rating: 4.6,
        avaliacoes: 987,
        em_estoque: true,
        imagens: ["imagens/galaxy-watch-1.png"],
        descricao: "Smartwatch com monitoramento de sono, atividades e design premium.",
        especificacoes: {
            modelo: "Galaxy Watch 6",
            tela: "Super AMOLED",
            resistencia: "50m",
            bateria: "40 horas"
        }
    },
    {
        id: 8,
        nome: "Power Bank 10000mAh",
        categoria: "acessorios",
        preco: 49.99,
        preco_antigo: 79.00,
        rating: 4.3,
        avaliacoes: 432,
        em_estoque: true,
        imagens: ["imagens/powerbank-1.png"],
        descricao: "Carregador portátil com duas saídas USB e carga rápida.",
        especificacoes: {
            capacidade: "10000mAh",
            saidas: "USB-A x2, USB-C",
            carga_rapida: "Sim"
        }
    },
    {
        id: 9,
        nome: "Carregador Rápido 20W",
        categoria: "acessorios",
        preco: 29.99,
        preco_antigo: 49.00,
        rating: 4.2,
        avaliacoes: 321,
        em_estoque: true,
        imagens: ["imagens/carregador-1.png"],
        descricao: "Carregador USB-C com tecnologia Power Delivery 20W.",
        especificacoes: {
            potencia: "20W",
            entrada: "USB-C",
            saida: "USB-C"
        }
    },

    {
        id: 10,
        nome: "Liquidificador Xtreme Mix",
        categoria: "eletroportateis",
        preco: 549.90,
        preco_antigo: 699.00,
        rating: 4.9,
        avaliacoes: 856,
        em_estoque: true,
        imagens: ["imagens/liquidificador-xtreme-mix.png"],
        descricao: "Liquidificador com motor reversível de 1500W, lâmina Titanium Blade e jarra de vidro.",
        especificacoes: {
            potencia: "1500W",
            capacidade: "1,5L",
            material: "Vidro",
            funcoes: "Reversível, 10 velocidades"
        }
    },
    {
        id: 11,
        nome: "Air Fryer Oven 12L",
        categoria: "eletroportateis",
        preco: 459.90,
        preco_antigo: 599.00,
        rating: 4.8,
        avaliacoes: 734,
        em_estoque: true,
        imagens: ["imagens/air-fryer-oven-12l.png"],
        descricao: "Fritadeira elétrica 3 em 1 com capacidade de 12L e espeto giratório. Painel digital.",
        especificacoes: {
            capacidade: "12L",
            potencia: "1500W",
            funcoes: "Fritar, Assar, Grelhar",
            painel: "Digital"
        }
    },
    {
        id: 12,
        nome: "Air Fryer Oven 4,8L",
        categoria: "eletroportateis",
        preco: 359.90,
        preco_antigo: 499.00,
        rating: 4.7,
        avaliacoes: 612,
        em_estoque: true,
        imagens: ["imagens/air-fryer-oven-48l.png"],
        descricao: "Fritadeira 2 em 1 com design moderno em inox, painel touch screen e potência de 1500W.",
        especificacoes: {
            capacidade: "4,8L",
            potencia: "1500W",
            painel: "Touch Screen",
            cor: "Inox"
        }
    },
    {
        id: 13,
        nome: "Air Fryer 4,6L",
        categoria: "eletroportateis",
        preco: 299.90,
        preco_antigo: 399.00,
        rating: 4.6,
        avaliacoes: 543,
        em_estoque: true,
        imagens: ["imagens/air-fryer-46l.png"],
        descricao: "Fritadeira compacta com controles analógicos, cesta antiaderente Easy Clean.",
        especificacoes: {
            capacidade: "4,6L",
            potencia: "1400W",
            controles: "Analógicos",
            cesta: "Antiaderente"
        }
    },
    {
        id: 14,
        nome: "Ferro a Vapor Compacto",
        categoria: "eletroportateis",
        preco: 89.90,
        preco_antigo: 129.00,
        rating: 4.4,
        avaliacoes: 398,
        em_estoque: true,
        imagens: ["imagens/ferro-vapor-compacto.png"],
        descricao: "Ferro compacto de 1200W com base antiaderente, 25 saídas de vapor e sistema anticalcário.",
        especificacoes: {
            potencia: "1200W",
            saidas_vapor: "25",
            reservatorio: "200ml",
            base: "Antiaderente"
        }
    },
    {
        id: 15,
        nome: "Ferro a Vapor com Nano Orifícios",
        categoria: "eletroportateis",
        preco: 94.90,
        preco_antigo: 139.00,
        rating: 4.5,
        avaliacoes: 421,
        em_estoque: true,
        imagens: ["imagens/ferro-vapor-nano.png"],
        descricao: "Ferro com tecnologia de nano orifícios que garante até 40% mais deslize.",
        especificacoes: {
            potencia: "1200W",
            tecnologia: "Nano Orifícios",
            reservatorio: "200ml",
            base: "Antiaderente"
        }
    },
    {
        id: 16,
        nome: "Máquina de Cortar Cabelo Fast Feed",
        categoria: "cuidados-pessoais",
        preco: 299.90,
        preco_antigo: 399.00,
        rating: 4.8,
        avaliacoes: 987,
        em_estoque: true,
        imagens: ["imagens/maquina-fast-feed.png"],
        descricao: "Máquina profissional com motor silencioso e ajuste de corte sem troca de pentes.",
        especificacoes: {
            motor: "Whisper Quiet",
            ajuste: "Infinito 0,1mm a 3mm",
            lâmina: "Aço",
            uso: "Profissional"
        }
    },
    {
        id: 17,
        nome: "Máquina de Cortar Cabelo Pro Power",
        categoria: "cuidados-pessoais",
        preco: 379.90,
        preco_antigo: 499.00,
        rating: 4.9,
        avaliacoes: 1123,
        em_estoque: true,
        imagens: ["imagens/maquina-pro-power.png"],
        descricao: "Máquina com motor de dupla oscilação e ajuste infinito da lâmina.",
        especificacoes: {
            motor: "Dupla Oscilação",
            ajuste: "Infinito",
            lâmina: "Aço",
            uso: "Profissional"
        }
    },
    {
        id: 18,
        nome: "Máquina de Cortar Cabelo Easter",
        categoria: "cuidados-pessoais",
        preco: 259.90,
        preco_antigo: 329.00,
        rating: 4.7,
        avaliacoes: 876,
        em_estoque: true,
        imagens: ["imagens/maquina-easter.png"],
        descricao: "Máquina potente com motor de 35W, ideal para cabelos grossos.",
        especificacoes: {
            motor: "35W",
            ajuste: "Infinito",
            lâmina: "Aço",
            uso: "Profissional"
        }
    },
    {
        id: 19,
        nome: "Aparador T-Finisher",
        categoria: "cuidados-pessoais",
        preco: 179.90,
        preco_antigo: 249.00,
        rating: 4.6,
        avaliacoes: 654,
        em_estoque: true,
        imagens: ["imagens/aparador-t-finisher.png"],
        descricao: "Aparador leve e compacto para finalizações, contornos e nuca precisos.",
        especificacoes: {
            design: "Ergonômico",
            lâmina: "Aço",
            uso: "Profissional",
            finalidade: "Contornos e Nuca"
        }
    },
    {
        id: 20,
        nome: "Máquina de Cortar Cabelo Soft Touch Reaper",
        categoria: "cuidados-pessoais",
        preco: 329.90,
        preco_antigo: 429.00,
        rating: 4.8,
        avaliacoes: 765,
        em_estoque: true,
        imagens: ["imagens/maquina-soft-touch.png"],
        descricao: "Máquina com revestimento Soft Touch e cabeças em titânio.",
        especificacoes: {
            revestimento: "Soft Touch",
            lâmina: "Titânio",
            troca_cabecas: "Rápida",
            uso: "Profissional"
        }
    },
    {
        id: 21,
        nome: "Máquina de Cortar Cabelo Model 10",
        categoria: "cuidados-pessoais",
        preco: 239.90,
        preco_antigo: 299.00,
        rating: 4.5,
        avaliacoes: 543,
        em_estoque: true,
        imagens: ["imagens/maquina-model-10.png"],
        descricao: "Máquina de design clássico e durável, ideal para uso profissional e doméstico.",
        especificacoes: {
            motor: "Profissional",
            lâmina: "Aço",
            uso: "Profissional/Doméstico"
        }
    },
    {
        id: 22,
        nome: "Liquidificador 400W",
        categoria: "eletroportateis",
        preco: 149.90,
        preco_antigo: 199.00,
        rating: 4.2,
        avaliacoes: 389,
        em_estoque: true,
        imagens: ["imagens/liquidificador-400w.png"],
        descricao: "Liquidificador com jarra de plástico, botões mecânicos e potência de 400W.",
        especificacoes: {
            potencia: "400W",
            capacidade: "1,5L",
            material: "Plástico",
            controles: "Mecânicos"
        }
    },
    {
        id: 23,
        nome: "Fritadeira Elétrica 3,2L",
        categoria: "eletroportateis",
        preco: 259.90,
        preco_antigo: 349.00,
        rating: 4.3,
        avaliacoes: 476,
        em_estoque: true,
        imagens: ["imagens/fritadeira-32l.png"],
        descricao: "Fritadeira compacta com cesta antiaderente e controles analógicos.",
        especificacoes: {
            capacidade: "3,2L",
            potencia: "1300W",
            controles: "Analógicos",
            cesta: "Antiaderente"
        }
    },
    {
        id: 24,
        nome: "Aspirador de Pó 1400W",
        categoria: "eletroportateis",
        preco: 199.90,
        preco_antigo: 279.00,
        rating: 4.4,
        avaliacoes: 521,
        em_estoque: true,
        imagens: ["imagens/aspirador-1400w.png"],
        descricao: "Aspirador compacto com motor potente de 1400W, design moderno e filtro lavável.",
        especificacoes: {
            potencia: "1400W",
            capacidade: "1,5L",
            filtro: "Lavável",
            design: "Compacto"
        }
    }
];
