import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section>
      <Button
        isActive={active === "main"}
        onUserClicked={() => onChange("main")}
      >
        Main
      </Button>
      <Button
        isActive={active === "feedback"}
        onUserClicked={() => onChange("feedback")}
      >
        CallBack
      </Button>
    </section>
  );
}
