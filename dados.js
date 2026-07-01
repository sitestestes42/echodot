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
        imagens: ["imagens/echo-dot-1.png", "imagens/echo-dot-2.png", "imagens/echo-dot-3.png", "imagens/echo-dot-4.png"],
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
    }
];
