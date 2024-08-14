import Navbar from "../../components/Header/Navbar";
import { Main } from "../../components/Main/Main";
import { useState } from "react";
import ModalLogin from "../../components/modal/Modal";
import ModalForm from "../../components/modal/ModalForm";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handModalForm = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        setOpenForm(true);
      }, 2000);
    }
  };
  return (
    <>
      <Navbar handleOpen={handleOpen} />
      <ModalLogin
        handleOpen={handleOpen}
        open={open}
        handModalForm={handModalForm}
      />

      <ModalForm open={openForm} />

      <Main />
    </>
  );
}
