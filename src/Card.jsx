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
  ];
  return (
    <>
      <div className="absolute inset-x-1/2 translate-y-1/2">
        {user.map((user) => {
          return (
            <div className="relative cursor-pointer" key={user.id}>
              <h2 className="absolute z-20 inline-block bg-stone-50/50 p-2 top-5 left-1 font-semibold">
                {user.city}
              </h2>
              <div className="z-10 ">
                <img
                  src={user.img}
                  alt={user.name}
                  className="rounded-lg max-w-md border-2 border-gray-500 h-3/4 "
                />
              </div>
              <span className="absolute z-20 bg-stone-50/50 top-96 left-3 text-4xl">
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
