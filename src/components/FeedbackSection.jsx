import { useState } from "react";
import Button from "../components/Button/Button";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: true,
    reason: "help",
  });
  // const [name, setName] = useState("");
  // const [hasError, setHasError] = useState(true);
  // const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);

    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
    // setForm({
    //   name: event.target.value,
    //   hasError: event.target.value.trim().length === 0,
    //   reason: form.reason,
    // });
  }
  return (
    <section>
      <h3>Feedback</h3>
      <form>
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: !form.hasError ? null : "1px solid red",
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Reason</label>

        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Error</option>
          <option value="help">Need Help</option>
          <option value="suggest">Offer</option>
        </select>
        <pre>
          Name: {form.name}
          <br></br>
          Reason: {form.reason}
        </pre>

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Send
        </Button>
      </form>
    </section>
  );
}
