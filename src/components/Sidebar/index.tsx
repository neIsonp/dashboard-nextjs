import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import {
  Home,
  Package,
  Package2,
  PanelBottom,
  Settings,
  Settings2,
  ShoppingBag,
  Users,
} from "lucide-react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export const Sidebar = () => {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside
        className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r
       bg-background sm:flex"
      >
        <nav className="flex flex-col items-center gap-4 py-5 px-2">
          <TooltipProvider>
            <Link
              href="#"
              className="flex h-9 w-9 shrink-0 items-center justify-center
               bg-primary text-primary-foreground rounded-full"
            >
              <Package className="size-5" />
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground
               "
                >
                  <Home className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground
               "
                >
                  <ShoppingBag className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Pedidos</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground
               "
                >
                  <Package2 className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Produtos</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground
               "
                >
                  <Users className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Clientes</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground
               "
                >
                  <Settings2 className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Confgurações</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header
          className="sticky top-0 z-30 flex h-14 items-center px-4 border-b
        bg-background gap-4 sm:static sm:h-auto sm:bg-transparent sm:px-6"
        >
          <Sheet>
            <SheetTrigger>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom />
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-x" side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex size-10 bg-primary rounded-full text-lg items-center justify-center
                   text-primary-foreground mf:text-base"
                  prefetch={false}
                >
                  <Package className="size-5 transition-all" />
                  <span className="sr-only">Logo</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Home className="size-5 transition-all" />
                  <span>Home</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <ShoppingBag className="size-5 transition-all" />
                  <span>Pedidos</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Package2 className="size-5 transition-all" />
                  <span>Produtos</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Users className="size-5 transition-all" />
                  <span>Clientes</span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Settings2 className="size-5 transition-all" />
                  <span>Configurações</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
};
