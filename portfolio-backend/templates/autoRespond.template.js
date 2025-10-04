const autoRespondTemplate = ({ name }) => {
  return `
    <div style="
      font-family: 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(240, 240, 255, 0.7));
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      color: #333;
      max-width: 600px;
      margin: 0 auto;
    ">
      <h2 style="color: #4f46e5; margin-bottom: 16px;">Hello ${name}, 👋</h2>

      <p>
        Thanks for reaching out through my portfolio! I’ve received your message and will get back to you shortly.
      </p>

      <p style="margin-top: 16px;">
        Meanwhile, feel free to explore my work at my portfolio!
        <br/>
      </p>

      <hr style="margin-top: 28px; border: none; border-top: 1px solid #ddd;" />

      <p style="font-size: 0.9em; margin-top: 16px;">
        Best regards,<br/>
        <strong>Sanskar</strong> ✨
      </p>
    </div>
  `;
};

export default autoRespondTemplate;
