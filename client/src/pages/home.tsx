import AboutMe from "../components/aboutMe";
import Header from "../components/header";
import LandingPage from "../components/landingPage";
import ProjectsPage from "../components/projects";
import SocialSidebar from "../components/socialSidebar";
import ContactPage from "../components/contact";
const Home = () => {
  return (
    <div>
      <Header />
      <SocialSidebar />
      <main className="">
        <LandingPage />
        <AboutMe />
        <ProjectsPage />
        <ContactPage />
      </main>
    </div>
  );
};

export default Home;
