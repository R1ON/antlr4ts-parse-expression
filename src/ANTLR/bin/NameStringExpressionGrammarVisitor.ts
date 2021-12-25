// Generated from ./src/lib/ANTLR/NameStringExpressionGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { UnaryMinusExpressionContext } from "./NameStringExpressionGrammarParser";
import { MulDivExpressionContext } from "./NameStringExpressionGrammarParser";
import { AddSubExpressionContext } from "./NameStringExpressionGrammarParser";
import { ParenExpressionContext } from "./NameStringExpressionGrammarParser";
import { NegateExpressionContext } from "./NameStringExpressionGrammarParser";
import { ComparatorExpressionContext } from "./NameStringExpressionGrammarParser";
import { BinaryExpressionContext } from "./NameStringExpressionGrammarParser";
import { NumberExpressionContext } from "./NameStringExpressionGrammarParser";
import { StringExpressionContext } from "./NameStringExpressionGrammarParser";
import { ArrayExpressionContext } from "./NameStringExpressionGrammarParser";
import { ParameterReferenceExpressionContext } from "./NameStringExpressionGrammarParser";
import { FunctionCallExpressionContext } from "./NameStringExpressionGrammarParser";
import { EntityExpressionContext } from "./NameStringExpressionGrammarParser";
import { CompilationUnitContext } from "./NameStringExpressionGrammarParser";
import { ExpressionContext } from "./NameStringExpressionGrammarParser";
import { StringContext } from "./NameStringExpressionGrammarParser";
import { NumberContext } from "./NameStringExpressionGrammarParser";
import { IntegerContext } from "./NameStringExpressionGrammarParser";
import { FloatingContext } from "./NameStringExpressionGrammarParser";
import { ArrayContext } from "./NameStringExpressionGrammarParser";
import { ParameterReferenceContext } from "./NameStringExpressionGrammarParser";
import { FunctionCallContext } from "./NameStringExpressionGrammarParser";
import { ArgumentListContext } from "./NameStringExpressionGrammarParser";
import { ValueArgumentContext } from "./NameStringExpressionGrammarParser";
import { EntityContext } from "./NameStringExpressionGrammarParser";
import { PropertyPathContext } from "./NameStringExpressionGrammarParser";
import { UnaryMinusContext } from "./NameStringExpressionGrammarParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `NameStringExpressionGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface NameStringExpressionGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `NameStringExpressionGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `mulDivExpression`
	 * labeled alternative in `NameStringExpressionGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDivExpression?: (ctx: MulDivExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `addSubExpression`
	 * labeled alternative in `NameStringExpressionGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSubExpression?: (ctx: AddSubExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenExpression`
	 * labeled alternative in `NameStringExpressionGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpression?: (ctx: ParenExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `negateExpression`
	 * labeled alternative in `NameStringExpressionGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegateExpression?: (ctx: NegateExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparatorExpression`
	 * labeled alternative in `NameStringExpressionGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparatorExpression?: (ctx: ComparatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryExpression`
	 * labeled alternative in `NameStringExpressionGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryExpression?: (ctx: BinaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberExpression`
	 * labeled alternative in `NameStringExpressionGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpression?: (ctx: NumberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringExpression`
	 * labeled alternative in `NameStringExpressionGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayExpression`
	 * labeled alternative in `NameStringExpressionGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `parameterReferenceExpression`
	 * labeled alternative in `NameStringExpressionGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterReferenceExpression?: (ctx: ParameterReferenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `NameStringExpressionGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `entityExpression`
	 * labeled alternative in `NameStringExpressionGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityExpression?: (ctx: EntityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NameStringExpressionGrammarParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `NameStringExpressionGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NameStringExpressionGrammarParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `NameStringExpressionGrammarParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `NameStringExpressionGrammarParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `NameStringExpressionGrammarParser.floating`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloating?: (ctx: FloatingContext) => Result;

	/**
	 * Visit a parse tree produced by `NameStringExpressionGrammarParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `NameStringExpressionGrammarParser.parameterReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterReference?: (ctx: ParameterReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `NameStringExpressionGrammarParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `NameStringExpressionGrammarParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `NameStringExpressionGrammarParser.valueArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueArgument?: (ctx: ValueArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `NameStringExpressionGrammarParser.entity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity?: (ctx: EntityContext) => Result;

	/**
	 * Visit a parse tree produced by `NameStringExpressionGrammarParser.propertyPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyPath?: (ctx: PropertyPathContext) => Result;

	/**
	 * Visit a parse tree produced by `NameStringExpressionGrammarParser.unaryMinus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinus?: (ctx: UnaryMinusContext) => Result;
}

