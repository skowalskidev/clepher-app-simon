'use client'

import { useRouter } from "next/navigation";
import Table from "@/components/DataDisplay/table/Table";
import { HeadCell } from "@/components/DataDisplay/table/Head";
import { Data, createHeadCell, createData, Actions } from "@/utils/table";

export default function Home() {
  const router = useRouter();

  function onRowClick(postId: number) {
    router.push(`/${postId}/edit`);
  }

  const headCells: readonly HeadCell<Data>[] = [
    createHeadCell('name', false, true, 'Name'),
    createHeadCell('engagedUnique', false, false, 'Engaged / Unique'),
    createHeadCell('acquired', true, false, 'Acquired'),
    createHeadCell('conversion', true, false, 'Conversion'),
    createHeadCell('actions', true, false, 'Action', true),
  ];

  const rows: Data[] = [
    createData(1, 'Optimization', '5000 / 2500', 3000, 50, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
    createData(2, 'Operations', '2000 / 1000', 800, 25, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
    createData(3, 'Accountability', '7000 / 3500', 4500, 60, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
    createData(4, 'Configuration', '3500 / 2000', 1800, 30, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
    createData(5, 'Paradigm', '8000 / 4000', 5500, 70, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
    createData(6, 'Directives', '4500 / 2800', 2300, 45, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
    createData(7, 'Implementation', '6000 / 3000', 3500, 55, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
    createData(8, 'Research', '6500 / 3500', 4000, 65, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
  ];

  return (
    <main className="flex min-h-full flex-col items-center justify-between p-6">
      <Table<Data> onRowClick={onRowClick} headCells={headCells} rows={rows} orderByInitial="conversion" />
    </main>
  );
}
