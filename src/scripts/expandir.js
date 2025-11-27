document.addEventListener("DOMContentLoaded", () => {

    const hitboxNorte = document.getElementById("hitboxNorte");
    const leftPanel = document.getElementById("leftPanel");
    const previewImage = document.getElementById("previewImage");

    let panelOpen = false;

    hitboxNorte.addEventListener("click", (event) => {
        event.stopPropagation(); // impede clique global

        panelOpen = true;
        previewImage.src = "/public/images/norte.png";

        gsap.to(leftPanel, {
            width: "35vw",
            duration: 0.6,
            ease: "power3.out"
        });

        gsap.fromTo(previewImage,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power3.out", delay: 0.2 }
        );
    });

    leftPanel.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    
    document.addEventListener("click", () => {
        if (!panelOpen) return;

        panelOpen = false;

        gsap.to(leftPanel, {
            width: "0vw",
            duration: 0.4,
            ease: "power3.inOut"
        });
    });
});
