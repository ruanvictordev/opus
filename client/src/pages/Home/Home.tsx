import Navbar from "../../components/Header/Navbar";
import { Main } from "../../components/Main/Main";
import { useState } from "react";
import ModalComponet from "../../components/modal/Modal";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Navbar handleOpen={handleOpen} />
      <ModalComponet handleOpen={handleOpen} open={open} />
      <Main />
    </>
  );
}
