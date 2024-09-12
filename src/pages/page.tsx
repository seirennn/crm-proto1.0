import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, CreditCard, ChevronLeft, Copy, MoreVertical } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#121212] text-white">
      {/* Sidebar */}
      <aside className="w-16 bg-[#1c1c1c] flex flex-col items-center py-4 space-y-8">
        <div className="w-10 h-10 bg-[#2a2a2a] rounded-lg mb-8 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 6H21" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V6" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 18V22" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.93 4.93L7.76 7.76" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.24 16.24L19.07 19.07" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12H6" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 12H22" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.93 19.07L7.76 16.24" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.24 7.76L19.07 4.93" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 2V8H20" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 13H8" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 17H8" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 9H9H8" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex-grow"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2 text-sm text-zinc-400">
            <span>Dashboard</span>
            <ChevronRight className="w-4 h-4" />
            <span>Orders</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Recent Orders</span>
          </div>
          <div className="relative">
            <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <Input className="pl-10 bg-[#1c1c1c] border-zinc-800 text-white w-64" placeholder="Search..." />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Your Orders */}
          <Card className="col-span-2 bg-[#1c1c1c] border-zinc-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Your Orders</h2>
              <p className="text-sm text-zinc-400 mb-4">
                Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.
              </p>
              <Button variant="secondary" className="bg-white text-black hover:bg-zinc-200">Create New Order</Button>
            </CardContent>
          </Card>

          {/* This Week / This Month */}
          <Card className="bg-[#1c1c1c] border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-zinc-400 mb-2">This Week</h3>
              <p className="text-3xl font-bold">$1,329</p>
              <p className="text-sm text-green-500">+25% from last week</p>
              <div className="w-full bg-zinc-800 h-1 rounded-full mt-4">
                <div className="bg-blue-500 h-1 rounded-full w-3/4"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#1c1c1c] border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-zinc-400 mb-2">This Month</h3>
              <p className="text-3xl font-bold">$5,329</p>
              <p className="text-sm text-green-500">+10% from last month</p>
              <div className="w-full bg-zinc-800 h-1 rounded-full mt-4">
                <div className="bg-blue-500 h-1 rounded-full w-1/4"></div>
              </div>
            </CardContent>
          </Card>

          {/* Orders Table */}
          <Card className="col-span-2 bg-[#1c1c1c] border-zinc-800">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold">Orders</h2>
                  <p className="text-sm text-zinc-400">Recent orders from your store.</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="text-zinc-400 border-zinc-700 bg-[#1c1c1c]">
                    Week
                  </Button>
                  <Button variant="outline" size="sm" className="text-zinc-400 border-zinc-700 bg-[#1c1c1c]">
                    Month
                  </Button>
                  <Button variant="outline" size="sm" className="text-zinc-400 border-zinc-700 bg-[#1c1c1c]">
                    Year
                  </Button>
                  <Button variant="outline" size="sm" className="text-zinc-400 border-zinc-700 bg-[#1c1c1c]">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M9 2.5C9 2.22386 8.77614 2 8.5 2H6.5C6.22386 2 6 2.22386 6 2.5V4.5C6 4.77614 6.22386 5 6.5 5H8.5C8.77614 5 9 4.77614 9 4.5V2.5ZM9 10.5C9 10.2239 8.77614 10 8.5 10H6.5C6.22386 10 6 10.2239 6 10.5V12.5C6 12.7761 6.22386 13 6.5 13H8.5C8.77614 13 9 12.7761 9 12.5V10.5ZM13.5 6H1.5C1.22386 6 1 6.22386 1 6.5V8.5C1 8.77614 1.22386 9 1.5 9H13.5C13.7761 9 14 8.77614 14 8.5V6.5C14 6.22386 13.7761 6 13.5 6Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" className="text-zinc-400 border-zinc-700 bg-[#1c1c1c]">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M7.50005 1C7.77619 1 8.00005 1.22386 8.00005 1.5V11.2929L11.1465 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.50005 13C7.36749 13 7.24031 12.9473 7.14655 12.8536L3.14655 8.85355C2.95129 8.65829 2.95129 8.34171 3.14655 8.14645C3.34181 7.95118 3.65839 7.95118 3.85365 8.14645L7.00005 11.2929V1.5C7.00005 1.22386 7.22391 1 7.50005 1Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                    Export
                  </Button>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="border-zinc-800">
                    <TableHead className="text-zinc-400">Customer</TableHead>
                    <TableHead className="text-zinc-400">Type</TableHead>
                    <TableHead className="text-zinc-400">Status</TableHead>
                    <TableHead className="text-zinc-400">Date</TableHead>
                    <TableHead className="text-zinc-400 text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { name: "Liam Johnson", email: "liam@example.com", type: "Sale", status: "Fulfilled", date: "2023-06-23", amount: "$250.00" },
                    { name: "Olivia Smith", email: "olivia@example.com", type: "Refund", status: "Declined", date: "2023-06-24", amount: "$150.00" },
                    { name: "Noah Williams", email: "noah@example.com", type: "Subscription", status: "Fulfilled", date: "2023-06-25", amount: "$350.00" },
                    { name: "Emma Brown", email: "emma@example.com", type: "Sale", status: "Fulfilled", date: "2023-06-26", amount: "$450.00" },
                    { name: "Liam Johnson", email: "liam@example.com", type: "Sale", status: "Fulfilled", date: "2023-06-23", amount: "$250.00" },
                    { name: "Liam Johnson", email: "liam@example.com", type: "Sale", status: "Fulfilled", date: "2023-06-23", amount: "$250.00" },
                  ].map((order, index) => (
                    <TableRow key={index} className="border-zinc-800">
                      <TableCell>
                        <div>{order.name}</div>
                        <div className="text-sm text-zinc-400">{order.email}</div>
                      </TableCell>
                      <TableCell>{order.type}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${order.status === "Fulfilled" ? "bg-green-500/20 text-green-500" :
                            order.status === "Declined" ? "bg-red-500/20 text-red-500" :
                              "bg-yellow-500/20 text-yellow-500"
                          }`}>
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell className="text-right">{order.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Right panel */}
      <aside className="w-80 bg-[#1c1c1c] overflow-hidden flex flex-col">
        <div className="p-6 flex-grow overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Order Oe31b70H</h2>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-zinc-400">
                <Copy className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-zinc-400">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <p className="text-sm text-zinc-400 mb-6">Date: November 23, 2023</p>
          <ScrollArea className="h-[calc(100vh-220px)]">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Order Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Glimmer Lamps x 2</span>
                    <span>$250.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Aqua Filters x 1</span>
                    <span>$49.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Subtotal</span>
                    <span>$299.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Shipping</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Tax</span>
                    <span>$25.00</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$329.00</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Shipping Information</h3>
                  <div className="text-sm space-y-1">
                    <p>Liam Johnson</p>
                    <p>1234 Main St.</p>
                    <p>Anytown, CA 12345</p>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Billing Information</h3>
                  <div className="text-sm space-y-1">
                    <p>Same as shipping</p>
                    <p>address</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Customer Information</h3>
                <div className="text-sm space-y-1">
                  <p>Liam Johnson</p>
                  <p>liam@acme.com</p>
                  <p>+1 234 567 890</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Payment Information</h3>
                <div className="flex items-center text-sm">
                  <CreditCard className="w-4 h-4 mr-2" />
                  <span>Visa •••• •••• •••• 4532</span>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
        <div className="p-6 border-t border-zinc-800 flex justify-between items-center text-sm text-zinc-400">
          <span>Updated November 23, 2023</span>
          <div>
            <Button variant="ghost" size="icon" className="text-zinc-400">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </aside>
    </div>
  )
}
