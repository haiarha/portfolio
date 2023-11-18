import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Page from "../components/Page";

const headingStyles = {
  marginTop: 96,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Page>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link className="text-blue-800 hover:underline" to="/">
          Go home
        </Link>
        .
      </p>
    </Page>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
