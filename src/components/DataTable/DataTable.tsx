import React from 'react';
import {
  DataTable as CarbonDataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';

export interface TableRow {
  id: string;
  [key: string]: any;
}

export interface TableHeader {
  key: string;
  header: string;
}

export interface DataTableProps {
  /**
   * Table rows data
   */
  rows: TableRow[];
  /**
   * Table headers configuration
   */
  headers: TableHeader[];
  /**
   * Table title
   */
  title?: string;
  /**
   * Table description
   */
  description?: string;
  /**
   * Use zebra striping
   */
  useZebraStyles?: boolean;
  /**
   * Size of the table
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Sticky header
   */
  stickyHeader?: boolean;
  /**
   * Show borders
   */
  isSortable?: boolean;
}

/**
 * Carbon DataTable component wrapper
 */
export const DataTable: React.FC<DataTableProps> = ({
  rows,
  headers,
  title,
  description,
  useZebraStyles = false,
  size = 'md',
  stickyHeader = false,
  isSortable = false,
  ...props
}) => {
  return (
    <CarbonDataTable
      rows={rows}
      headers={headers}
      isSortable={isSortable}
      {...props}
    >
      {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
        <Table
          {...getTableProps()}
          useZebraStyles={useZebraStyles}
          size={size}
          stickyHeader={stickyHeader}
        >
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader {...getHeaderProps({ header })} key={header.key}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow {...getRowProps({ row })} key={row.id}>
                {row.cells.map((cell: any) => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </CarbonDataTable>
  );
}; 