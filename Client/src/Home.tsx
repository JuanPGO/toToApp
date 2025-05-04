import React from 'react'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

function Home() {
    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-8'>
                    <h1 className='font-bold text-3xl text-gray-800 mb-2'>Lista To Do</h1>
                </div>

                {/* Input y botón para agregar tareas */}
                <div className='bg-white p-6 rounded-lg shadow-md mb-8'>
                    <div className='flex gap-3 mb-6'>
                        <Input
                            type='text'
                            placeholder='Ingresa una tarea'
                            className="w-full md:w-3/4 p-2 outline-none border border-blue-300 rounded-md"
                        />
                        <Button className='bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-md'>
                            Agregar
                        </Button>
                    </div>

                    {/* Gráficas */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm'>
                            <h3 className='font-semibold mb-2 text-blue-800'>Actividades Completadas</h3>
                            <div className='h-40 flex items-center justify-center text-blue-600 border-2 border-dashed border-blue-300 rounded-md'>
                                {/* Aquí se implementará la gráfica para actividades completadas */}
                                <p className='text-sm text-blue-500'>Gráfica de completadas</p>
                            </div>
                        </div>
                        <div className='bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm'>
                            <h3 className='font-semibold mb-2 text-orange-800'>Actividades Pendientes</h3>
                            <div className='h-40 flex items-center justify-center text-orange-600 border-2 border-dashed border-orange-300 rounded-md'>
                                {/* Aquí se implementará la gráfica para actividades pendientes */}
                                <p className='text-sm text-orange-500'>Gráfica de pendientes</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs y tabla de tareas */}
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <Tabs defaultValue="todos" className="w-full mb-6">
                        <TabsList className="grid w-full grid-cols-3 mb-6">
                            <TabsTrigger value="todos">Todos</TabsTrigger>
                            <TabsTrigger value="pendientes">Pendientes</TabsTrigger>
                            <TabsTrigger value="completados">Completados</TabsTrigger>
                        </TabsList>

                        <TabsContent value="todos">
                            <div className="rounded-md border">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[300px]">Actividad</TableHead>
                                            <TableHead className="w-[200px]">Fecha de creación</TableHead>
                                            <TableHead className="w-[100px]">Estado</TableHead>
                                            <TableHead className="text-right">Acciones</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Terminar las tareas</TableCell>
                                            <TableCell>04/05/2025 10:30</TableCell>
                                            <TableCell>
                                                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">
                                                    Pendiente
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button variant="outline" size="sm">Editar</Button>
                                                    <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700">Completar</Button>
                                                    <Button variant="destructive" size="sm">Eliminar</Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Revisar correos</TableCell>
                                            <TableCell>05/05/2025 09:15</TableCell>
                                            <TableCell>
                                                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                                                    Completado
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button variant="outline" size="sm">Editar</Button>
                                                    <Button variant="default" size="sm" className="bg-orange-600 hover:bg-orange-700">Pendiente</Button>
                                                    <Button variant="destructive" size="sm">Eliminar</Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </TabsContent>

                        <TabsContent value="pendientes">
                            <div className="rounded-md border">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[300px]">Actividad</TableHead>
                                            <TableHead className="w-[200px]">Fecha de creación</TableHead>
                                            <TableHead className="w-[100px]">Estado</TableHead>
                                            <TableHead className="text-right">Acciones</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Terminar las tareas</TableCell>
                                            <TableCell>04/05/2025 10:30</TableCell>
                                            <TableCell>
                                                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">
                                                    Pendiente
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button variant="outline" size="sm">Editar</Button>
                                                    <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700">Completar</Button>
                                                    <Button variant="destructive" size="sm">Eliminar</Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </TabsContent>

                        <TabsContent value="completados">
                            <div className="rounded-md border">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[300px]">Actividad</TableHead>
                                            <TableHead className="w-[200px]">Fecha de creación</TableHead>
                                            <TableHead className="w-[100px]">Estado</TableHead>
                                            <TableHead className="text-right">Acciones</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Revisar correos</TableCell>
                                            <TableCell>05/05/2025 09:15</TableCell>
                                            <TableCell>
                                                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                                                    Completado
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button variant="outline" size="sm">Editar</Button>
                                                    <Button variant="default" size="sm" className="bg-orange-600 hover:bg-orange-700">Pendiente</Button>
                                                    <Button variant="destructive" size="sm">Eliminar</Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Home