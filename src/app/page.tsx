import AboutMeSection from "@/components/AboutMeSection";
import Footer from "@/components/Footer";
// import ArticlesSection from "./components/ArticlesSection";
import Hero from "@/components/Hero";
import PageWrapper from "@/components/PageWrapper";
import ProjectsSection from "@/components/ProjectsSection";
import SkillSection from "@/components/SkillSection";
import { Project } from "@/interfaces";

// get from sanity
// import { getProjects } from "@/sanity/sanity-utils/getProjects";
// import { getArticles } from "@/sanity/sanity-utils/getArticles";

const Home = async () => {
  // const articles = await getArticles();
  // const projects = await getProjects();

  const projects: Project[] = [
    {
      _id: "1",
      _createdAt: new Date(),
      title: "Pop Movie",
      translate: 57,
      description:
        "A fully functional e-commerce website built with React and Node.js.",
      slug: "ecommerce-website",
      poster: "/projects/pop-movie.png",
      source: "https://github.com/example/ecommerce",
      preview: "https://example.com/preview/ecommerce",
      images: [
        "https://example.com/images/ecommerce/1.jpg",
        "https://example.com/images/ecommerce/2.jpg",
        "https://example.com/images/ecommerce/3.jpg",
      ],
      technologies: [
        { name: "React", icon: "https://example.com/icons/react.png" },
        { name: "Node.js", icon: "https://example.com/icons/nodejs.png" },
        { name: "MongoDB", icon: "https://example.com/icons/mongodb.png" },
      ],
      type: "web",
      content: [
        {
          type: "text",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          type: "text",
          content:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        { type: "image", url: "https://example.com/content/images/1.jpg" },
      ],
    },
    {
      _id: "2",
      _createdAt: new Date(),
      title: "Mobile Task Manager App",
      translate: 62,
      description:
        "A mobile app to manage tasks efficiently, built with Flutter.",
      slug: "task-manager-app",
      poster: "/projects/shop-vista.png",
      source: "https://github.com/example/task-manager",
      preview: "https://example.com/preview/task-manager",
      images: [
        "https://example.com/images/task-manager/1.jpg",
        "https://example.com/images/task-manager/2.jpg",
        "https://example.com/images/task-manager/3.jpg",
      ],
      technologies: [
        { name: "Flutter", icon: "https://example.com/icons/flutter.png" },
        { name: "Firebase", icon: "https://example.com/icons/firebase.png" },
      ],
      type: "app",
      content: [
        {
          type: "text",
          content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        },
        {
          type: "text",
          content:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        },
        { type: "image", url: "https://example.com/content/images/2.jpg" },
      ],
    },
    {
      _id: "2",
      _createdAt: new Date(),
      title: "Mobile Task Manager App",
      translate: 62,
      description:
        "A mobile app to manage tasks efficiently, built with Flutter.",
      slug: "task-manager-app",
      poster: "/projects/zwitter.png",
      source: "https://github.com/example/task-manager",
      preview: "https://example.com/preview/task-manager",
      images: [
        "https://example.com/images/task-manager/1.jpg",
        "https://example.com/images/task-manager/2.jpg",
        "https://example.com/images/task-manager/3.jpg",
      ],
      technologies: [
        { name: "Flutter", icon: "https://example.com/icons/flutter.png" },
        { name: "Firebase", icon: "https://example.com/icons/firebase.png" },
      ],
      type: "app",
      content: [
        {
          type: "text",
          content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        },
        {
          type: "text",
          content:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        },
        { type: "image", url: "https://example.com/content/images/2.jpg" },
      ],
    },
  ];

  return (
    <PageWrapper>
      <Hero />
      <div className="md:py-14 py-4 opacity-100 transform-none max-w-7xl mx-auto px-3 ">
        <SkillSection />
      </div>
      <div className="bg-slate-800">
        <div className="md:py-14 py-4 max-w-7xl mx-auto px-3 ">
          <ProjectsSection projects={projects} />
        </div>
      </div>
      {/* <div className="md:py-14 py-4 max-w-7xl mx-auto px-3 ">
        <ArticlesSection articles={articles} />
      </div> */}
      <div className="w-full">
        <Footer />
      </div>
    </PageWrapper>
  );
};

export default Home;
