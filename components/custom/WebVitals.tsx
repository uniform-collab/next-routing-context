"use client";

import { useReportWebVitals } from "next/web-vitals";
import { useCallback, useState } from "react";

type MetricName = "FCP" | "LCP" | "CLS" | "FID" | "TTFB" | "INP";
type Metrics = Record<
  MetricName,
  { value: number; delta: number; rating: string } | null
>;

export default function WebVitals() {
  const [metrics, setMetrics] = useState<Metrics>({
    FCP: null,
    LCP: null,
    CLS: null,
    FID: null,
    TTFB: null,
    INP: null,
  });

  // Use useCallback to create a stable function reference
  const reportWebVitals = useCallback(
    (metric: {
      name: string;
      value: number;
      delta: number;
      rating: string;
    }) => {
      setMetrics((prevMetrics) => {
        const newMetrics = { ...prevMetrics };
        const name = metric.name as MetricName;

        if (name in newMetrics) {
          newMetrics[name] = {
            value: metric.value,
            delta: metric.delta,
            rating: metric.rating,
          };
        }

        console.log(metric);
        return newMetrics;
      });
    },
    []
  ); // Empty dependency array keeps this function stable

  useReportWebVitals(reportWebVitals);

  console.log(metrics);
  return (
    <>
      <h2>
        TTFB: {metrics.TTFB ? Math.round(metrics.TTFB.value) : 0}ms (
        {metrics.TTFB?.rating})
      </h2>
      <h2>
        FCP: {metrics.FCP ? Math.round(metrics.FCP.value) : 0}ms (
        {metrics.FCP?.rating})
      </h2>
      <h2>
        LCP: {metrics.LCP ? Math.round(metrics.LCP.value) : 0}ms (
        {metrics.LCP?.rating})
      </h2>
      <h2>
        CLS: {metrics.CLS ? Math.round(metrics.CLS.value) : 0} (
        {metrics.CLS?.rating})
      </h2>
      <h2>
        FID: {metrics.FID ? Math.round(metrics.FID.value) : 0}ms (
        {metrics.FID?.rating})
      </h2>
    </>
  );
}
