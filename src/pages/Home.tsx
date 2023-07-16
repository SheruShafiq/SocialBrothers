import React, { useEffect } from "react";
import Header from "../components/Header";
import "../styles/Home.scss";
import Logo from "../assets/logo.svg";
import Form from "../components/Form";
import Posts from "../components/PostsComponent";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";

export type NavMenuItems = {
  heading: string;
  url: string;
  active: boolean;
};

export type CategoryOption = {
  id: number;
  label: string;
  value: string;
};

export type FormProps = {
  formAction: (event: any) => void;
  formTitle: string;
  berichtnaamLabel: string;
  berichtnaamPlaceholder: string;
  categoryLabel: string;
  categoryPlaceholder: string;
  categoryOptions: CategoryOption[];
  headerAfbeeldingLabel: string;
  berichtLabel: string;
  submitButtonText: string;
};

export type Props = {
  logo: string;
  navMenuItems: NavMenuItems[];
};

export default function Home() {
  const [navMenuItems, setNavMenuItems] = React.useState<NavMenuItems[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setNavMenuItems([
      { heading: "Home", url: "/", active: true },
      { heading: "Blog", url: "/Posts", active: false },
    ]);
  }, []);

  const formData: FormProps = {
    formAction: (event) => event.preventDefault(),
    formTitle: "Plaats een blog bericht",
    berichtnaamLabel: "Berichtnaam",
    berichtnaamPlaceholder: "Geen title",
    categoryLabel: "Categorie",
    categoryPlaceholder: "Geen categorie",
    categoryOptions: [
      { id: 1, label: "Tech", value: "1" },
      { id: 2, label: "Business", value: "2" },
      { id: 3, label: "Agro", value: "3" },
      { id: 4, label: "Economic", value: "4" },
    ],
    headerAfbeeldingLabel: "Header afbeelding",
    berichtLabel: "Bericht",
    submitButtonText: "Bericht Aanmaken",
  };
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setNavMenuItems([
        { heading: "Home", url: "/", active: true },
        { heading: "Blog", url: "/Posts", active: false },
      ]);
    } else if (location.pathname === "/Posts") {
      setNavMenuItems([
        { heading: "Home", url: "/", active: false },
        { heading: "Blog", url: "/Posts", active: true },
      ]);
    } else {
      navigate("/");
    }
  }, [location]);
  return (
    <div id="Parent">
      <Header logo={Logo} navMenuItems={navMenuItems} />
      <div id="content">
        <Form {...formData} />
        <Posts />
      </div>
      <Footer />
    </div>
  );
}
