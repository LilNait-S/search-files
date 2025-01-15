import { Carpets } from "@/types";

export const carpets: Carpets[] = [
    {
      name: "Documents",
      path: "/home/user/Documents",
      isDir: true,
      children: [
        {
          name: "ProjectPlan",
          path: "/home/user/Documents/ProjectPlan.pdf",
          isDir: false,
          metadata: {
            file: "pdf",
          },
        },
        {
          name: "Reports",
          path: "/home/user/Documents/Reports",
          isDir: true,
          children: [
            {
              name: "AnnualReport.pdf",
              path: "/home/user/Documents/Reports/AnnualReport.pdf",
              isDir: false,
              metadata: {
                file: "pdf",
              },
            },
            {
              name: "MonthlyReport.xlsx",
              path: "/home/user/Documents/Reports/MonthlyReport.xlsx",
              isDir: false,
              metadata: {
                file: "xlsx",
              },
            },
            {
              name: "WeeklySummary.docx",
              path: "/home/user/Documents/Reports/WeeklySummary.docx",
              isDir: false,
              metadata: {
                file: "docx",
              },
            },
          ],
        },
        {
          name: "Resume.docx",
          path: "/home/user/Documents/Resume.docx",
          isDir: false,
          metadata: {
            file: "docx",
          },
        },
        {
          name: "Presentation.pptx",
          path: "/home/user/Documents/Presentation.pptx",
          isDir: false,
          metadata: {
            file: "pptx",
          },
        },
      ],
    },
    {
      name: "Pictures",
      path: "/home/user/Pictures",
      isDir: true,
      children: [
        {
          name: "Vacation",
          path: "/home/user/Pictures/Vacation",
          isDir: true,
          children: [
            {
              name: "Beach.png",
              path: "/home/user/Pictures/Vacation/Beach.png",
              isDir: false,
              metadata: {
                file: "png",
              },
            },
            {
              name: "Mountain.png",
              path: "/home/user/Pictures/Vacation/Mountain.png",
              isDir: false,
              metadata: {
                file: "png",
              },
            },
            {
              name: "Sunset.jpg",
              path: "/home/user/Pictures/Vacation/Sunset.jpg",
              isDir: false,
              metadata: {
                file: "jpg",
              },
            },
          ],
        },
        {
          name: "Family",
          path: "/home/user/Pictures/Family",
          isDir: true,
          children: [
            {
              name: "Birthday.jpg",
              path: "/home/user/Pictures/Family/Birthday.jpg",
              isDir: false,
              metadata: {
                file: "jpg",
              },
            },
            {
              name: "Christmas.jpg",
              path: "/home/user/Pictures/Family/Christmas.jpg",
              isDir: false,
              metadata: {
                file: "jpg",
              },
            },
          ],
        },
        {
          name: "Pets",
          path: "/home/user/Pictures/Pets",
          isDir: true,
          children: [
            {
              name: "Dog.png",
              path: "/home/user/Pictures/Pets/Dog.png",
              isDir: false,
              metadata: {
                file: "png",
              },
            },
            {
              name: "Cat.png",
              path: "/home/user/Pictures/Pets/Cat.png",
              isDir: false,
              metadata: {
                file: "png",
              },
            },
          ],
        },
      ],
    },
    {
      name: "Music",
      path: "/home/user/Music",
      isDir: true,
      children: [
        {
          name: "Rock",
          path: "/home/user/Music/Rock",
          isDir: true,
          children: [
            {
              name: "ClassicRock.mp3",
              path: "/home/user/Music/Rock/ClassicRock.mp3",
              isDir: false,
              metadata: {
                file: "mp3",
              },
            },
            {
              name: "ModernRock.mp3",
              path: "/home/user/Music/Rock/ModernRock.mp3",
              isDir: false,
              metadata: {
                file: "mp3",
              },
            },
          ],
        },
        {
          name: "Jazz",
          path: "/home/user/Music/Jazz",
          isDir: true,
          children: [
            {
              name: "SmoothJazz.mp3",
              path: "/home/user/Music/Jazz/SmoothJazz.mp3",
              isDir: false,
              metadata: {
                file: "mp3",
              },
            },
            {
              name: "CoolJazz.mp3",
              path: "/home/user/Music/Jazz/CoolJazz.mp3",
              isDir: false,
              metadata: {
                file: "mp3",
              },
            },
            {
              name: "FusionJazz.mp3",
              path: "/home/user/Music/Jazz/FusionJazz.mp3",
              isDir: false,
              metadata: {
                file: "mp3",
              },
            },
          ],
        },
        {
          name: "Classical",
          path: "/home/user/Music/Classical",
          isDir: true,
          children: [
            {
              name: "Symphony.mp3",
              path: "/home/user/Music/Classical/Symphony.mp3",
              isDir: false,
              metadata: {
                file: "mp3",
              },
            },
            {
              name: "PianoConcerto.mp3",
              path: "/home/user/Music/Classical/PianoConcerto.mp3",
              isDir: false,
              metadata: {
                file: "mp3",
              },
            },
          ],
        },
      ],
    },
    {
      name: "Downloads",
      path: "/home/user/Downloads",
      isDir: true,
      children: [
        {
          name: "Installer.exe",
          path: "/home/user/Downloads/Installer.exe",
          isDir: false,
          metadata: {
            file: "exe",
          },
        },
        {
          name: "Compressed.zip",
          path: "/home/user/Downloads/Compressed.zip",
          isDir: false,
          metadata: {
            file: "zip",
          },
        },
        {
          name: "Ebook.pdf",
          path: "/home/user/Downloads/Ebook.pdf",
          isDir: false,
          metadata: {
            file: "pdf",
          },
        },
      ],
    },
    {
      name: "Videos",
      path: "/home/user/Videos",
      isDir: true,
      children: [
        {
          name: "Tutorial.mp4",
          path: "/home/user/Videos/Tutorial.mp4",
          isDir: false,
          metadata: {
            file: "mp4",
          },
        },
        {
          name: "Movie.mp4",
          path: "/home/user/Videos/Movie.mp4",
          isDir: false,
          metadata: {
            file: "mp4",
          },
        },
      ],
    },
  ];
  