const link = (path, text) => ({ path, text });
const links = [
  link("/", "About me"),
  link("/proyectos", "projects"),
  link("/habilidades", "skills"),
  link("/contacto", "Contact"),
];
export default links;
