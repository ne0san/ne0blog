export interface OutlineItem {
	id: string;
	text: string;
	level: number; // 1-6 (h1-h6)
	isActive?: boolean;
}

export interface OutlineProps {
	items: OutlineItem[];
	className?: string;
}