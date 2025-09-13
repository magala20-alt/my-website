 const Mail= [
    {
        key: 1,
        name:'name',
        image:'/images/github.png',
        UrlOnClick:'#'
    },
     {
        key: 2,
        name:'gmail',
        image:'/images/gmail.png',
        UrlOnClick:'#'
    },
     
];
// Grid component using the Mail array
export default function MailGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 w-fit">
      {Mail.map((item) => (
        <a
          key={item.key}
          href={item.UrlOnClick}
          className="flex items-center justify-center p-3 duration-200  hover:scale-105"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-7 h-7 object-contain"
          />
        </a>
      ))}
    </div>
  );
}