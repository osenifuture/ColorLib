const NameCard = ({ user }) => {
  const { name, username, email, phone, address, website } = user;
  return (
    <div className="name-card">
      <h3>NAME: {name}</h3>
      <p>USERNAME: {username}</p>
      <p>E-MAIL: {email}</p>
      <p>PHONE: {phone}</p>
      <p>WEBSITE: {website}</p>
      <p>
        ADDRESS: {address.street} {address.suite} {address.geo.lng}
        {address.geo.lat}
      </p>
    </div>
  );
};

export default NameCard;
