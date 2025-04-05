import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { FileText, Home, Menu, Plus, Settings } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function AuthenticatedLayout({ children }) {
  const user = usePage().props.auth.user;

  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="flex h-16 items-center px-4 md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href={route("dashboard")}
                  className={cn(
                    "flex items-center gap-2 text-slate-600 hover:text-slate-900",
                    route().current("dashboard") && "text-slate-900 font-semibold",
                  )}
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link href="#" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
                  <FileText className="h-5 w-5" />
                  My CVs
                </Link>
                <Link href="#" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
                  <Settings className="h-5 w-5" />
                  Templates
                </Link>
                <Link href="#" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
                  <Settings className="h-5 w-5" />
                  Templates
                </Link>
                <Link href="#">
                  <Button className="text-sm bg-teal-600 hover:bg-teal-700 flex items-center">
                    <Plus className="mr-2 h-4 w-4" /> Create New CV
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/" className="hidden md:flex">
              <FileText className="h-6 w-6 text-teal-600" />
              <span className="ml-2 text-xl font-bold text-slate-900">CV Manager</span>
            </Link>
            <nav className="hidden md:flex md:items-center md:gap-4 lg:gap-6">
              <Link
                href={route("dashboard")}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-teal-600",
                  route().current("dashboard") ? "text-teal-600" : "text-slate-600",
                )}
              >
                Dashboard
              </Link>
              <Link href="#" className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600">
                My CVs
              </Link>
              <Link href="#" className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600">
                Templates
              </Link>
              <Link href="#">
                <Button className="text-sm bg-teal-600 hover:bg-teal-700 flex items-center">
                  <Plus className="mr-2 h-4 w-4" /> Create New CV
                </Button>
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative h-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`https://avatar.vercel.sh/${user.name}`} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-slate-500">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={route("profile.edit")} className="cursor-pointer">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={route("logout")} method="post" as="button" className="cursor-pointer w-full text-left">
                    Log Out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-6 px-4">{children}</main>
    </div>
  );
}
