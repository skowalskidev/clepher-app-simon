'use client'

import { useRouter } from "next/navigation";
import StoreProvider from "./StoreProvider";
import Table from "@/components/table/Table";
import { HeadCell } from "@/components/table/Head";

interface Data {
  id: number;
  name: string;
  engagedUnique: string;
  acquired: number;
  conversion: number;
  actions: Actions[],
}

enum Actions {
  DELETE = 'DELETE',
  EDIT = 'EDIT',
  RENAME = 'RENAME',
}

function createData(
  id: number,
  name: string,
  engagedUnique: string,
  acquired: number,
  conversion: number,
  actions: Actions[],
): Data {
  return {
    id,
    name,
    engagedUnique,
    acquired,
    conversion,
    actions,
  };
}

const rows = [
  createData(1, 'Optimization', '5000 / 2500', 3000, 50, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
  createData(2, 'Operations', '2000 / 1000', 800, 25, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
  createData(3, 'Accountability', '7000 / 3500', 4500, 60, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
  createData(4, 'Configuration', '3500 / 2000', 1800, 30, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
  createData(5, 'Paradigm', '8000 / 4000', 5500, 70, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
  createData(6, 'Directives', '4500 / 2800', 2300, 45, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
  createData(7, 'Implementation', '6000 / 3000', 3500, 55, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
  createData(8, 'Research', '6500 / 3500', 4000, 65, [Actions.EDIT, Actions.RENAME, Actions.DELETE]),
];

export default function Home() {
  const router = useRouter();
  function onRowClick(postId: number) {
    router.push(`/${postId}/edit`);
  }

  const headCells: readonly HeadCell<Data>[] = [
    {
      // @ts-ignore
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      // @ts-ignore
      id: 'engagedUnique',
      numeric: false,
      disablePadding: false,
      label: 'Engaged / Unique',
    },
    {
      // @ts-ignore
      id: 'acquired',
      numeric: true,
      disablePadding: false,
      label: 'Acquired',
    },
    {
      // @ts-ignore
      id: 'conversion',
      numeric: true,
      disablePadding: false,
      label: 'Conversion',
    },
    {
      // @ts-ignore
      id: 'actions',
      numeric: true,
      disablePadding: false,
      label: 'Action',
      disableSort: true,
    },
  ];

  return (
    <StoreProvider>
      <main className="flex min-h-full flex-col items-center justify-between p-6">
        <Table<Data> onRowClick={onRowClick} headCells={headCells} rows={rows} />
      </main>
    </StoreProvider>
  );
}
