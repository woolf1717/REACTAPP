import "../src/app/globals.css";

export default function LoginForm() {
  return (
    <>
      <form className="bg-blue-950 mt-9 p-2">
        <label>Login:</label>
        <br />
        <input className="h-4 w-36" type="text" />
        <label>Password:</label>
        <br />
        <input className="h-4 w-36" type="text" name="fname" />
      </form>
    </>
  );
}
