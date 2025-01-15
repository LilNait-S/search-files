export const getIcon = (
  fileName: string
): { imgSrc: string; message?: string } => {
  const extension = fileName.split(".").pop()?.toLowerCase() ?? ""

  switch (extension) {
    case "mp3":
      return {
        imgSrc: "/assets/audio.png",
      }

    case "mp4":
      return {
        imgSrc: "/assets/multimedia.png",
      }

    case "xlsx":
    case "xls":
      return {
        imgSrc: "/assets/excel.png",
      }
    case "docx":
    case "doc":
      return {
        imgSrc: "/assets/word.png",
      }

    case "pdf":
      return {
        imgSrc: "/assets/pdf.png",
      }

    default:
      return {
        imgSrc: "/assets/shiba.png",
        message: "Unrecognized file",
      }
  }
}
