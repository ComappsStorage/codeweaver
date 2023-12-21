import type { IncomingMessage } from 'node:http';

export interface ParsedURL {
	pathname: string;
	search: string;
	query: Record<string, string | string[]> | void;
	raw: string;
}

export function parse(req: IncomingMessage): ParsedURL;
