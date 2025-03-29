import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const people = [
    {
      name: "Dwayne Johnson",
      role: "CEO",
      imageUrl: "https://ew.com/thmb/jnjx0Atc6M2I6Eq1ZaDuy67mUpM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dwayne-johnson-2000-d709904850c24cbea12fdaa04dd8d286.jpg",
    },
    {
      name: "Mama Blessing",
      role: "CTO",
      imageUrl: "https://res.cloudinary.com/duatoix31/image/upload/v1743227254/IMG_20240111_104607_208_yl99h5.jpg",
    },
    {
        name: "Tax Devi",
        role: "CFO",
        imageUrl: "https://imageio.forbes.com/specials-images/imageserve/5fce95ad4dc3b264a7967959/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&height=416&width=416&fit=bounds",
      },
    {
      name: "Narendra Modi",
      role: "COO",
      imageUrl: "http://image.cnbcfm.com/api/v1/image/105620027-1544510793193gettyimages-948028916.jpeg?v=1599100867&w=800&h=600&ffmt=webp",
    },
    
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
      
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="size-16 rounded-full object-cover" />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center lg:fixed lg:bottom-10 lg:right-10">
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-500 hover:bg-red-700 text-white rounded-lg shadow-md text-lg font-semibold transition"
          >
            Logout
          </button>
      </div>
    </div>
   </div>     
  );
};

export default Home;
