import React, { useState, useRef, useEffect } from "react";
import Hero from "../components/hero/Hero.js";
import { Navbar } from "../components/navbar/Navbar.js";
import { ContentBlocks } from "../components/contentBlocks/index.js";

import { PrintOnDemand } from "../components/printOnDemand/PrintOnDemand.js";
import { GraphicsPackages } from "../components/graphicsPackages/GraphicsPackages.js";
import { Footer } from "../components/footer/Footer";
import Contact from "components/contact/index.js";
import Modal from "components/modal/index.js";
import {
  package1,
  package2,
  package3,
} from "components/graphicsPackages/data.js";

export default function Homepage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(package1);
  const contactRef = useRef(null);
  const graphicsRef = useRef(null);
  const [sectionTargets, setSectionTargets] = useState({
    contact: contactRef,
    graphics: graphicsRef,
  });
  const [interest, setInterest] = useState(""); // Graphics package 1, etc

  useEffect(() => {
    const hash = document.location.hash;
    if (hash === "#contact") scrollTo("contact", { block: "center" });
  }, []);

  function pauseScroll(paused) {
    if (paused) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }

  function scrollTo(target, options) {
    sectionTargets[target].current.scrollIntoView(options);
  }

  function getModalContent(name) {
    if (name === "Graphics Package 1") return package1;
    if (name === "Graphics Package 2") return package2;
    if (name === "Graphics Package 3") return package3;
  }

  function openModal(name) {
    setModalContent(getModalContent(name));
    pauseScroll(true);
    setModalOpen(true);
  }

  function closeModal() {
    pauseScroll(false);
    setModalOpen(false);
  }

  function handleOrder(name) {
    setInterest(name);
    pauseScroll(false);
    setModalOpen(false);
    scrollTo("contact", { behavior: "smooth", block: "center" });
  }

  return (
    <>
      <Navbar homepage scrollTo={scrollTo} />
      <Modal
        show={modalOpen}
        content={modalContent}
        handleOrder={handleOrder}
        closeModal={closeModal}
      />
      <Hero />
      <ContentBlocks scrollTo={scrollTo} />
      <PrintOnDemand />
      <GraphicsPackages refProp={graphicsRef} openModal={openModal} />
      <Contact interest={interest} refProp={contactRef} />
      <Footer />
    </>
  );
}
