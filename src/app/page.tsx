import { Button } from "@/components/Button/Button";
import { IconButton } from "@/components/IconButton/IconButton";
import { InputField, InputIcon, InputRoot } from "@/components/Input/Input";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Button>
        teste
        <ArrowRight />
      </Button>

      <IconButton>
        <ArrowRight />
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>

          <InputField />
        </InputRoot>
      </div>
    </main>
  );
}
