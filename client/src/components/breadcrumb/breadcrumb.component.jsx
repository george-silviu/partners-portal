import { useLocation } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

//material ui components
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

//styles
import { BreadcrumbContainer } from "./breadcrumb.styles";

const Breadcrumb = () => {
  const { auth } = useAuth();

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <BreadcrumbContainer>
      {location.pathname === "/dashboard" ? (
        <p style={{ color: "#9EE493" }}>
          Nice to see you again, {auth.username}! Here are some insights for
          you! You are {auth.role}
        </p>
      ) : (
        <Breadcrumbs aria-label="breadcrumb" style={{ color: "#9EE493" }}>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;

            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

            // Capitalize the first letter of each word in the path
            const capitalizedValue =
              value.charAt(0).toUpperCase() + value.slice(1);

            return last ? (
              <Link
                underline="hover"
                color="text.primary"
                href={to}
                aria-current="page"
                style={{ color: "#9EE493" }}
                key={to}
              >
                {capitalizedValue}
              </Link>
            ) : (
              <Link
                underline="hover"
                color="inherit"
                href={to}
                style={{ color: "#9EE493" }}
                key={to}
              >
                {capitalizedValue}
              </Link>
            );
          })}
        </Breadcrumbs>
      )}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
