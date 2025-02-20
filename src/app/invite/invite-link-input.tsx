import { IconButton } from "@/components/IconButton/IconButton";
import { InputRoot, InputIcon, InputField } from "@/components/Input/Input";
import { Link, Copy } from "lucide-react";

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={"http://localhost:3000/invite"} />

      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
