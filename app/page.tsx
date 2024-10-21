import Header from "./_comps/layout/header";
import DefaultHome from "./_comps/layout/sections";
import Loading from "./_comps/layout/sections/loading";

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
      <Loading />
    </div>
  );
}
