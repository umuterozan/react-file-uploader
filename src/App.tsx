import { PiPaperPlaneRightFill } from "react-icons/pi";
import { MdFileUpload, MdDelete } from "react-icons/md"
import { AiOutlineFile } from "react-icons/ai"
import { useState } from "react"
import formatFileSize from "./formatFileSize";

export default function App() {
  const [files, setFiles] = useState([])

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles: any = e.target.files
    const filesArray: any = Array.from(selectedFiles)

    setFiles(filesArray)
  }

  const handleDrop = (e: any) => {
    e.preventDefault();
    
    const selectedFiles: any = e.dataTransfer.files
    const filesArray: any = Array.from(selectedFiles)

    setFiles(filesArray)
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const deleteFile = (index: number) => {
    const newFiles: any = [...files]
    newFiles.splice(index, 1)

    setFiles(newFiles)
  }

  console.log(files)

  return (
    <div className="flex items-center justify-center bg-indigo-100 h-screen">
      <div className="container">
        <div className="bg-white rounded shadow-md p-4">
          <div>
            <h1 className="text-gray-700 text-2xl font-medium">Dosya yükle</h1>
            <h2 className="text-gray-400">
              Dosya yüklemek için sürükle veya seç
            </h2>
          </div>
          <div className="mt-4 p-4">
            <div className="h-60" onDrop={handleDrop} onDragOver={handleDragOver}>
              <input onChange={handleFiles} className="hidden" type="file" id="file" multiple={true} />
              <label className="text-gray-500 font-medium text-sm cursor-pointer h-full w-full flex flex-col gap-y-4 items-center justify-center border-4 border-dotted" htmlFor="file"><MdFileUpload className="text-4xl" /> DOSYA YÜKLEMEK İÇİN SÜRÜKLE</label>
            </div>
            <div className="mt-4 grid gap-y-12">
              {files && files.map((file: any, index: number) => (
                <div key={index}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-4">
                      <div className="bg-indigo-100 text-indigo-600 rounded-full p-4 text-2xl">
                        <AiOutlineFile />
                      </div>
                      <div>
                        <div className="text-gray-700">{file.name}</div>
                        <div className="text-gray-500 text-sm">{formatFileSize(file.size)}</div>
                      </div>
                    </div>
                    <button onClick={() => deleteFile(index)} className="text-red-600 text-2xl">
                      <MdDelete />
                    </button>
                  </div>
                  <div className="mt-2 h-2 rounded bg-indigo-100">
                    <div className="stripe h-full rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="flex items-center gap-x-2 bg-blue-500 text-white py-2 px-4 rounded font-semibold">
            <PiPaperPlaneRightFill className="text-xl" />
            <span>Dosya Yükle</span>
          </button>
        </div>
      </div>
    </div>
  );
}
