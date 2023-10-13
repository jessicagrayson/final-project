export function ImgWithCaption({ src }) {
  return (
    <div className="flex flex-col">
      <figure>
        <img className="object-scale-down w-auto rounded-lg h-96" src={src} />
      </figure>
    </div>
  );
}
