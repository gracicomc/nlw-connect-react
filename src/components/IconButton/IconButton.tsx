import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        "p-1.5 bg-gray-500 text-blue  rounded-md  cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900",
        className
      )}
      {...props}
    />
  );
}

//com a lib tailwind merge, é possível seguir estilizando com atributos className em outros elementos, fazendo assim a união do que foi passado no className onde o componente é chamado, impedindo que uma classe sobrescreva outra. Teria a possibildide de apenas passar como string, mas no caso de atriburos duplicados, como que o tailwind saberá qual usar? o Twmerge soluciona esse problema ao identificar qual classe está sendo modificada e substitui pela nova, não deixando existir classes duplicadas
//o uso é extrair o className das props e passar como elemento javascript dentro do className, chamando a função twMerge()
