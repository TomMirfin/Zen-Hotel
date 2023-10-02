function AccountDropDown() {
  const accountInfo = [
    { name: "John Doe", email: "johndoe@gmail.com", location: "London" },
  ];

  return (
    <div>
      {accountInfo.map((info) => (
        <ul key={info.email} className="p-2 ">
          <h1 className="font-bold">Account Details</h1>
          <h2 className="font-bold">Name:</h2>
          <li>{info.name}</li>
          <h2 className="font-bold">Email:</h2>
          <li>{info.email}</li>
          <h2 className="font-bold">Location:</h2>
          <li>{info.location}</li>
          <button className="bg-red border">LogOut</button>
        </ul>
      ))}
    </div>
  );
}

export default AccountDropDown;
