from .eletrodomestico import Eletrodomestico

# Polimorfismo
# Polimorfismo é um outro pilar da orientação a objetos, e ocorre quando métodos diferentes são chamados por um mesmo nome. Existem vários tipos de polimorfismo, mas dois são mais comuns: sobrecarga de métodos (method overloading) e sobrescrita de métodos (method overriding). Vamos ver cada um deles.

# Sobrecarga de métodos
# A sobrecarga de métodos é algo que nativamente não existe em Python, mas é comum em outras linguagens, portanto é interessante entender. Ela acontece quando mais de um método pode ser definido com o mesmo nome, mas aceitando parâmetros em quantidades ou tipos diferentes. Por exemplo, na linguagem C++ podemos ter duas funções com o mesmo nome, func, onde uma recebe um número inteiro e outra recebe um caractere.

# // Código em C++
# #include "stdio.h"

# int func(int a) { return a + 1; }
# int func(char b) { return 4; }

# int main() { printf("%d %d", func(1), func('a')); }
# // saída: 2 4

# Se chamarmos func() passando um valor inteiro, a primeira função será chamada, e o retorno será o valor passado + 1. Já se chamarmos um valor do tipo caractere (char), o retorno será o valor 4. Este não é um exemplo útil, mas coisas bem complexas podem ser feitas por meio da sobrecarga em linguagens que as permitem.

# Uma boa explicação do motivo para o Python não possuir um suporte nativo para a sobrecarga é o fato de Python ter tipagem dinâmica, ou seja, os tipos de dado podem mudar durante a execução do programa. Em C++ os tipos das variáveis são definidos antes da execução do código, no tempo de compilação.

# Observação: o código acima funciona conforme explicado compilando com o g++, mas não com o gcc. Caso tenha o g++ instalado, você pode reproduzir o exemplo salvando o conteúdo em um arquivo e executando o seguinte comando: g++ meu_arquivo.cpp ; ./a.out.

# Parâmetros opcionais
# Apesar de não existir a sobrecarga, é comum a existência de parâmetros opcionais nas funções e métodos, o que a depender do uso pode levar a um funcionamento similar ao de sobrecarga.

# Pensando no exemplo da classe Pessoa, para declarar uma nova pessoa informamos a idade, o nome e saldo_na_conta. Mas será que é necessário? Podemos deixar alguns opcionais? Observe o exemplo a seguir:

class Pessoa:
    def __init__(self, nome, idade=None, saldo_na_conta=None):
        self.idade = idade
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.brinquedos = []

pessoa_1 = Pessoa("Marcelo", 22, 700)
pessoa_2 = Pessoa("Matheus")
pessoa_3 = Pessoa("Maria", 33)
pessoa_4 = Pessoa("Márcia", saldo_na_conta=100)

# Sobrescrita de métodos
# Já a sobrescrita de métodos é mais comum em qualquer linguagem que possua orientação a objetos. A sobrescrita ocorre quando um método definido em uma superclasse é novamente definido (reescrito/sobrescrito) na subclasse.

# Vamos continuar de onde paramos na lição anterior, onde criamos a classe Liquidificador que herda da classe Eletrodoméstico. Se quisermos, podemos reescrever alguns métodos de forma a deixá-los mais convenientes para o nosso uso. Para realizar a sobrescrita, basta declarar novamente o método na subclasse. Vamos a um exemplo:

class Liquidificador(Eletrodomestico):
    def esta_ligado(self):
        return False
    
# Este método não é nada útil visto que sempre retorna False, mas nos ajuda a entender que podemos simplesmente escrever uma nova lógica para um método.


# Super
# Talvez você já conheça o super, mas vamos ver como ele pode ser útil no contexto de sobrescrita de métodos. Imagine que você quer somente melhorar o método da superclasse, por exemplo mudando o valor que ele retorna. Não faz sentido, em diversas ocasiões, que você reescreva tudo e modifique só algumas coisas. As vezes você quer reaproveitar o que já foi feito e somente dar uma incrementada. É aí que entra o super.

# Lembrando que o super é uma referência à superclasse, ou seja, a classe da qual você está herdando.

# -- Na verdade no caso do Python, que possui herança múltipla, é uma referência à próxima classe da MRO (Ordem de Resolução de Métodos).

# Por meio dessa referência, você pode acessar métodos da superclasse por meio da subclasse. Para isso utilizamos a notação super().método().

class Liquidificador(Eletrodomestico):
    def esta_ligado(self):
        return "Sim" if super().esta_ligado() else "Não"

# Neste exemplo em específico nós modificamos o tipo de retorno do método esta_ligado, retornando strings ao invés de um booleano (isso é uma má prática pois fere o princípio de substituição de Liskov, mas vamos ignorar este detalhe para o exemplo continuar simples). Observe que há uma chamada ao mesmo método na superclasse, de forma a não precisar recriar a lógica dele na subclasse. Neste caso aqui é algo simples, pois é só o retorno de um booleano, mas Eletrodomestico.esta_ligado poderia ser um método complexo e custoso, fazendo com que reaproveitá-lo seja a melhor escolha.

# Vamos ver um exemplo de como informar que o Ventilador e o Liquidificador herdam da classe Eletrodomestico:

class Liquidificador(Eletrodomestico):
    pass

class Ventilador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco, quantidade_de_portas=1):
        # Chamada ao construtor da superclasse
        super().__init__(cor, potencia, tensao, preco)
        
        # Faz outras coisas específicas dessa subclasse
        self.quantidade_de_portas = quantidade_de_portas


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomesticos = []

    # Permite a aquisição de qualquer eletrodoméstico
    def comprar_eletrodomestico(self, eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomestico.append(eletrodomestico)

# Polimorfismo com interface
# O polimorfismo com interfaces se utiliza da sobrescrita de métodos de uma maneira muito interessante para garantir que, mesmo esperando um item do tipo da superclasse, ele tenha métodos devidamente implementados na subclasse. E isso se dá por meio de classes abstratas.

# Classe abstrata
# Uma classe abstrata é aquela que não pode possuir instâncias a partir dela, existindo apenas para ser herdada.

# -- Na verdade o Python é uma linguagem tão permissiva que você até consegue criar instâncias da classe abstrata, mas conceitualmente é algo que não deve ser feito.

# Geralmente classes mais genéricas são abstratas, e classes mais específicas herdam delas. Por exemplo podemos ter uma classe Database que é abstrata e duas classes normais que herdam dela: MongoDatabase e MySQLDatabase. A classe Database pode vir com alguns métodos prontos para as classes que herdam dela utilizarem, podem ter métodos abstratos ou ambos ou até mesmo nenhum método (sendo uma classe puramente conceitual).

# Para criar uma classe abstrata em Python, basta criar uma classe que herda de abc.ABC:

from abc import ABC, abstractmethod


class Database(ABC):
    pass


# Métodos abstratos
# Nas classes abstratas podemos ter (mas não temos a obrigação de ter) alguns métodos abstratos, que são métodos que não possuem uma implementação, e servem para obrigar a classe normal que herda da classe abstrata a implementá-los (por meio da sobrescrita de métodos). Por exemplo, na classe Database podemos ter o método abstrato connect. Esse método não possui implementação em Database, mas MongoDatabase e MySQLDatabase, classes normais, são obrigadas a implementá-lo.

# Para declarar um método como abstrato, utilizamos o decorador @abc.abstractmethod, e preenchemos o corpo do método com um pass, com Ellipsis (...) ou com um raise NotImplementedError:

# from abc import ABC, abstractmethod  --- ja importado na linha 106

class Database(ABC):
    @abstractmethod
    def execute(self, query):
        ...


class MongoDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mongo")


class MySQLDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")

# Mix de classes abstratas
# Uma classe abstrata pode herdar de outra classe abstrata, e então pode ou não implementar os métodos abstratos da superclasse. A primeira classe não abstrata na hierarquia deve implementar todos os métodos abstratos que ainda não tiverem sido implementados por uma de suas superclasses.


# Interface
# Interfaces são o equivalente a classes abstratas que somente possuem métodos abstratos, ou seja, nenhum método já é implementado. Em algumas linguagens de programação existe uma palavra reservada e uma sintaxe específica para a criação e uso de interfaces. Em Python são apenas classes abstratas comuns que são herdadas por classes normais.

# A diferença de uma classe abstrata para uma interface é que uma classe abstrata pode possuir métodos que as subclasses irão herdar e reaproveitar, enquanto que a interface é só um contrato para definir métodos que devem ser implementados.

# Retomando o exemplo, o fato de Database ter um método abstrato execute garante que se um objeto é instância de qualquer classe descendente de Database, com toda certeza ele possui um método execute implementado. Por isso que as classes normais devem implementar todos os métodos abstratos.

def minha_func(database): # repare que o d é minúsculo
    if isinstance(database, Database):
        database.execute("query qualquer")
    else:
        print(f"{database} não é um Database válido")

db1 = MongoDatabase()
db2 = MySQLDatabase()

minha_func(db1)
minha_func(db2)
minha_func("db_inválido")

# executando query 'query qualquer' no mongo
# executando query 'query qualquer' no mysql
# db_inválido não é um Database válido

# -- A função isinstance retorna se um objeto é instância de uma classe ou de qualquer uma de suas subclasses.

# Pode não parecer tão impressionante, mas Python possui type hints, e as tipagens poderiam ser avaliadas em tempo de checagem estática, e não de execução, como foi com o uso de isinstance:

# repare que coloco o tipo do parâmetro, ou seja, `database` é do tipo
# `Database`
def minha_func(database: Database):
    database.execute("query qualquer")

# Colocar a tipagem deixa a função mais simples, pois não será necessário confirmar em tempo de execução que database é de fato uma instância de Database. Antes mesmo de rodar o programa já receberia um erro no vs code ao chamar minha_func("db_inválido").

#--  Se quiser saber mais sobre tipagem, pesquise as diferenças entre tipagem estrutural em tempo de execução (duck typing ou tipagem pato), tipagem nominal em tempo de execução (goose typing ou tipagem ganso), tipagem estática (type hints ou dicas de tipos) e tipagem estrutural estática (duck typing estático por meio da classe typing.Protocol). O Python suporta todas as 4.