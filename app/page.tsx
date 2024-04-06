'use client'

import { useRouter } from "next/navigation";
import StoreProvider from "./StoreProvider";
import Table from "@/components/Table"

export default function Home() {
  const router = useRouter();
  function onRowClick(postId: number) {
    console.log('onRowclick' + postId)
    router.push(`/${postId}/edit`);
  }

  return (
    <StoreProvider>
      <main className="flex min-h-full flex-col items-center justify-between p-6">
        <Table onRowClick={onRowClick} />
      </main>
    </StoreProvider>
  );
}
