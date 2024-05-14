import Logo from "../assets/logo.svg"

export const Header = () => {
  return (
    <header className="flex flex-1 py-20 p-x-[0.625rem] justify-center items-center bg-base-gray-700">
      <div className="flex items-center justify-center gap-3">
        <figure>
          <img src={Logo} alt="rocket-logo" />
        </figure>
      </div>
    </header>
  );
};
