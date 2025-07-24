function ContactCard({ email, phone }) {
  return (
    <div style={{ maxWidth: '400px', margin: '10px auto', padding: '16px', border: '1px solid #ddd', borderRadius: '8px', fontFamily: 'Arial, sans-serif' }}>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
}

export default ContactCard;