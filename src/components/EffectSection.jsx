import { useState } from "react";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
export default function EffectSection() {
  const [modal, setModal] = useState(false);
  function openModal() {
    setModal(true);
  }
  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Open the information</Button>

      <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          excepturi ut blanditiis quaerat aspernatur obcaecati accusamus,
          doloribus incidunt praesentium aliquam totam. Veniam sapiente, sequi
          eius nesciunt tenetur quos laborum velit?
        </p>
      </Modal>
    </section>
  );
}
