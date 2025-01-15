import { ChevronLeft, LayoutGrid, List, Search } from "lucide-react"
import { useState } from "react"
import { StatusBadge } from "./components/status"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { getIcon } from "./lib/fileicon"
import { Carpets } from "./types"
import { getFileNameFromPath } from "./lib/getFileNameFromPath"
import { Separator } from "./components/ui/separator"
import { cn } from "./lib/utils"
import { carpets } from "./constants/carpets"

function App() {
  const [carpetName, setCarpetName] = useState("")
  const [currentFolder, setCurrentFolder] = useState(carpets)
  const [folderHistory, setFolderHistory] = useState<Carpets[][]>([])
  const [view, setView] = useState(false)

  // Filtrar carpetas y archivos cuyo nombre coincide con el texto ingresado
  const filteredCarpets = currentFolder.filter((carpet) =>
    carpet.name.toLowerCase().includes(carpetName.toLowerCase())
  )

  const openFolder = (folder: Carpets) => {
    if (folder.isDir) {
      setFolderHistory((prevHistory) => [...prevHistory, currentFolder])
      setCurrentFolder(folder.children || [])
    }
  }

  const goBack = () => {
    setFolderHistory((prevHistory) => {
      if (prevHistory.length === 0) return prevHistory
      const newHistory = [...prevHistory]
      const previousFolder = newHistory.pop()
      setCurrentFolder(previousFolder || carpets)
      return newHistory
    })
  }

  return (
    <section className="flex flex-col min-h-screen">
      <div className="main -z-10">
        <div className="gradient" />
      </div>
      <section className="flex justify-center flex-col items-center my-16">
        <h1 className="text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
          <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 bg-clip-text text-transparent">
            Search
          </span>{" "}
          Files
        </h1>
        <p className="text-lg text-gray-600 sm:text-xl max-w-2xl">
          Find any file on your computer quickly and easily.
        </p>
      </section>
      <header className="py-4 gap-2 flex justify-between items-center container mx-auto">
        {folderHistory.length !== 0 && (
          <Button
            onClick={goBack}
            disabled={folderHistory.length === 0}
            variant="outline"
          >
            <ChevronLeft />
            Retroceder
          </Button>
        )}
        <div className="flex gap-2 w-full">
          <div className="flex gap-2 w-full items-center">
            <div className="relative max-w-md w-full">
              <Search className="absolute top-2 left-2 size-5 stroke-gray-300" />
              <Input
                placeholder="Buscar"
                className="w-full pl-8"
                onChange={(v) => setCarpetName(v.currentTarget.value)}
              />
            </div>
            <Button>
              <Search />
              Search
            </Button>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex">
              <Button
                type="button"
                size="icon"
                className="px-4 group"
                variant="ghost"
                onClick={() => setView(false)}
              >
                <LayoutGrid
                  className={cn(
                    "group-hover:stroke-primary",
                    view ? "" : "stroke-primary"
                  )}
                />
              </Button>
              <Button
                type="button"
                size="icon"
                className="px-4 group"
                variant="ghost"
                onClick={() => setView(true)}
              >
                <List
                  className={cn(
                    "group-hover:stroke-primary",
                    view ? "stroke-primary" : ""
                  )}
                />
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <StatusBadge status="Ready" color="green" />
            <Button variant="outline">Refresh</Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto">
        {view ? (
          <section className="flex flex-col gap-1">
            {filteredCarpets.map((carpet) => {
              const { imgSrc, message } = getIcon(carpet.path)
              return (
                <div
                  key={carpet.path}
                  onClick={() => openFolder(carpet)}
                  className="flex gap-2 bg-gray-300/20 hover:bg-gray-300/60 p-2 rounded-md cursor-pointer"
                >
                  {carpet.metadata ? (
                    <div className="flex gap-3 items-start">
                      <img src={imgSrc} alt="img" className="h-6" />
                      {message ? (
                        <div className="flex gap-3">
                          <span className="font-semibold">{message}</span>
                          <span>{getFileNameFromPath(carpet.path)}</span>
                        </div>
                      ) : (
                        getFileNameFromPath(carpet.path)
                      )}
                    </div>
                  ) : (
                    <div className="flex gap-3 items-start">
                      <img
                        src="/assets/folder.png"
                        alt="folder"
                        className="h-6"
                      />
                      <div className="flex gap-3">
                        <span className="font-semibold">
                          {getFileNameFromPath(carpet.path)}
                        </span>
                        <span className="text-gray-500">
                          {carpet.children?.length} Files
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
            <div></div>
          </section>
        ) : (
          <section className="grid grid-cols-3 gap-4">
            {filteredCarpets.map((carpet) => {
              const { imgSrc, message } = getIcon(carpet.path)
              return (
                <div
                  key={carpet.path}
                  className="bg-gray-300/20 hover:bg-gray-300/60 h-44 rounded-xl flex p-8 cursor-pointer"
                  onClick={() => openFolder(carpet)}
                >
                  {carpet.metadata ? (
                    <div className="flex flex-col gap-3 items-start">
                      <img src={imgSrc} alt="img" className="h-16" />
                      {message ? (
                        <div className="flex flex-col">
                          <span className="font-semibold">{message}</span>
                          <span>{getFileNameFromPath(carpet.path)}</span>
                        </div>
                      ) : (
                        getFileNameFromPath(carpet.path)
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3 items-start">
                      <img
                        src="/assets/folder.png"
                        alt="folder"
                        className="h-16"
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold">
                          {getFileNameFromPath(carpet.path)}
                        </span>
                        <span className="text-gray-500">
                          {carpet.children?.length} Files
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </section>
        )}
      </main>
    </section>
  )
}

export default App
