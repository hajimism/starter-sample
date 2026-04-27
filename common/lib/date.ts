export {
	addDays,
	addMonths,
	differenceInDays,
	formatDistanceToNow,
	isAfter,
	isBefore,
	parseISO,
	startOfDay,
	startOfMonth,
	subDays,
} from "date-fns";

type DateFormat =
	| "HH:mm"
	| "HH:mm:ss"
	| "MM/DD"
	| "YYYY-MM-DD"
	| "YYYY/MM/DD"
	| "YYYY/MM/DD HH:mm"
	| "YYYY/MM/DD HH:mm:ss"
	| "YYYY年M月D日";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * 日付を YYYY-MM-DD 形式に変換
 * @returns 例: 2024-04-08
 */
export function formatDate(date: Date, format: "YYYY-MM-DD"): string;
/**
 * 日付を YYYY/MM/DD 形式に変換
 * @returns 例: 2024/04/08
 */
export function formatDate(date: Date, format: "YYYY/MM/DD"): string;
/**
 * 日時を YYYY/MM/DD HH:mm 形式に変換
 * @returns 例: 2024/04/08 09:05
 */
export function formatDate(date: Date, format: "YYYY/MM/DD HH:mm"): string;
/**
 * 日時を YYYY/MM/DD HH:mm:ss 形式に変換
 * @returns 例: 2024/04/08 09:05:45
 */
export function formatDate(date: Date, format: "YYYY/MM/DD HH:mm:ss"): string;
/**
 * 日付を YYYY年M月D日 形式に変換
 * @returns 例: 2024年4月8日
 */
export function formatDate(date: Date, format: "YYYY年M月D日"): string;
/**
 * 日付を MM/DD 形式に変換
 * @returns 例: 04/08
 */
export function formatDate(date: Date, format: "MM/DD"): string;
/**
 * 時刻を HH:mm 形式に変換
 * @returns 例: 09:05
 */
export function formatDate(date: Date, format: "HH:mm"): string;
/**
 * 時刻を HH:mm:ss 形式に変換
 * @returns 例: 09:05:45
 */
export function formatDate(date: Date, format: "HH:mm:ss"): string;

export function formatDate(date: Date, format: DateFormat): string {
	const y = date.getFullYear();
	const mo = date.getMonth() + 1;
	const d = date.getDate();
	const h = date.getHours();
	const mi = date.getMinutes();
	const s = date.getSeconds();

	switch (format) {
		case "YYYY-MM-DD":
			return `${y}-${pad(mo)}-${pad(d)}`;
		case "YYYY/MM/DD":
			return `${y}/${pad(mo)}/${pad(d)}`;
		case "YYYY/MM/DD HH:mm":
			return `${y}/${pad(mo)}/${pad(d)} ${pad(h)}:${pad(mi)}`;
		case "YYYY/MM/DD HH:mm:ss":
			return `${y}/${pad(mo)}/${pad(d)} ${pad(h)}:${pad(mi)}:${pad(s)}`;
		case "YYYY年M月D日":
			return `${y}年${mo}月${d}日`;
		case "MM/DD":
			return `${pad(mo)}/${pad(d)}`;
		case "HH:mm":
			return `${pad(h)}:${pad(mi)}`;
		case "HH:mm:ss":
			return `${pad(h)}:${pad(mi)}:${pad(s)}`;
		default:
			return format satisfies never;
	}
}
