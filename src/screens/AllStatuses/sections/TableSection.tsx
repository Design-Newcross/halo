import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "../../../components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../../../components/ui/pagination";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../components/ui/select";
import { Checkbox } from "../../../components/ui/checkbox";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ListPlusIcon } from "lucide-react";

export const TableSection = (): JSX.Element => {
  // Table data
  const tableData = Array(10).fill(null).map((_, index) => ({
    id: index + 1,
    label: "Label",
    link: "Link",
  }));

  return (
    <div className="flex flex-col w-full items-start justify-center gap-4">
      <div className="flex-col items-start w-full flex relative self-stretch">
        <Table className="w-full border border-solid border-[#b9b9bc] rounded-t-lg overflow-hidden">
          <TableHeader className="bg-[#d0d0d2]">
            <TableRow>
              <TableHead className="px-2 py-1 min-w-[60px] min-h-10 border-r border-[#b9b9bc]">
                <div className="flex items-center gap-1">
                  <Checkbox className="w-6 h-6 rounded border-[#002858] bg-white" />
                </div>
              </TableHead>
              <TableHead className="p-2 min-w-[60px] min-h-10 border-r border-[#b9b9bc]">
                <div className="flex items-center justify-center gap-1">
                  <span className="font-headers-h3 text-[#002858] text-center whitespace-nowrap">Label</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
              </TableHead>
              {Array(6).fill(null).map((_, index) => (
                <TableHead key={`header-${index}`} className="p-2 min-w-[60px] min-h-10 border-r border-[#b9b9bc] text-center">
                  <span className="font-headers-h3 text-[#002858]">Label</span>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b border-[#b9b9bc]">
              <TableCell className="min-w-[60px] min-h-12 p-2 border-r border-[#b9b9bc]">
                <div className="flex-1 self-stretch font-body-p1 text-[#002858] text-center"></div>
              </TableCell>
              {Array(6).fill(null).map((_, index) => (
                <TableCell key={`cell-icon-${index}`} className="min-w-[60px] h-12 p-2 border-r border-[#b9b9bc]">
                  <div className="flex w-8 items-center gap-2 p-2">
                    <ListPlusIcon className="w-4 h-4" />
                  </div>
                </TableCell>
              ))}
              <TableCell className="h-12 p-2">
                <div className="flex-1 self-stretch font-body-p1 text-[#002858] text-center"></div>
              </TableCell>
            </TableRow>
            {tableData.map((row, rowIndex) => (
              <TableRow key={`row-${rowIndex}`} className="border-b border-[#b9b9bc]">
                <TableCell className="min-w-[60px] h-12 p-2 border-r border-[#b9b9bc]">
                  <div className="flex w-8 items-center gap-1">
                    <Checkbox className="w-6 h-6 rounded border-[#002858] bg-white" />
                  </div>
                </TableCell>
                {Array(5).fill(null).map((_, cellIndex) => (
                  <TableCell key={`cell-${rowIndex}-${cellIndex}`} className="min-w-[60px] h-12 p-2 border-r border-[#b9b9bc]">
                    <div className="flex-1 self-stretch font-body-p1 text-[#002858] text-center">
                      Label
                    </div>
                  </TableCell>
                ))}
                <TableCell className="gap-1 min-w-[60px] h-12 p-2 border-r border-[#b9b9bc]">
                  <div className="flex-1 font-body-p1-link text-[#002858] text-center underline">
                    Link
                  </div>
                </TableCell>
                <TableCell className="min-w-[60px] h-12 p-2 gap-1 flex items-center justify-center">
                  <span className="font-body-p1 text-[#002858] text-center whitespace-nowrap">
                    Label
                  </span>
                  <div className="inline-flex items-center gap-2 py-2">
                    <img className="w-4 h-4" alt="Fa light arrow up" src="/righticon.svg" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="h-[72px] items-start justify-between flex relative self-stretch w-full">
          <div className="w-[93px] relative flex flex-col items-start">
            <Select>
              <SelectTrigger className="h-12 px-4 py-2 rounded-lg border border-[#b9b9bc] bg-white">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Pagination>
            <PaginationContent className="flex items-center gap-2">
              <PaginationPrevious className="inline-flex min-w-12 min-h-12 justify-center items-center">
                <ChevronLeftIcon className="w-5 h-5" />
              </PaginationPrevious>
              <PaginationItem>
                <PaginationLink className="inline-flex min-w-12 min-h-12 items-center justify-center gap-2 p-2 bg-[#28e9c6] rounded-lg border border-solid">
                  1
                </PaginationLink>
              </PaginationItem>
              {[2, 3, 4, 5, 6, 7].map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink className="inline-flex min-w-12 min-h-12 items-center justify-center gap-2 p-2 bg-white rounded-lg border border-solid border-[#b9b9bc]">
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationNext className="inline-flex min-w-12 min-h-12 justify-center items-center">
                <ChevronRightIcon className="w-5 h-5" />
              </PaginationNext>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};