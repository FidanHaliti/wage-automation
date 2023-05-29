import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div className="error-modal">
      <div className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0" onClick={props.onConfirm}></div>
      <Card className="fidan">
        <header className="bg-red-700 p-4 rounded-t-md ">
          <h2 className="text-center p-2 text-xl text-white">
            {props.error.title}
          </h2>
        </header>
        <section className="p-4">{props.error.message}</section>
        <footer className="p-4 flex justify-end">
          <Button className="w-32"onClick={props.onConfirm}>Submit</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
