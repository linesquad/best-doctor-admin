function SupportInfo() {
  const supportData = [
    { id: 1, method: "Phone Number", info: "+999-556-0000" },
    { id: 2, method: "Email address", info: "Levanimesxia131313@gmail.com" },
    {
      id: 3,
      method: "LinkedIn",
      info: "https://www.linkedin.com/in/levani-mesxia-570803296/",
    },
    {
      id: 4,
      method: "Permanent Address",
      info: "Velit officia consequat duis",
    },
  ];
  // move this in lib file

  return (
    <div>
      <p className="text-black mb-[1rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum doloreorum
      </p>
      {supportData.map((item) => (
        <div key={item.id} className="mb-[1rem] lg:flex lg:gap-4">
          <p className="text-black font-bold">{item.method}:</p>
          <p className="break-words overflow-x-auto">{item.info}</p>
        </div>
      ))}
    </div>
  );
}

export default SupportInfo;
