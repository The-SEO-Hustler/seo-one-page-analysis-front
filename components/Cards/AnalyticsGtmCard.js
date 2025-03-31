import React from "react";
import BaseCard from "./BaseCard";
import { BarChart } from "lucide-react";

export default function AnalyticsGtmCard({ data, status, analysis, onFocus, isFocused }) {
  const { googleAnalytics, googleTagManager } = data;

  return (
    <BaseCard
      id="analyticsGtmCheck"
      status={status}
      isFocused={isFocused}
      onFocus={onFocus}
      title="Analytics & GTM Check"
      icon={BarChart}
      analysis={analysis}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Google Analytics</span>
              <span
                className={`w-2 h-2 rounded-full ${
                  googleAnalytics ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </div>
            <p className="text-sm text-gray-600">
              {googleAnalytics ? "Detected" : "Not Detected"}
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Google Tag Manager</span>
              <span
                className={`w-2 h-2 rounded-full ${
                  googleTagManager ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </div>
            <p className="text-sm text-gray-600">
              {googleTagManager ? "Detected" : "Not Detected"}
            </p>
          </div>
        </div>
      </div>
    </BaseCard>
  );
} 