import React from "react";
import Header from "../components/Header";
import "../styles/Home.scss";
import Logo from "../assets/logo.svg";
import Form from "../components/Form";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

export type NavMenuItems = {
  heading: string;
  url: string;
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
  const navMenuItems: NavMenuItems[] = [
    { heading: "Home", url: "http://www.home.com" },
    { heading: "Blog", url: "http://www.blog.com" },
  ];

  const formData: FormProps = {
    formAction: (event) => event.preventDefault(),
    formTitle: "Plaats een blog bericht",
    berichtnaamLabel: "Berichtnaam",
    berichtnaamPlaceholder: "Geen title",
    categoryLabel: "Categorie",
    categoryPlaceholder: "Geen categorie",
    categoryOptions: [
      { id: 1, label: "Geen categorie", value: "Geen categorie" },
      { id: 2, label: "Tech", value: "1" },
      { id: 3, label: "Business", value: "saab" },
      { id: 4, label: "Agro", value: "mercedes" },
      { id: 5, label: "Economic", value: "audi" },
    ],
    headerAfbeeldingLabel: "Header afbeelding",
    berichtLabel: "Bericht",
    submitButtonText: "Submit",
  };

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
