
import { Counter } from "@/lib/features/counter/Counter";
import { SiInternetcomputer } from "react-icons/si";
import StoreProvider from "./StoreProvider";
import Table from "@/lib/features/table/Table"

export default function Home() {
  return (
    <StoreProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <SiInternetcomputer />
        <Counter />
        <button className="btn btn-primary">Hello daisyUI!</button>
        <Table />
      </main>
    </StoreProvider>
  );
}
