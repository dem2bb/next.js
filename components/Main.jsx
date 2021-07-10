import Header from "./Header/Header";

export function Main({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
