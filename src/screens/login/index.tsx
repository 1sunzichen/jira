import { FormEvent } from "react";
import { apiUrl } from "screens/project-list";

export const LoginScr = () => {
  const login = (username: string, password: string) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then(async (response: Response) => {
      if (response.ok) {
      }
    });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const u = (event.currentTarget.elements[0] as HTMLFormElement).value;
    const p = (event.currentTarget.elements[1] as HTMLFormElement).value;
    login(u, p);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input id={"username"} />
      </div>
      <div>
        <label htmlFor="password">用户名</label>
        <input id={"password"} type="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};
