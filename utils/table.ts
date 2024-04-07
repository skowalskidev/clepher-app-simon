import { HeadCell } from "@/components/DataDisplay/table/Head";

export interface Data {
    id: number;
    name: string;
    engagedUnique: string;
    acquired: number;
    conversion: number;
    actions: Actions[],
}

export enum Actions {
    DELETE = 'DELETE',
    EDIT = 'EDIT',
    RENAME = 'RENAME',
}

export function createData(
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

export function createHeadCell<Data>(
    id: keyof Data,
    numeric: boolean,
    disablePadding: boolean,
    label: string,
    disableSort?: boolean
): HeadCell<Data> {
    return {
        id,
        numeric,
        disablePadding,
        label,
        disableSort,
    };
}