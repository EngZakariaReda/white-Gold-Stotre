const WHATSAPP_NUMBER = "201027909599";

export const sendMessageViaWattsApp = (message) => {
    const url = 
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
};