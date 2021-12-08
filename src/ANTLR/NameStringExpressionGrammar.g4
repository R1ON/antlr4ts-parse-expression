grammar NameStringExpressionGrammar;

DOLLAR : '$';

MINUS : '-';

PLUS : '+';
STAR : '*';
DIV : '/';
MODULO : '%';

OPEN_PARENS : '(';
CLOSE_PARENS : ')';
COMMA : ',';
DOT : '.';
OPEN_BRACKET : '[';
CLOSE_BRACKET : ']';
UNDERSCORE : '_';

AND        : '&&' ;
OR         : '||' ;
NOT        : '!' ;
TRUE       : 'TRUE' | 'true' ;
FALSE      : 'FALSE' | 'false' ;
GT         : '>' ;
GE         : '>=' ;
LT         : '<' ;
LE         : '<=' ;
EQ         : '==' ;
NEQ        : '!=' ;

WhiteSpace : (' ' | '\r\n' | '\r' | '\n') -> channel(HIDDEN);

compilationUnit : expression EOF;

expression : unaryMinus                                                          # unaryMinusExpression
           | expression op = (STAR | DIV | MODULO) expression                    # mulDivExpression
           | expression op = (PLUS | MINUS) expression                           # addSubExpression
           | OPEN_PARENS expression CLOSE_PARENS                                 # parenExpression
           | NOT expression                                                      # negateExpression
           | expression op = (GT | GE | LT | LE | EQ | NEQ) expression           # comparatorExpression
           | expression op = (AND | OR) expression                               # binaryExpression
           | number                                                              # numberExpression
           | string                                                              # stringExpression
           | array                                                               # arrayExpression
           | parameterReference                                                  # parameterReferenceExpression
           | functionCall                                                        # functionCallExpression
           | entity                                                              # entityExpression
           ;

string : val = STRING;

number : integer
       | floating;

integer : val = UNSIGNED_INTEGER;

floating : val = UNSIGNED_NUMBER;

array : OPEN_BRACKET (expression COMMA)* expression CLOSE_BRACKET;

parameterReference : DOLLAR name = IDENTIFIER ;

functionCall : name = IDENTIFIER OPEN_PARENS args = argumentList? CLOSE_PARENS;

argumentList : (expression COMMA)* expression;

valueArgument : number
			  | parameterReference
		      | unaryMinus;

entity : name = IDENTIFIER (OPEN_BRACKET valueArgument CLOSE_BRACKET)? DOT propertyPath;

propertyPath : (property = IDENTIFIER DOT)* property = IDENTIFIER;

unaryMinus : MINUS valueArgument;

IDENTIFIER : IdentifierOrKeyword;

STRING
       : '"' (.)*? '"'
       | '\'' (.)*? '\'';

UNSIGNED_INTEGER : DigitCharacter+;

UNSIGNED_NUMBER : DigitCharacter+ ((DOT DigitCharacter+ (Exponent)?)? | Exponent);

fragment Exponent : ('e') ('+' | '-')? DigitCharacter+;

fragment DigitCharacter : [0-9];

fragment LetterCharacter : [a-zA-Z\u0410-\u04FF];

fragment IdentifierOrKeyword : IdentifierStartCharacter IdentifierPartCharacter*;

fragment IdentifierStartCharacter : LetterCharacter
                                  | UNDERSCORE
                                  ;

fragment IdentifierPartCharacter : LetterCharacter
                                 | DigitCharacter
                                 | UNDERSCORE
                                 ;
