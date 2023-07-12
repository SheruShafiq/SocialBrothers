import React from "react";
import Header from "../components/Header";
import "../styles/Home.scss";
import Logo from "../assets/logo.svg";
import Form from "../components/Form";

export type NavMenuItems = {
  heading: string;
  url: string;
};

export type FormProps = {
  formAction: string;
  formTitle: string;
  berichtnaamLabel: string;
  berichtnaamPlaceholder: string;
  categoryLabel: string;
  categoryPlaceholder: string;
  categoryOptions: { label: string; value: string }[];
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
    formAction: "/",
    formTitle: "Plaats een blog bericht",
    berichtnaamLabel: "Berichtnaam",
    berichtnaamPlaceholder: "Geen title",
    categoryLabel: "Categorie",
    categoryPlaceholder: "Geen categorie",
    categoryOptions: [
      { label: "Geen categorie", value: "Geen categorie" },
      { label: "Tech", value: "volvo" },
      { label: "Business", value: "saab" },
      { label: "Agro", value: "mercedes" },
      { label: "Economic", value: "audi" },
    ],
    headerAfbeeldingLabel: "Header afbeelding",
    berichtLabel: "Bericht",
    submitButtonText: "Submit",
  };
  return (
    <div id="Parent">
      <Header logo={Logo} navMenuItems={navMenuItems} />
      <Form {...formData} />
    </div>
  );
}
