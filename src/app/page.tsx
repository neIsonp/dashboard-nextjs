import { Chart } from "@/components/Chart";
import { Sales } from "@/components/sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EuroIcon, Package2, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total de vendas
              </CardTitle>
              <EuroIcon />
            </div>
            <CardDescription>Total de vendas em 10 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">8000€</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Novos clientes
              </CardTitle>
              <Users />
            </div>
            <CardDescription>
              Novos clientes nos últimos 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">297</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Pedidos hoje
              </CardTitle>
              <Package2 />
            </div>
            <CardDescription>Total de pedidos feitos hoje</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">39</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total de pedidos
              </CardTitle>
              <EuroIcon />
            </div>
            <CardDescription>Total de pedidos em 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">120</p>
          </CardContent>
        </Card>
      </section>
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <Chart />
        <Sales />
      </section>
    </main>
  );
}
