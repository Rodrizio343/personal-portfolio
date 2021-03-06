import { Helmet } from "react-helmet";

export default function Title({ title }) {
  return (
    <Helmet>
      <title>{title} | Rodrigo E. Martínez</title>
    </Helmet>
  );
}
