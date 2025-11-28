document.addEventListener("DOMContentLoaded", () => {
    const hitboxNorte = document.getElementById("hitboxNorte");
    const leftPanel = document.getElementById("leftPanel");
    const previewImage = document.getElementById("previewImage");
    const mapContainer = document.querySelector('.map-container');

    let panelOpen = false;

    hitboxNorte.addEventListener("click", (event) => {
        event.stopPropagation();

        panelOpen = true;
        previewImage.src = "/public/images/norte.png";

        // Animação do painel diagonal MAIOR (45vw)
        gsap.to(leftPanel, {
            width: "45vw", // Aumentado de 35vw para 45vw
            duration: 0.6,
            ease: "power3.out"
        });

        // Animação do mapa - move um pouco mais
        gsap.to(mapContainer, {
            x: "10%", // Aumentado de 8% para 10%
            scale: 0.95,
            duration: 0.6,
            ease: "power3.out"
        });

        // Animação da imagem SEM bordas
        gsap.fromTo(previewImage,
            { 
                opacity: 0, 
                x: -50,
                /* Garante que não tenha bordas */
                boxShadow: "none",
                border: "none",
                outline: "none"
            },
            { 
                opacity: 1, 
                x: 0, 
                duration: 0.6, 
                ease: "power3.out", 
                delay: 0.2,
                /* Mantém sem bordas */
                boxShadow: "none",
                border: "none",
                outline: "none"
            }
        );
    });

    leftPanel.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    document.addEventListener("click", () => {
        if (!panelOpen) return;

        panelOpen = false;

        // Fechar painel
        gsap.to(leftPanel, {
            width: "0vw",
            duration: 0.4,
            ease: "power3.inOut"
        });

        // Resetar mapa
        gsap.to(mapContainer, {
            x: "0%",
            scale: 1,
            duration: 0.4,
            ease: "power3.inOut"
        });
    });
});