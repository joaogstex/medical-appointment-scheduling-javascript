const consultTypeSelect = document.getElementById("consult-type");
const priceInput = document.getElementById("price");

consultTypeSelect.addEventListener("change", () => {
  const consultType = consultTypeSelect.value;
  switch (consultType) {
    case "routine-consult":
      priceInput.value = "$ 100,00";
      break;
    case "specialized-consult":
      priceInput.value = "$ 200,00";
      break;
    case "surgery":
      priceInput.value = "$ 500,00";
      break;
      case "home-consult":
      priceInput.value = "$ 150,00";
      break;
      case "online-consult":
      priceInput.value = "$ 80,00";
      break;
      case "urgency-consult":
      priceInput.value = "$ 300,00";
      break;
    default:
      priceInput.value = "";
  }
});
          const form = document.querySelector('#appointment-form');
          form.addEventListener('submit', (event) => {
            event.preventDefault();
        
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const phone = document.querySelector('#phone').value;
            const doctor = document.querySelector('#doctor').value;
            const message = document.querySelector('#message').value;
        
            const subject = `Appointment scheduled with Dr. ${doctor}`;
            const body = `Hi ${name}, your appointment has been scheduled with Dr. ${doctor}.\n\nYour informations used for the appointment were:\n${message}`;
        
            const mailtoLink = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
          });

          