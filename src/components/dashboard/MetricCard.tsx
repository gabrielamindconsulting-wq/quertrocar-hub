import { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  iconBgColor: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export function MetricCard({ title, value, icon, iconBgColor, trend }: MetricCardProps) {
  return (
    <div className="metric-card animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="mt-2 text-2xl font-bold text-foreground">{value}</p>
          {trend && (
            <div className="mt-2 flex items-center gap-1">
              {trend.isPositive ? (
                <TrendingUp className="w-4 h-4 text-success" />
              ) : (
                <TrendingDown className="w-4 h-4 text-destructive" />
              )}
              <span className={`text-sm font-medium ${trend.isPositive ? "text-success" : "text-destructive"}`}>
                {trend.value}
              </span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBgColor}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
