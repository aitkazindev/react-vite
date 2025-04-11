import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
export default function EffectSection() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
      setLoading(false);
    }
    fetchUsers();
  }, []);
  function openModal() {
    setModal(true);
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button style={{ marginBottom: "1rem" }} onClick={openModal}>
        Open the information
      </Button>

      <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          excepturi ut blanditiis quaerat aspernatur obcaecati accusamus,
          doloribus incidunt praesentium aliquam totam. Veniam sapiente, sequi
          eius nesciunt tenetur quos laborum velit?
        </p>
        <Button onClick={() => setModal(false)}>Close Modal</Button>
      </Modal>

      {loading && <p>Loading....</p>}
      {!loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
