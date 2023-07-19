const Card = () => {
  const user = [
    {
      id: 0,
      name: "Pippo Franco",
      img: "https://images.mubicdn.net/images/cast_member/117685/cache-252408-1504509399/image-w856.jpg?size=800x",
      city: "Brindisi",
      age: "30",
      role: "full-stack",
      cv: {
        telephone: "00000000",
        email: "gianmarco.pesola@live.it",
        skills: "HTML, CSS, SCSS, JS, React, Tailwind, Typescript, Node.js ",
        education: "Develhope",
      },
    },
    {
      id: 0,
      name: "Pippo Franco",
      img: "https://www.veterinarimatera.it/wp-content/uploads/2021/03/cane-1.jpg",
      city: "Brindisi",
      age: "30",
      role: "full-stack",
      cv: {
        telephone: "00000000",
        email: "gianmarco.pesola@live.it",
        skills: "HTML, CSS, SCSS, JS, React, Tailwind, Typescript, Node.js ",
        education: "Develhope",
      },
    },
  ];
  return (
    <>
      <div className="absolute inset-x-1/2 flex items-center justify-center">
        {user.map((user) => {
          return (
            <div
              className="relative cursor-pointer drop-shadow-2xl top-0 left-0 h-96"
              key={user.id}
            >
              <h2 className="absolute z-20 inline-block bg-stone-50/50 p-2 top-5 left-1 font-semibold">
                {user.city}
              </h2>
              <div className="z-10">
                <img
                  src={user.img}
                  alt={user.name}
                  className="rounded-lg  border-2 border-gray-500  object-cover max-w-md min-h-300"
                />
              </div>
              <span className="absolute z-20 bg-stone-50 bottom-14 left-3 text-4xl">
                <span className="font-semibold">{user.name}</span>, {user.age}{" "}
                {user.role}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
