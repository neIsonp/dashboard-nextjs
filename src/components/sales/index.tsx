import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Sales = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimos clientes
          </CardTitle>
          <Users className="ml-auto" />
        </div>
        <CardDescription>Últimos clientes nas ultimas 24 horas</CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="size-8">
            <AvatarImage src="https://www.github.com/neisonp.png" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Programador fullStack
            </p>
            <span className="text-[12px sm:text-sm]">
              nelsonponte37@gmail.com
            </span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="size-8">
            <AvatarImage src="https://www.github.com/neisonp.png" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Programador fullStack
            </p>
            <span className="text-[12px sm:text-sm]">
              nelsonponte37@gmail.com
            </span>
          </div>
        </article>{" "}
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="size-8">
            <AvatarImage src="https://www.github.com/neisonp.png" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Programador fullStack
            </p>
            <span className="text-[12px sm:text-sm]">
              nelsonponte37@gmail.com
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
};
