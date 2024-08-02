export default function Banner() {
  return (
    <div
      className="py-3 text-center"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(252, 214, 255, 0.7), rgba(41, 216, 255, 0.7), rgba(255, 253, 128, 0.7), rgba(248, 154, 191, 0.7), rgba(252, 214, 255, 0.7))'
      }}
    >
      <div className="container relative">
        <p>
          <span className="font-medium hidden sm:inline"> 
            Introducting a completely redesigned interface -{' '}
          </span>
        <a href="#" className="underline underline-offset-4 font-medium">Explore the demo</a>

        </p>
      </div>
    </div>
  );
}
