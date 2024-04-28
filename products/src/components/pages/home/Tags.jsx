import { TagBrand } from "../../utils/data/TagBrand";

function Tags() {
  return (
    <a className="grid grid-cols-4 gap-4 mb-10" href="/">
      {TagBrand.map((t) => (
        <div key={t.nameTag} className="w-full">
          <img
            loading="lazy"
            className="max-h-[140px] max-w-[100%] rounded-lg md:max-h-[175px] md:max-w-[100%]"
            src={t.imageFood}
          ></img>
          <h3 className="text-md mt-2 font-bold">{t.nameTag}</h3>
        </div>
      ))}
    </a>
  );
}

export default Tags;
  