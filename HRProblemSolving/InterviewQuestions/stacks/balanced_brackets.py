def isBalanced(s):
    pairs = {
        '}': '{',
        ')': '(',
        ']': '[',
    }
    
    opening = pairs.values()
    closing = pairs.keys()
       
    if s[0] in closing or s[len(s) - 1] in opening:
        return 'NO'
        
    stack = []  
    for i in range(len(s)):
        bracket = s[i]
        
        if bracket in opening:
            stack.append(bracket)
        else:
            if not stack:
                return 'NO'
            
            last = stack.pop()
            if pairs[bracket] != last:
                return 'NO'
    
    return 'YES'
        
      
# input_text = '[]][{]{(({{)[})(}[[))}{}){[{]}{})()[{}]{{]]]){{}){({(}](({[{[{)]{)}}}({[)}}([{{]]({{\n[]()([{}])[]{}[]\n)}{){(]{)([)}{)]())[(})[]]))({[[[)}[((]](])][({[]())\n{}()[[((()(({{[]}{}{{[]}}{}}))))]]{{{{([{{{{}}}}])}}}}\n{{[()()]}()}(())()()[[[]]][{[]()}(())]\n[}}{}]{[{)}[{(([)(([)(](}(]([}(()[)])}[{[{{](([]()[[[])([}}])){}(][)]{(]{)]]()({}}}(((]{]]\n(}{(()[][[){{}{{[}][]{{{{[{{[](}{)}](}}()]}(}(}}]}[](]]){{{()}({[[}}{{[]}(]}{(]{}}[()(}]{[[]{){{\n{}{[[[[[][]]]]({})]}[[]]\n)}}}){}{](]}){}((]]{][)]({[{)])[{])}(]]][)[{[}()[}])}}}]}}})]))[\n))())][})[{)]]})[({}[){)([])[}{}]{])({]{}}[(({({])]}\n[{(((([]))({{}{}[]{{()}[({[{}[]]}[][([])[]]{})[{}(){{[{}({}{{}[]}{({})}{((({})))})(){}]}}]]}})))}]\n)][)]}([]]))(]){}({{[]({{{({)]]}]{[}]]([)][[[()[][[}{}(]){(()[)[[[{]{)]}{{)[][()]{}(({]}])\n{]({}[[)[}([][[[)]()(]((}}}{}){}{}{]({][(]}()[}}{[{[((])})]{}}](}[[[){(([)({()[{(}}({}{]][)}(}({([(]\n{[])[))[)}}]}([}()}{{]}[)}{)}[}}]])}((((])[)[[()[{({](}]\n{(){{}}}{}{{({})}}{({(){}})}\n{}{([{{{{}})]{)]()[[}(}{\n[[()]{{}[()[([])([]{}[])]]}]\n{}))))((])({{[[}{])([})[([(]([)()(()(][](}]}])({]{()}[()(){[}(([[{{)}]]}(})((]}[([[()(\n[]{()({}[[]])}{}[()[[]]][]\n[][]{}({({})}({})()(){})\n[[()({()([()])()}[][])]][]([](){}{[{{}{[]()}}{{()}}{}]})(){}[[[(([]))]][]{[][]{()}()[[()]]}]\n}{)[(}]])[{)([()[})((}}]{]{{]([[]{{]([[{}[}(]]}({[{{))]][]]{}}])]([]())]](([}(}([[)}())([{\n)}}[({}}]{\n)()[(}}[{}[])))}({\n({([{}{((){}()[])}])})\n{][{(}[)()(}[)(]()(){))}]}]({)({}(}]\n{]))}}{)[}}(]()[]))]](]}([{}]}(}[){])(\n()])}{])(]})){){)){][}[{}[}[}[()[(({{{][[{}}{]]])}]([)][({\n{[[[[([{}]{{}(){}}[]){}]]]][{}]{}()}{}()[[[(([])){[]}]]]{}(())(){[]{[(([]()()))]}}[([]){}()]{{[{}]}}\n[[}]((({}()})[]][([(}]][\n{{[]{}}}[{[]}[{}]{}][](()[])[][([([[({{(()(()()[[[[]()]()()]()]){})(([[]{}]))}})]]())])]\n({]][[){[((([][[)[\n}[]{{]}{[{]]}[]}}](}[]}[)]){{)](}]}]}]][(]}(((})])([{}\n[({[][]}({{}[[{}{}()]]{()}}){{}[]{}{{()}}})]\n[]{}{()}[[]]{}(([])){}{}()[]{}{[(()){}{()}]({}){({})}}[[{{}[()]}{()}]]{{}}{()}{}{{}[]}\n[][{{[[{}(){}(())]{[{}]({})}]{}[[[{}[[]]]{}]]}}][([])([]())]\n()}}}[)}([}})[(}\n{(({}{}[{}()]{[]{}}))}\n[][][{}]{()(()({{{[]}[(){[][[(){{}}][{}][]{()}[(([[]{}[[](()[[]])]]){()}[])(([]()))]]}]}}))}\n(}(]}()(])()]}}{[]{(]]((]])}](}{}){{][[}{([[())([((}[](]([][[)})[[}[){[(}{]]][()[}\n}]([([[[{}{](({([])){[)([([(}}}}[{})(}](()]((](])})}]])){]}{}]()]](]])]]]]\n[(]){[}]}([[){){}[[}}}())})]})({](]{}([(][[]]()[[])}])\n{{)))}])(({){])]}{}]{})[]){)}(]{])][]{(}{{{)}{{[((]][]){](]()}])][](((]{{{\n){}[{())(]({]}]]){)]{((}{[{){[([([})]}])))}}[([([){({[[{}}{)}{\n)(][()){}{[}[{[[{({})([{{{)({[([)]]][[{(){}[{}(}[[{])(({([[)({}{{)}())}}})[({}])[(({({{{})[)((\n{[{{[[]]{}[{}]}{}}][](){}[[]]}[][](((({}))))[]{()}\n({}){{}}[]{}{}[{}(){}][][]{}[({{{[()]}({}{{}}[[]()])}[{[([[]{()}()]){}]}]})]\n})[)}[[[}(}[()])}([[)]()[)([{)(][)]})]{[}{({)))(()[)}[)[](\n[]\n[[([[]({[]}())])]](){}()()[]()[()][{}()](){[]}\n{[[[})){}){}[[((]][{[({}([{{[({[)]{)])[[[{((]{){]{))(}({}[([({}){[(}{(]]{}[{)({]]{}}}()]([\n[]{}[]{}[]({[{[]}]})\n({}({}))()()({(())}{{[]}{}[]((([[[][([][[]{}(()())()][][({})][]{}[]()[](()){})]]])))})\n{}}][[){(}{][}{{[))[(])(]][}{][}[)})({(][(}[{})[{){}\n(([[({})]()][])()()[])\n[({[(()[([{[][][]}])()]()[][])]})][](){{}[{}]}\n]}[(][})))}{){(])[}]))()}[)][){({[{(]]]}[[]{)([{([)[{)[]][)((([[(([}\n}{){{]})])}]\n{([()][[{[[]()]}({()}){()[{()}]}]])}\n[}[)]]]((]}){(](]{]]([)))][](]{]]]({{}]]]){)}})[()))({[[[([{}{))()[((]}]]{[}](}}}))}[[}[[{})\n[()][]({}){}[]()[()]{(([]))[{}]}{}{}()[[](){}]()[{()()}{}][][({}[])]{}{}[]()\n[][]()[]()({}){[{}[]{{}}{[]}[{(){[]{}()([][]())()}[[([])]]}]]}\n[)[[[(]]{[{[]]\n])}[{}][)]){(}))({([(}}[{{}[}](]{[][]()]([]{{{}})[))(]\n()()[]{}[](){}[][]()[][][](()(())){}{{(){[[()]]{}{{}}}}}\n}(}}\n)})()([)[}){\n(()){[[{}{{}}]]}\n{()()}{{[][[[{[][()][(()){[{}{}(({()}))[()](){}][]}({([({})](){})})]{(()()[(([{}]))])}}]]]}}\n(()){(){}[](()[])[]}()[[][]]()(){}{{}}()({}([({})([])])([[[]]][()])())()(){}[][{[([([{}{({})}])])]}]\n[[]][{{}[]}][[]{}([(({{}}[]([]{})))()])((()[]))]{(){}{}}({})[[]{}]()[{}]()(){}[[(())[()]]]\n(){}{()()((()([]{()}))[][({{{}{}()}[({}[(){}(()[[()[]]({}{}){}])]{})]}{})])}\n{())))[[(]{[}(])()()[}}((][{[{))}{{}}[){]}()}(]{]]})}{[(][][((]]]}(}]}])])}})]{}]{]([)({\n({]}]]'

# lst = input_text.split('\n')
# print(lst)

# for s in lst:
#     print(isBalanced(s))