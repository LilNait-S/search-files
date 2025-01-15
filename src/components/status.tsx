import { Circle } from "lucide-react"

type StatusColor = "green" | "yellow" | "red" | "gray"

interface StatusBadgeProps {
  status: string
  color: StatusColor
}

const colorMap: Record<StatusColor, string> = {
  green: "text-green-500",
  yellow: "text-yellow-500",
  red: "text-red-500",
  gray: "text-gray-500",
}

export function StatusBadge({ status, color }: StatusBadgeProps) {
  return (
    <div className="flex items-center space-x-2 px-3">
      <Circle className={`w-3 h-3 ${colorMap[color]}`} fill="currentColor" />
      <span className="text-sm font-medium">{status}</span>
    </div>
  )
}
