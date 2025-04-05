import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Edit, Eye, FileText, MoreHorizontal, Plus, Trash2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

const mockCVs = [
    {
      id: 1,
      name: "Software Engineer CV",
      previewImage: "https://static-00.iconduck.com/assets.00/cv-icon-1725x2048-mk536z84.png",
      lastUpdated: "2 days ago",
      status: "Active",
    },
    {
      id: 2,
      name: "Data Scientist CV",
      previewImage: "https://cdn-icons-png.flaticon.com/512/8347/8347432.png",
      lastUpdated: "1 week ago",
      status: "Draft",
    },
    {
      id: 3,
      name: "Project Manager CV",
      previewImage: "https://cdn-icons-png.flaticon.com/512/6588/6588143.png",
      lastUpdated: "3 weeks ago",
      status: "Active",
    },
    {
      id: 4,
      name: "UX Designer CV",
      previewImage: "https://static-00.iconduck.com/assets.00/cv-icon-1725x2048-mk536z84.png",
      lastUpdated: "1 month ago",
      status: "Active",
    },
  ]

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const filteredCVs = mockCVs.filter(cv => 
        (activeTab === "all" || cv.status.toLowerCase() === activeTab) &&
        cv.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-slate-800">Dashboard</h2>}>
          <Head title="Dashboard" />
    
          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">My CVs</h3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="hidden md:flex">
                    <Eye className="mr-2 h-4 w-4" />
                    View All
                  </Button>
                </div>
              </div>
    
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Search CVs by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
    
              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                <div className="flex items-center justify-between">
                  <TabsList className="grid w-full max-w-md grid-cols-3">
                    <TabsTrigger value="all">All CVs</TabsTrigger>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="draft">Drafts</TabsTrigger>
                  </TabsList>
                </div>
    
                <TabsContent value={activeTab} className="mt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <Card className="flex h-full flex-col bg-gradient-to-br from-teal-50 to-white border-dashed border-2 border-teal-200">
                      <CardContent className="flex flex-1 flex-col items-center justify-center p-6">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-100">
                          <Plus className="h-10 w-10 text-teal-600" />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-slate-900">Create New CV</h3>
                        <p className="mt-2 text-center text-sm text-slate-500">
                          Start from scratch or use one of our templates
                        </p>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button className="w-full bg-teal-600 hover:bg-teal-700">
                          <Plus className="mr-2 h-4 w-4" /> Create CV
                        </Button>
                      </CardFooter>
                    </Card>
    
                    {filteredCVs.map((cv) => (
                      <Card key={cv.id} className="flex flex-col overflow-hidden transition-all hover:shadow-md">
                        <div className="relative aspect-[3/4] bg-slate-100 p-6">
                          <div className="absolute right-2 top-2">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" /> Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" /> Preview
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <FileText className="mr-2 h-4 w-4" /> Download PDF
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                          <img
                            src={cv.previewImage || "/placeholder.svg"}
                            alt={cv.name}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <CardHeader className="p-4 pb-0">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{cv.name}</CardTitle>
                            <Badge
                              variant={cv.status === "Active" ? "default" : "secondary"}
                              className={cv.status === "Active" ? "bg-teal-500" : ""}
                            >
                              {cv.status}
                            </Badge>
                          </div>
                          <CardDescription className="flex items-center text-xs text-slate-500">
                            <Clock className="mr-1 h-3 w-3" /> Updated {cv.lastUpdated}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between p-4">
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-3 w-3" /> Preview
                          </Button>
                          <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                            <Edit className="mr-2 h-3 w-3" /> Edit
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
    
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your recent actions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 rounded-lg border p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                        <Edit className="h-5 w-5 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          You updated <span className="font-semibold text-teal-600">Software Engineer CV</span>
                        </p>
                        <p className="text-xs text-slate-500">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                        <Plus className="h-5 w-5 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          You created <span className="font-semibold text-teal-600">Data Scientist CV</span>
                        </p>
                        <p className="text-xs text-slate-500">1 week ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                        <FileText className="h-5 w-5 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          You downloaded <span className="font-semibold text-teal-600">Project Manager CV</span>
                        </p>
                        <p className="text-xs text-slate-500">3 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </AuthenticatedLayout>
    );
}
