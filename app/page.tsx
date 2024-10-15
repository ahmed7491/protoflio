import Header from "./_comps/layout/header";
import DefaultHome from "./_comps/layout/sections";

export default function Home() {
  const sections = [
    {
      key: "about",
      title: "About",
    },
    {
      key: "portfolio",
      title: "Portfolio",
    },
    {
      key: "resume",
      title: "Resume",
    },
  ];

  return (
    <div className="container">
      <Header items={sections} />
      <DefaultHome />
    </div>
  );
}
