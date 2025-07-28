import { parse } from "https://deno.land/std@0.224.0/csv/mod.ts";

const csvFilePath = "./data/counts_per_day.csv";
const chartOutputPath = "./src/_data/chart_data.json";
const totalsOutputPath = "./src/_data/totals.json";

const rawCsv = await Deno.readTextFile(csvFilePath);
const parsed = await parse(rawCsv, {
  skipFirstRow: true,
});

const rows = parsed as Record<string, string>[];
const labels: string[] = [];
const datasetsMap: Record<string, number[]> = {};

for (const row of rows) {
  labels.push(row["day"]);
  for (const [key, value] of Object.entries(row)) {
    if (key === "day") continue;
    if (key === "follows_count") continue;
    if (key === "blocks_count") continue;
    if (key === "mutes_count") continue;
    if (key === "reports_count") continue;
    if (key === "themes_count") continue;
    if (key === "user_bans_count") continue;
    if (key === "inbox_count") continue;
    if (!datasetsMap[key]) datasetsMap[key] = [];
    datasetsMap[key].push(Number(value));
  }
}

const chartData = {
  labels,
  datasets: Object.entries(datasetsMap).map(([key, data]) => ({
    label: key,
    data,
  })),
};

await Deno.writeTextFile(chartOutputPath, JSON.stringify(chartData, null, 2));
console.log(`Chart.js data written to ${chartOutputPath}`);

const totalsMap: Record<string, number> = {};
for (const row of rows) {
  for (const [key, value] of Object.entries(row)) {
    if (key === "day") continue;
    if (!totalsMap[key]) totalsMap[key] = 0;
    totalsMap[key] += Number(value);
  }
}

await Deno.writeTextFile(totalsOutputPath, JSON.stringify(totalsMap, null, 2));
console.log(`Column totals written to ${totalsOutputPath}`);
