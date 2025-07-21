export default function Navigation() {
  return (
    <div className="max-w-screen-xl mx-auto items-center flex p-3 cursor-pointer backdrop-blur rounded-lg navbar">
      <p className="block text-xl">Angel Ashley Kisaakye Magala</p>
      <ul className="flex gap-3.5 mr-6 font-medium navi">
        <li className="block navi-item"><a href="#">About</a></li>
        <li className="block navi-item"><a href="#">Experience</a></li>
        <li className="block navi-item"><a href="#">Projects</a></li>
        <li className="block navi-item"><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}