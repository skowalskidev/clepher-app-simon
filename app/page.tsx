import StoreProvider from "./StoreProvider";
import Table from "@/components/Table"

export default function Home() {
  return (
    <StoreProvider>
      <main className="flex min-h-full flex-col items-center justify-between p-6">
        <Table />
      </main>
    </StoreProvider>
  );
}
