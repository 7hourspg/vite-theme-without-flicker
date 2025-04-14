import {useThemeToggle} from "./hooks/use-theme";

export default function App() {
  const {theme, setTheme} = useThemeToggle();

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">Hello World</h1>

      <h2 className="text-2xl font-bold border border-gray-300 rounded-md p-2">
        Current Theme: {theme}
      </h2>

      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => setTheme("system")}
      >
        Toggle Theme (system)
      </button>

      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => setTheme("dark")}
      >
        Toggle Theme (dark)
      </button>

      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => setTheme("light")}
      >
        Toggle Theme (light)
      </button>
    </div>
  );
}
