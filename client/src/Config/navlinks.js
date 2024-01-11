const link = (path, text) => ({ path, text });
const links = [
  link("/", "About me"),
  link("/projects", "projects"),
  link("/tech-stack", "tech stack"),
  link("/contact", "Contact"),
];
export default links;
