function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const userNameInput = event.target.elements.username;
    const username = userNameInput.value;
    event.target.reset();

    alert(`${username} Your form has been submitted successfully!`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" minLength="5" id="username" required/>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
        required
      />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Votre message ..."
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
