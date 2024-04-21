function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const {username , email} = event.target.elements;

    const usernameValue = username.value;
    const emailValue = email.value;

    if (!usernameValue.trim() || !emailValue.trim()) {
      alert("Please complete all fields");
      return;
    }

    event.target.reset();

    alert(`${username} Your form has been submitted successfully!`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" minLength="5" id="username" />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
