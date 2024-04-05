import StoreProvider from "./StoreProvider";
import Table from "@/lib/features/table/Table"

export default function Home() {
  return (
    <StoreProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Table />
      </main>
    </StoreProvider>
  );
}
