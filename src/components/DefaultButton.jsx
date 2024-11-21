import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const DefaultButton = ({ title, path, eventName }) => {
  return (
    <Button
      variant="contained"
      onClick={eventName}
      className="!bg-inherit !shadow-md !w-3/12 !border-hidden !border-white/80 !p-0 max-md:!w-4/12 max-sm:!w-5/12"
    >
      <Link
        to={path}
        className="!font-Gandom !text-2xl !text-white/80 w-full p-2 backdrop-blur border rounded hover:bg-white/5 max-sm:!text-base"
      >
        {title}
      </Link>
    </Button>
  );
}

export default DefaultButton;
