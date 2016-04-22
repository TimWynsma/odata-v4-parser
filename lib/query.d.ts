import * as Lexer from './lexer';
export declare function queryOptions(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function queryOption(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function systemQueryOption(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function id(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function expand(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function expandItem(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function expandCountOption(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function expandRefOption(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function expandOption(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function expandPath(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function search(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function levels(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function filter(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function orderby(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function orderbyItem(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function skip(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function top(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function format(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function inlinecount(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function select(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function selectItem(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function allOperationsInSchema(value: number[] | Uint8Array, index: number): number;
export declare function selectProperty(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function selectPath(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function qualifiedActionName(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function qualifiedFunctionName(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function skiptoken(value: number[] | Uint8Array, index: number): Lexer.Token;
export declare function aliasAndValue(value: number[] | Uint8Array, index: number): Lexer.Token;
