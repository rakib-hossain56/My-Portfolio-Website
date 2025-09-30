


  document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    document.getElementById("submitButton").innerText= "Message sending...";
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const res = await fetch("https://portfolio-backend-puce-two.vercel.app/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    document.getElementById("submitButton").innerText= "Send your message";
    alert(result.message);
   
  });







