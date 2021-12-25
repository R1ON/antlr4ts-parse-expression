// eslint-disable-next-line
// @ts-nocheck
// eslint-disable-next-line
// @ts-ignore-file

// Generated from ./src/lib/ANTLR/NameStringExpressionGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { NameStringExpressionGrammarVisitor } from "./NameStringExpressionGrammarVisitor";


export class NameStringExpressionGrammarParser extends Parser {
	public static readonly DOLLAR = 1;
	public static readonly MINUS = 2;
	public static readonly PLUS = 3;
	public static readonly STAR = 4;
	public static readonly DIV = 5;
	public static readonly MODULO = 6;
	public static readonly OPEN_PARENS = 7;
	public static readonly CLOSE_PARENS = 8;
	public static readonly COMMA = 9;
	public static readonly DOT = 10;
	public static readonly OPEN_BRACKET = 11;
	public static readonly CLOSE_BRACKET = 12;
	public static readonly UNDERSCORE = 13;
	public static readonly AND = 14;
	public static readonly OR = 15;
	public static readonly NOT = 16;
	public static readonly TRUE = 17;
	public static readonly FALSE = 18;
	public static readonly GT = 19;
	public static readonly GE = 20;
	public static readonly LT = 21;
	public static readonly LE = 22;
	public static readonly EQ = 23;
	public static readonly NEQ = 24;
	public static readonly WhiteSpace = 25;
	public static readonly IDENTIFIER = 26;
	public static readonly STRING = 27;
	public static readonly UNSIGNED_INTEGER = 28;
	public static readonly UNSIGNED_NUMBER = 29;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_string = 2;
	public static readonly RULE_number = 3;
	public static readonly RULE_integer = 4;
	public static readonly RULE_floating = 5;
	public static readonly RULE_array = 6;
	public static readonly RULE_parameterReference = 7;
	public static readonly RULE_functionCall = 8;
	public static readonly RULE_argumentList = 9;
	public static readonly RULE_valueArgument = 10;
	public static readonly RULE_entity = 11;
	public static readonly RULE_propertyPath = 12;
	public static readonly RULE_unaryMinus = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "expression", "string", "number", "integer", "floating", 
		"array", "parameterReference", "functionCall", "argumentList", "valueArgument", 
		"entity", "propertyPath", "unaryMinus",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'$'", "'-'", "'+'", "'*'", "'/'", "'%'", "'('", "')'", "','", 
		"'.'", "'['", "']'", "'_'", "'&&'", "'||'", "'!'", undefined, undefined, 
		"'>'", "'>='", "'<'", "'<='", "'=='", "'!='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DOLLAR", "MINUS", "PLUS", "STAR", "DIV", "MODULO", "OPEN_PARENS", 
		"CLOSE_PARENS", "COMMA", "DOT", "OPEN_BRACKET", "CLOSE_BRACKET", "UNDERSCORE", 
		"AND", "OR", "NOT", "TRUE", "FALSE", "GT", "GE", "LT", "LE", "EQ", "NEQ", 
		"WhiteSpace", "IDENTIFIER", "STRING", "UNSIGNED_INTEGER", "UNSIGNED_NUMBER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(NameStringExpressionGrammarParser._LITERAL_NAMES, NameStringExpressionGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return NameStringExpressionGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "NameStringExpressionGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return NameStringExpressionGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return NameStringExpressionGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(NameStringExpressionGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, NameStringExpressionGrammarParser.RULE_compilationUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.expression(0);
			this.state = 29;
			this.match(NameStringExpressionGrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, NameStringExpressionGrammarParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 32;
				this.unaryMinus();
				}
				break;

			case 2:
				{
				_localctx = new ParenExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 33;
				this.match(NameStringExpressionGrammarParser.OPEN_PARENS);
				this.state = 34;
				this.expression(0);
				this.state = 35;
				this.match(NameStringExpressionGrammarParser.CLOSE_PARENS);
				}
				break;

			case 3:
				{
				_localctx = new NegateExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 37;
				this.match(NameStringExpressionGrammarParser.NOT);
				this.state = 38;
				this.expression(9);
				}
				break;

			case 4:
				{
				_localctx = new NumberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 39;
				this.number();
				}
				break;

			case 5:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 40;
				this.string();
				}
				break;

			case 6:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 41;
				this.array();
				}
				break;

			case 7:
				{
				_localctx = new ParameterReferenceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 42;
				this.parameterReference();
				}
				break;

			case 8:
				{
				_localctx = new FunctionCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 43;
				this.functionCall();
				}
				break;

			case 9:
				{
				_localctx = new EntityExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 44;
				this.entity();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 61;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 59;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
					case 1:
						{
						_localctx = new MulDivExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, NameStringExpressionGrammarParser.RULE_expression);
						this.state = 47;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 48;
						(_localctx as MulDivExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NameStringExpressionGrammarParser.STAR) | (1 << NameStringExpressionGrammarParser.DIV) | (1 << NameStringExpressionGrammarParser.MODULO))) !== 0))) {
							(_localctx as MulDivExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 49;
						this.expression(13);
						}
						break;

					case 2:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, NameStringExpressionGrammarParser.RULE_expression);
						this.state = 50;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 51;
						(_localctx as AddSubExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === NameStringExpressionGrammarParser.MINUS || _la === NameStringExpressionGrammarParser.PLUS)) {
							(_localctx as AddSubExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 52;
						this.expression(12);
						}
						break;

					case 3:
						{
						_localctx = new ComparatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, NameStringExpressionGrammarParser.RULE_expression);
						this.state = 53;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 54;
						(_localctx as ComparatorExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NameStringExpressionGrammarParser.GT) | (1 << NameStringExpressionGrammarParser.GE) | (1 << NameStringExpressionGrammarParser.LT) | (1 << NameStringExpressionGrammarParser.LE) | (1 << NameStringExpressionGrammarParser.EQ) | (1 << NameStringExpressionGrammarParser.NEQ))) !== 0))) {
							(_localctx as ComparatorExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 55;
						this.expression(9);
						}
						break;

					case 4:
						{
						_localctx = new BinaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, NameStringExpressionGrammarParser.RULE_expression);
						this.state = 56;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 57;
						(_localctx as BinaryExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === NameStringExpressionGrammarParser.AND || _la === NameStringExpressionGrammarParser.OR)) {
							(_localctx as BinaryExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 58;
						this.expression(8);
						}
						break;
					}
					}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, NameStringExpressionGrammarParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			_localctx._val = this.match(NameStringExpressionGrammarParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, NameStringExpressionGrammarParser.RULE_number);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NameStringExpressionGrammarParser.UNSIGNED_INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 66;
				this.integer();
				}
				break;
			case NameStringExpressionGrammarParser.UNSIGNED_NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 67;
				this.floating();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, NameStringExpressionGrammarParser.RULE_integer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			_localctx._val = this.match(NameStringExpressionGrammarParser.UNSIGNED_INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floating(): FloatingContext {
		let _localctx: FloatingContext = new FloatingContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, NameStringExpressionGrammarParser.RULE_floating);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			_localctx._val = this.match(NameStringExpressionGrammarParser.UNSIGNED_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, NameStringExpressionGrammarParser.RULE_array);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(NameStringExpressionGrammarParser.OPEN_BRACKET);
			this.state = 80;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 75;
					this.expression(0);
					this.state = 76;
					this.match(NameStringExpressionGrammarParser.COMMA);
					}
					}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 83;
			this.expression(0);
			this.state = 84;
			this.match(NameStringExpressionGrammarParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterReference(): ParameterReferenceContext {
		let _localctx: ParameterReferenceContext = new ParameterReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, NameStringExpressionGrammarParser.RULE_parameterReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(NameStringExpressionGrammarParser.DOLLAR);
			this.state = 87;
			_localctx._name = this.match(NameStringExpressionGrammarParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, NameStringExpressionGrammarParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			_localctx._name = this.match(NameStringExpressionGrammarParser.IDENTIFIER);
			this.state = 90;
			this.match(NameStringExpressionGrammarParser.OPEN_PARENS);
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NameStringExpressionGrammarParser.DOLLAR) | (1 << NameStringExpressionGrammarParser.MINUS) | (1 << NameStringExpressionGrammarParser.OPEN_PARENS) | (1 << NameStringExpressionGrammarParser.OPEN_BRACKET) | (1 << NameStringExpressionGrammarParser.NOT) | (1 << NameStringExpressionGrammarParser.IDENTIFIER) | (1 << NameStringExpressionGrammarParser.STRING) | (1 << NameStringExpressionGrammarParser.UNSIGNED_INTEGER) | (1 << NameStringExpressionGrammarParser.UNSIGNED_NUMBER))) !== 0)) {
				{
				this.state = 91;
				_localctx._args = this.argumentList();
				}
			}

			this.state = 94;
			this.match(NameStringExpressionGrammarParser.CLOSE_PARENS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, NameStringExpressionGrammarParser.RULE_argumentList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 96;
					this.expression(0);
					this.state = 97;
					this.match(NameStringExpressionGrammarParser.COMMA);
					}
					}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 104;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueArgument(): ValueArgumentContext {
		let _localctx: ValueArgumentContext = new ValueArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, NameStringExpressionGrammarParser.RULE_valueArgument);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NameStringExpressionGrammarParser.UNSIGNED_INTEGER:
			case NameStringExpressionGrammarParser.UNSIGNED_NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				this.number();
				}
				break;
			case NameStringExpressionGrammarParser.DOLLAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				this.parameterReference();
				}
				break;
			case NameStringExpressionGrammarParser.MINUS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 108;
				this.unaryMinus();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entity(): EntityContext {
		let _localctx: EntityContext = new EntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, NameStringExpressionGrammarParser.RULE_entity);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			_localctx._name = this.match(NameStringExpressionGrammarParser.IDENTIFIER);
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NameStringExpressionGrammarParser.OPEN_BRACKET) {
				{
				this.state = 112;
				this.match(NameStringExpressionGrammarParser.OPEN_BRACKET);
				this.state = 113;
				this.valueArgument();
				this.state = 114;
				this.match(NameStringExpressionGrammarParser.CLOSE_BRACKET);
				}
			}

			this.state = 118;
			this.match(NameStringExpressionGrammarParser.DOT);
			this.state = 119;
			this.propertyPath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyPath(): PropertyPathContext {
		let _localctx: PropertyPathContext = new PropertyPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, NameStringExpressionGrammarParser.RULE_propertyPath);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 121;
					_localctx._property = this.match(NameStringExpressionGrammarParser.IDENTIFIER);
					this.state = 122;
					this.match(NameStringExpressionGrammarParser.DOT);
					}
					}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 128;
			_localctx._property = this.match(NameStringExpressionGrammarParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryMinus(): UnaryMinusContext {
		let _localctx: UnaryMinusContext = new UnaryMinusContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, NameStringExpressionGrammarParser.RULE_unaryMinus);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(NameStringExpressionGrammarParser.MINUS);
			this.state = 131;
			this.valueArgument();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);

		case 1:
			return this.precpred(this._ctx, 11);

		case 2:
			return this.precpred(this._ctx, 8);

		case 3:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1F\x88\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x030\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03>\n\x03" +
		"\f\x03\x0E\x03A\v\x03\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05G\n\x05\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\bQ\n\b\f\b\x0E" +
		"\bT\v\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n_\n" +
		"\n\x03\n\x03\n\x03\v\x03\v\x03\v\x07\vf\n\v\f\v\x0E\vi\v\v\x03\v\x03\v" +
		"\x03\f\x03\f\x03\f\x05\fp\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\rw\n\r" +
		"\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x07\x0E~\n\x0E\f\x0E\x0E\x0E\x81\v" +
		"\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x02\x02\x03\x04\x10" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x06\x03\x02\x06\b\x03\x02\x04" +
		"\x05\x03\x02\x15\x1A\x03\x02\x10\x11\x02\x8D\x02\x1E\x03\x02\x02\x02\x04" +
		"/\x03\x02\x02\x02\x06B\x03\x02\x02\x02\bF\x03\x02\x02\x02\nH\x03\x02\x02" +
		"\x02\fJ\x03\x02\x02\x02\x0EL\x03\x02\x02\x02\x10X\x03\x02\x02\x02\x12" +
		"[\x03\x02\x02\x02\x14g\x03\x02\x02\x02\x16o\x03\x02\x02\x02\x18q\x03\x02" +
		"\x02\x02\x1A\x7F\x03\x02\x02\x02\x1C\x84\x03\x02\x02\x02\x1E\x1F\x05\x04" +
		"\x03\x02\x1F \x07\x02\x02\x03 \x03\x03\x02\x02\x02!\"\b\x03\x01\x02\"" +
		"0\x05\x1C\x0F\x02#$\x07\t\x02\x02$%\x05\x04\x03\x02%&\x07\n\x02\x02&0" +
		"\x03\x02\x02\x02\'(\x07\x12\x02\x02(0\x05\x04\x03\v)0\x05\b\x05\x02*0" +
		"\x05\x06\x04\x02+0\x05\x0E\b\x02,0\x05\x10\t\x02-0\x05\x12\n\x02.0\x05" +
		"\x18\r\x02/!\x03\x02\x02\x02/#\x03\x02\x02\x02/\'\x03\x02\x02\x02/)\x03" +
		"\x02\x02\x02/*\x03\x02\x02\x02/+\x03\x02\x02\x02/,\x03\x02\x02\x02/-\x03" +
		"\x02\x02\x02/.\x03\x02\x02\x020?\x03\x02\x02\x0212\f\x0E\x02\x0223\t\x02" +
		"\x02\x023>\x05\x04\x03\x0F45\f\r\x02\x0256\t\x03\x02\x026>\x05\x04\x03" +
		"\x0E78\f\n\x02\x0289\t\x04\x02\x029>\x05\x04\x03\v:;\f\t\x02\x02;<\t\x05" +
		"\x02\x02<>\x05\x04\x03\n=1\x03\x02\x02\x02=4\x03\x02\x02\x02=7\x03\x02" +
		"\x02\x02=:\x03\x02\x02\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02" +
		"\x02\x02@\x05\x03\x02\x02\x02A?\x03\x02\x02\x02BC\x07\x1D\x02\x02C\x07" +
		"\x03\x02\x02\x02DG\x05\n\x06\x02EG\x05\f\x07\x02FD\x03\x02\x02\x02FE\x03" +
		"\x02\x02\x02G\t\x03\x02\x02\x02HI\x07\x1E\x02\x02I\v\x03\x02\x02\x02J" +
		"K\x07\x1F\x02\x02K\r\x03\x02\x02\x02LR\x07\r\x02\x02MN\x05\x04\x03\x02" +
		"NO\x07\v\x02\x02OQ\x03\x02\x02\x02PM\x03\x02\x02\x02QT\x03\x02\x02\x02" +
		"RP\x03\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02TR\x03\x02\x02\x02" +
		"UV\x05\x04\x03\x02VW\x07\x0E\x02\x02W\x0F\x03\x02\x02\x02XY\x07\x03\x02" +
		"\x02YZ\x07\x1C\x02\x02Z\x11\x03\x02\x02\x02[\\\x07\x1C\x02\x02\\^\x07" +
		"\t\x02\x02]_\x05\x14\v\x02^]\x03\x02\x02\x02^_\x03\x02\x02\x02_`\x03\x02" +
		"\x02\x02`a\x07\n\x02\x02a\x13\x03\x02\x02\x02bc\x05\x04\x03\x02cd\x07" +
		"\v\x02\x02df\x03\x02\x02\x02eb\x03\x02\x02\x02fi\x03\x02\x02\x02ge\x03" +
		"\x02\x02\x02gh\x03\x02\x02\x02hj\x03\x02\x02\x02ig\x03\x02\x02\x02jk\x05" +
		"\x04\x03\x02k\x15\x03\x02\x02\x02lp\x05\b\x05\x02mp\x05\x10\t\x02np\x05" +
		"\x1C\x0F\x02ol\x03\x02\x02\x02om\x03\x02\x02\x02on\x03\x02\x02\x02p\x17" +
		"\x03\x02\x02\x02qv\x07\x1C\x02\x02rs\x07\r\x02\x02st\x05\x16\f\x02tu\x07" +
		"\x0E\x02\x02uw\x03\x02\x02\x02vr\x03\x02\x02\x02vw\x03\x02\x02\x02wx\x03" +
		"\x02\x02\x02xy\x07\f\x02\x02yz\x05\x1A\x0E\x02z\x19\x03\x02\x02\x02{|" +
		"\x07\x1C\x02\x02|~\x07\f\x02\x02}{\x03\x02\x02\x02~\x81\x03\x02\x02\x02" +
		"\x7F}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x82\x03\x02\x02\x02" +
		"\x81\x7F\x03\x02\x02\x02\x82\x83\x07\x1C\x02\x02\x83\x1B\x03\x02\x02\x02" +
		"\x84\x85\x07\x04\x02\x02\x85\x86\x05\x16\f\x02\x86\x1D\x03\x02\x02\x02" +
		"\f/=?FR^gov\x7F";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!NameStringExpressionGrammarParser.__ATN) {
			NameStringExpressionGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(NameStringExpressionGrammarParser._serializedATN));
		}

		return NameStringExpressionGrammarParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NameStringExpressionGrammarParser.RULE_compilationUnit; }
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NameStringExpressionGrammarParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryMinusExpressionContext extends ExpressionContext {
	public unaryMinus(): UnaryMinusContext {
		return this.getRuleContext(0, UnaryMinusContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpression) {
			return visitor.visitUnaryMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulDivExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.STAR, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.DIV, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.MODULO, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitMulDivExpression) {
			return visitor.visitMulDivExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddSubExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.MINUS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitAddSubExpression) {
			return visitor.visitAddSubExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenExpressionContext extends ExpressionContext {
	public OPEN_PARENS(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.CLOSE_PARENS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitParenExpression) {
			return visitor.visitParenExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegateExpressionContext extends ExpressionContext {
	public NOT(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.NOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitNegateExpression) {
			return visitor.visitNegateExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparatorExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.GT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.GE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.LT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.LE, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.NEQ, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitComparatorExpression) {
			return visitor.visitComparatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitBinaryExpression) {
			return visitor.visitBinaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberExpressionContext extends ExpressionContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitNumberExpression) {
			return visitor.visitNumberExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringExpressionContext extends ExpressionContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitStringExpression) {
			return visitor.visitStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public array(): ArrayContext {
		return this.getRuleContext(0, ArrayContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitArrayExpression) {
			return visitor.visitArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParameterReferenceExpressionContext extends ExpressionContext {
	public parameterReference(): ParameterReferenceContext {
		return this.getRuleContext(0, ParameterReferenceContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitParameterReferenceExpression) {
			return visitor.visitParameterReferenceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExpressionContext extends ExpressionContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) {
			return visitor.visitFunctionCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EntityExpressionContext extends ExpressionContext {
	public entity(): EntityContext {
		return this.getRuleContext(0, EntityContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitEntityExpression) {
			return visitor.visitEntityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public _val!: Token;
	public STRING(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NameStringExpressionGrammarParser.RULE_string; }
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public floating(): FloatingContext | undefined {
		return this.tryGetRuleContext(0, FloatingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NameStringExpressionGrammarParser.RULE_number; }
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public _val!: Token;
	public UNSIGNED_INTEGER(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.UNSIGNED_INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NameStringExpressionGrammarParser.RULE_integer; }
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitInteger) {
			return visitor.visitInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatingContext extends ParserRuleContext {
	public _val!: Token;
	public UNSIGNED_NUMBER(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.UNSIGNED_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NameStringExpressionGrammarParser.RULE_floating; }
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitFloating) {
			return visitor.visitFloating(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.OPEN_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.CLOSE_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NameStringExpressionGrammarParser.COMMA);
		} else {
			return this.getToken(NameStringExpressionGrammarParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NameStringExpressionGrammarParser.RULE_array; }
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitArray) {
			return visitor.visitArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterReferenceContext extends ParserRuleContext {
	public _name!: Token;
	public DOLLAR(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.DOLLAR, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NameStringExpressionGrammarParser.RULE_parameterReference; }
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitParameterReference) {
			return visitor.visitParameterReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public _name!: Token;
	public _args!: ArgumentListContext;
	public OPEN_PARENS(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.CLOSE_PARENS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.IDENTIFIER, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NameStringExpressionGrammarParser.RULE_functionCall; }
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NameStringExpressionGrammarParser.COMMA);
		} else {
			return this.getToken(NameStringExpressionGrammarParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NameStringExpressionGrammarParser.RULE_argumentList; }
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueArgumentContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public parameterReference(): ParameterReferenceContext | undefined {
		return this.tryGetRuleContext(0, ParameterReferenceContext);
	}
	public unaryMinus(): UnaryMinusContext | undefined {
		return this.tryGetRuleContext(0, UnaryMinusContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NameStringExpressionGrammarParser.RULE_valueArgument; }
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitValueArgument) {
			return visitor.visitValueArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityContext extends ParserRuleContext {
	public _name!: Token;
	public DOT(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.DOT, 0); }
	public propertyPath(): PropertyPathContext {
		return this.getRuleContext(0, PropertyPathContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.IDENTIFIER, 0); }
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.OPEN_BRACKET, 0); }
	public valueArgument(): ValueArgumentContext | undefined {
		return this.tryGetRuleContext(0, ValueArgumentContext);
	}
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(NameStringExpressionGrammarParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NameStringExpressionGrammarParser.RULE_entity; }
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitEntity) {
			return visitor.visitEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyPathContext extends ParserRuleContext {
	public _property!: Token;
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NameStringExpressionGrammarParser.IDENTIFIER);
		} else {
			return this.getToken(NameStringExpressionGrammarParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NameStringExpressionGrammarParser.DOT);
		} else {
			return this.getToken(NameStringExpressionGrammarParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NameStringExpressionGrammarParser.RULE_propertyPath; }
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitPropertyPath) {
			return visitor.visitPropertyPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryMinusContext extends ParserRuleContext {
	public MINUS(): TerminalNode { return this.getToken(NameStringExpressionGrammarParser.MINUS, 0); }
	public valueArgument(): ValueArgumentContext {
		return this.getRuleContext(0, ValueArgumentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NameStringExpressionGrammarParser.RULE_unaryMinus; }
	// @Override
	public accept<Result>(visitor: NameStringExpressionGrammarVisitor<Result>): Result {
		if (visitor.visitUnaryMinus) {
			return visitor.visitUnaryMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


